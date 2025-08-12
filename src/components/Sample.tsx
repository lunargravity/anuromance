import Image from "next/image";

type IconProps = {
  onClick: () => void;
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function Sample({
  onClick,
  src,
  alt,
  size = 32,
  className,
}: IconProps) {
  return (
    <div
      onClick={onClick}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={className}
      />
    </div>
  );
}
