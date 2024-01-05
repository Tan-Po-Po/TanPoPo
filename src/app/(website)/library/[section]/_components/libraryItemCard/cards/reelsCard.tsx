import { ContentCard } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";
import PlayButtonIcon from "/public/icons/playButton.svg";
import { Footer } from "../footer/footer";
import { IMAGE_BASE_URL } from "@/config/config";

export const ReelsCard: React.FC<Props> = (props) => {
  const { label, labelColor, media } = props;

  return (
    <ContentCard
      className={cl.reels}
      label={label}
      labelBgColor={labelColor}
      width="384px"
    >
      <ContentCard className={getValidClassNames(cl.imageContainer, cl.video)}>
        <Image
          alt=""
          src={`${IMAGE_BASE_URL}/${media[0].image?.filename}`}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={cl.playButton}>
          <PlayButtonIcon />
        </div>
      </ContentCard>
      <Footer item={props} />
    </ContentCard>
  );
};
