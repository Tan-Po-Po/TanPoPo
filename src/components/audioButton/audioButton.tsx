import { ContentCard } from "@/components";
import cl from "./audioButton.module.scss";
import TriangleIcon from "/public/icons/triangleButton.svg";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";

interface Props {
  isPodcast: boolean;
  color: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const AudioButton: React.FC<Props> = ({
  isPodcast,
  color,
  className,
  onClick,
}) => {
  return (
    <ContentCard
      cardBgColor={color}
      className={getValidClassNames(cl.audioButton, className && className)}
      onClick={onClick}
    >
      <div className={cl.triangleBtn}>
        <TriangleIcon />
      </div>

      <div className={cl.audioImgWrapper}>
        <Image
          className={cl.audioImg}
          src={`/icons/${isPodcast ? "audioLong" : "audioShort"}.svg`}
          alt="Audio"
          width={430}
          height={40}
          style={{ maxWidth: "100%", width: "100%" }}
        />
      </div>
    </ContentCard>
  );
};
