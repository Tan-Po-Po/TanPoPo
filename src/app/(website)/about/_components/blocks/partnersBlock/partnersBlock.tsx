"use client";
import { Carousel, CarouselItem, ContentCard, Typography } from "@/components";
import cl from "./partnersBlock.module.scss";
import { textContent } from "../../../textContent";
import { IPartner } from "@/models/Partner";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/config";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

export const PartnersBlock = ({ partners }: { partners: IPartner[] }) => {
  const { isPc } = useAppSelector(selectWindowMatchMedia);
  return (
    <div
      className={cl.partnersBlock}
      id="partners"
      style={{ scrollMarginTop: "100px" }}
    >
      <Typography variant="h3">{textContent.partnersBlock.header}</Typography>
      <Typography variant="h6">{textContent.partnersBlock.title}</Typography>
      <ContentCard width="1238px" className={cl.carouselCard}>
        <Carousel autoplay={true} arrows={isPc}>
          {partners.map((partner) => (
            <CarouselItem key={partner._id} isHoverEventActive={isPc}>
              <Image
                alt=""
                src={`${IMAGE_BASE_URL}/${partner.image.filename}`}
                width={500}
                height={300}
                style={{ width: "100%", minWidth: "180px", height: "auto" }}
              />
            </CarouselItem>
          ))}
        </Carousel>

        <Typography variant="body1">
          {textContent.partnersBlock.caption}
        </Typography>
      </ContentCard>
    </div>
  );
};
