import Image from "next/image";

type IconProps = {
  href: string;
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function Icon({
  href,
  src,
  alt,
  size = 32,
  className,
}: IconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={className}
      />
    </a>
  );
}
