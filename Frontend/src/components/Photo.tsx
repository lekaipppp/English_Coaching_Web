import Image from "next/image";

export default function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 40vw, 100vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line shadow-sm ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
