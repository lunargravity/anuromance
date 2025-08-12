import Image from "next/image";
import { BASE_PATH } from "@/config/constants";

type SpiceLevelProps = {
  level: number;
};

export default function SpiceLevel({ level }: SpiceLevelProps) {
  const spiceIcons = Array.from({ length: level }, (_, index) => (
    <Image
      key={index}
      src={`${BASE_PATH}/spice.png`}
      alt={`Spice Level ${index + 1}`}
      width={15}
      height={15}
      className="spice-icon"
    />
  ));

  return (
    <div className="spice-level">
      {spiceIcons}
      {level === 0 && <span className="no-spice">No Spice</span>}
    </div>
  );
}