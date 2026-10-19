"""Generate static WebP variants and dimensions. Requires Pillow (pip install Pillow)."""
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUTPUT = PUBLIC / "images" / "responsive"
MANIFEST = ROOT / "app" / "data" / "image-manifest.json"


def main():
    manifest = {}
    total_source = total_small = 0
    for source in sorted((PUBLIC / "images").rglob("*.webp")):
        if OUTPUT in source.parents:
            continue
        relative = source.relative_to(PUBLIC)
        with Image.open(source) as image:
            image.load()
            if getattr(image, "is_animated", False):
                raise ValueError(f"Animated image needs frame-preserving resizing: {relative}")
            variants = []
            for width in (480, 960):
                if width >= image.width:
                    continue
                target = OUTPUT / relative.relative_to("images").with_suffix("") / f"{width}.webp"
                target.parent.mkdir(parents=True, exist_ok=True)
                resized = image.resize(
                    (width, max(1, round(image.height * width / image.width))),
                    Image.Resampling.LANCZOS,
                )
                # Keep text and scientific graphics lossless after resizing.
                scientific = "research" in relative.parts and not any(
                    part.startswith("cospar-") or part == "raman-spectroscopy"
                    for part in relative.parts
                )
                resized.save(target, "WEBP", quality=82, lossless=scientific, method=6, exif=b"")
                variants.append({"src": "/" + target.relative_to(PUBLIC).as_posix(), "width": width})
            url = "/" + relative.as_posix()
            variants.append({"src": url, "width": image.width})
            manifest[url] = {"width": image.width, "height": image.height, "variants": variants}
            total_source += source.stat().st_size
            total_small += (PUBLIC / variants[0]["src"].lstrip("/")).stat().st_size
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Prepared {len(manifest)} images; smallest candidates: {total_source:,} -> {total_small:,} bytes ({1-total_small/total_source:.1%} smaller).")


if __name__ == "__main__":
    main()
