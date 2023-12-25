import { ContentCard } from "@/components";
import cl from "./audioButton.module.scss";
import TriangleIcon from "/public/icons/triangleButton.svg";
import AudioShortIcon from "/public/icons/audioShort.svg";
import AudioLongIcon from "/public/icons/audioLong.svg";

import Link from "next/link";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";

interface Props {
  isPodcast: boolean;
  href: string;
  color: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const AudioButton: React.FC<Props> = ({
  isPodcast,
  href,
  color,
  className,
  onClick,
}) => {
  return (
    <ContentCard
      width="100%"
      cardBgColor={color}
      className={getValidClassNames(cl.audioButton, className && className)}
      onClick={onClick}
    >
      <Link href={href} className={cl.link}>
        <div className={cl.triangleBtn}>
          <TriangleIcon />
        </div>
      </Link>

      <Image
        className={cl.audioImg}
        src={`/icons/${isPodcast ? "audioLong" : "audioShort"}.svg`}
        alt="Audio"
        width={430}
        height={40}
      />
    </ContentCard>
  );
};
