import { ContentCard } from "@/components";
import cl from "./audioButton.module.scss";
import TriangleIcon from "/public/icons/triangleButton.svg";
import AudioShortIcon from "/public/icons/audioShort.svg";
import AudioLongIcon from "/public/icons/audioLong.svg";

import Link from "next/link";
import Image from "next/image";

interface Props {
  isPodcast: boolean;
  href: string;
  color: string;
}

export const AudioButton: React.FC<Props> = ({ isPodcast, href, color }) => {
  console.log("color", color);

  return (
    <ContentCard width="100%" cardBgColor={color} className={cl.audioButton}>
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
      {/* {isPodcast ? <AudioLongIcon /> : <AudioShortIcon />} */}
    </ContentCard>
  );
};
