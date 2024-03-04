"use client";
import { Carousel, CarouselItem, ContentCard, Typography } from "@/components";
import cl from "./partnersBlock.module.scss";
import { textContent } from "../../../textContent";
import { IPartner } from "@/models/Partner";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/config";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

export const PartnersBlock = ({ partners }: { partners: IPartner[] }) => {
  const { width } = useWindowSize();
  const isPc = Boolean(width && width >= 1024);

  return (
    <div
      className={cl.partnersBlock}
      id="partners"
      style={{ scrollMarginTop: "120px" }}
    >
      <Typography variant="h3">{textContent.partnersBlock.header}</Typography>
      <Typography variant="h6" className={cl.title}>
        {textContent.partnersBlock.title}
      </Typography>
      <ContentCard width="1238px" className={cl.carouselCard}>
        <Carousel autoplay={true} arrows={isPc} className={cl.carousel}>
          {partners.map((partner) => (
            <CarouselItem key={partner._id} isHoverEventActive={isPc}>
              <Link href={partner.link} target="_blank">
                <Image
                  alt=""
                  src={`${IMAGE_BASE_URL}/${partner.image.filename}`}
                  width={500}
                  height={300}
                  style={{
                    width: "100%",
                    minWidth: "180px",
                    maxWidth: " 271px",
                    height: "auto",
                  }}
                />
              </Link>
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
