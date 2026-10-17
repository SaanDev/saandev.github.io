"""Create orientation-correct, metadata-free WebP copies of the COSPAR 2026 photos."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "Images" / "COSPAR2026"
OUTPUT = ROOT / "public" / "images" / "research" / "cospar-2026"
PHOTOS = {
    "IMG_2175.JPG": "workshop-group",
    "IMG_5187.JPG": "teaching-session",
    "IMG_5747.JPG": "presentation-team",
    "IMG_6227.JPG": "certificate-presentation",
    "IMG_3365.JPG": "workshop-colleague",
}


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    original_bytes = total_bytes = 0
    for filename, slug in PHOTOS.items():
        source = SOURCE / filename
        original_bytes += source.stat().st_size
        with Image.open(source) as original:
            image = ImageOps.exif_transpose(original).convert("RGB")
            for limit, suffix, quality in [(1800, "", 84), (900, "-900", 80)]:
                resized = image.copy()
                resized.thumbnail((limit, limit), Image.Resampling.LANCZOS)
                target = OUTPUT / f"{slug}{suffix}.webp"
                resized.save(target, "WEBP", quality=quality, method=6, exif=b"")
                total_bytes += target.stat().st_size
                print(f"{target.name}: {resized.width}x{resized.height}, {target.stat().st_size:,} bytes")
    print(f"Originals: {original_bytes:,} bytes; WebP (both sizes): {total_bytes:,} bytes; reduction: {1-total_bytes/original_bytes:.1%}")


if __name__ == "__main__":
    main()
