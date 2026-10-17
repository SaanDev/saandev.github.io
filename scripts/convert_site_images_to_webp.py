"""Convert remaining public raster assets to WebP; archive originals outside public/."""
from pathlib import Path
import shutil
from PIL import Image, ImageOps, ImageChops

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ARCHIVE = ROOT / "Images" / "website-originals"
EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".avif", ".bmp", ".tif", ".tiff"}


def main():
    sources = sorted(p for p in PUBLIC.rglob("*") if p.suffix.lower() in EXTENSIONS)
    before = after = 0
    for source in sources:
        relative = source.relative_to(PUBLIC)
        target = source.with_suffix(".webp")
        if target.exists():
            raise FileExistsError(f"Refusing to overwrite {target}")
        with Image.open(source) as opened:
            if getattr(opened, "is_animated", False):
                raise ValueError(f"Animated asset needs a frame-preserving conversion: {relative}")
            image = ImageOps.exif_transpose(opened)
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
            # Preserve scientific plots, document text, and screenshots pixel-for-pixel.
            lossless = relative != Path("images/sahan-liyanage-portrait.jpg")
            image.save(target, "WEBP", lossless=lossless, quality=88, method=6, exif=b"")
            with Image.open(target) as encoded:
                encoded.load()
                assert encoded.size == image.size
                if lossless:
                    assert ImageChops.difference(image, encoded.convert(image.mode)).getbbox() is None
        original = ARCHIVE / relative
        original.parent.mkdir(parents=True, exist_ok=True)
        if original.exists() and original.read_bytes() != source.read_bytes():
            raise FileExistsError(f"Different original already archived: {original}")
        shutil.copy2(source, original)
        before += source.stat().st_size
        after += target.stat().st_size
        source.unlink()
        print(f"{relative} -> {target.name}: {target.stat().st_size:,} bytes")
    print(f"Converted {len(sources)} images: {before:,} -> {after:,} bytes ({1-after/before:.1%} smaller)" if sources else "All public raster assets are already WebP.")


if __name__ == "__main__":
    main()
