import type { PersonalImage } from "../data/personal-images";

type PersonalStoryGalleryProps = {
  images: PersonalImage[];
  label: string;
  compact?: boolean;
};

export function PersonalStoryGallery({
  images,
  label,
  compact = false,
}: PersonalStoryGalleryProps) {
  return (
    <div
      className={`personal-story-gallery${compact ? " personal-story-gallery-compact" : ""}`}
      aria-label={label}
    >
      {images.map((image, index) => (
        <figure
          className={`personal-story-image personal-story-image-${image.layout || "portrait"} personal-story-image-${(index % 5) + 1}`}
          key={image.src}
        >
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        </figure>
      ))}
    </div>
  );
}
