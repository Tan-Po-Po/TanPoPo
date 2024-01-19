import { ContentCard } from "@/components";
import cl from "../libraryItemCard.module.scss";
import { Props } from "../props";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";
import PlayButtonIcon from "/public/icons/playButton.svg";
import { CardFooter } from "../cardFooter/cardFooter";
import { IMAGE_BASE_URL } from "@/config/config";

export const ReelsCard: React.FC<Props> = (props) => {
  const { label, labelColor, media } = props;

  return (
    <ContentCard className={cl.reels} width="384px">
      <ContentCard className={getValidClassNames(cl.imageContainer, cl.video)}>
        <Image
          alt=""
          src={`${IMAGE_BASE_URL}/${media[0].image?.filename}`}
          width={300}
          height={500}
          style={{ maxWidth: "272px", width: "100%", height: "auto" }}
        />
        <div className={cl.playButton}>
          <PlayButtonIcon />
        </div>
      </ContentCard>
      <CardFooter item={props} />
    </ContentCard>
  );
};
