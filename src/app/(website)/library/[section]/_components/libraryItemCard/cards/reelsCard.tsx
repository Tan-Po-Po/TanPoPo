import { ContentCard } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";
import PlayButtonIcon from "/public/icons/playButton.svg";
import { Footer } from "../footer/footer";

export const ReelsCard: React.FC<Props> = (props) => {
  const { label, labelColor, gallery, hashtags, _id } = props;

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
          src={gallery![0].image}
          fill
          style={{ objectFit: "cover" }}
        />
        <PlayButtonIcon />
      </ContentCard>
      <Footer item={props} />
    </ContentCard>
  );
};
