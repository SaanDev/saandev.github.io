type PlaceholderMediaProps = {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  eager?: boolean;
};

export function PlaceholderMedia({
  label,
  className = "",
  src,
  alt = "",
  eager = false,
}: PlaceholderMediaProps) {
  if (src) {
    return (
      <div className={`media-frame has-image ${className}`}>
        <img
          src={src}
          alt=""
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={`media-frame media-placeholder placeholder-note ${className}`}
      role="img"
      aria-label={alt || label.replaceAll("[", "").replaceAll("]", "")}
    >
      <span className="media-orbit" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
