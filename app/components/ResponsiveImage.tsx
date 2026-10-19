import type { ImgHTMLAttributes } from "react";
import imageManifest from "../data/image-manifest.json";

type ImageMetadata = {
  width: number;
  height: number;
  variants: { src: string; width: number }[];
};

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
};

// Static variants work on both GitHub Pages and the Worker without an image service.
export function ResponsiveImage({
  src,
  alt,
  sizes = "(max-width: 1248px) calc(100vw - 48px), 1200px",
  srcSet,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  ...props
}: ResponsiveImageProps) {
  const metadata = (imageManifest as Record<string, ImageMetadata>)[src];

  return (
    // Static WebP sizes replace the runtime optimizer for this exported site.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={src}
      alt={alt}
      srcSet={srcSet ?? metadata?.variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ")}
      sizes={metadata || srcSet ? sizes : undefined}
      width={width ?? metadata?.width}
      height={height ?? metadata?.height}
      loading={loading}
      decoding={decoding}
    />
  );
}
