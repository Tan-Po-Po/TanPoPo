"use client";
import { ContentCard, Dialog, Typography } from "@/components";
import cl from "./dialogArticle.module.scss";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ILibraryItem } from "@/models/LibraryItem";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { getEmbedYouTubeLink, getValidClassNames } from "@/helpers";
import Image from "next/image";
import PlayButtonIcon from "/public/icons/playButton.svg";
import Carousel from "@/components/carousel/carousel";
import { CarouselItem } from "@/components/carousel/carouselItem/carouselItem";
import { Footer } from "../libraryItemCard/footer/footer";

interface Props {
  page: string;
  items: ILibraryItem[];
}
const DialogArticle: React.FC<Props> = ({ page, items }) => {
  const router = useRouter();
  const path = usePathname();
  const id = useSearchParams().get("id");

  const item = items.find((item) => item._id === id) as ILibraryItem;

  console.log("dialog item", item);

  const handleClose = () => {
    router.push(`${path}?page=${page}`, { scroll: false });
  };

  const getVideoLink = () => {
    if (!item.gallery?.length) {
      return item.content!.find((item) => item.type === "audio")!.href!;
    }

    return item.gallery[0].video!;
  };

  const getGallery = () => {
    if (!item.gallery?.length || item.gallery[0].type === "video") {
      return (
        <ContentCard
          width="fit-content"
          style={{ padding: 0, overflow: "hidden" }}
        >
          <iframe
            width="666"
            height="376"
            src={getEmbedYouTubeLink(getVideoLink())}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </ContentCard>
      );
    }
    if (item.gallery.length === 1) {
      return (
        <ContentCard
          width="666px"
          className={getValidClassNames(cl.imageContainer)}
        >
          <Image
            alt=""
            src={item.gallery[0].image}
            width={1920}
            height={1080}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </ContentCard>
      );
    } else {
      return (
        <Carousel
          dots={false}
          slidesToShow={2}
          centerMode={false}
          focusOnSelect={false}
          className={cl.carousel}
        >
          {item.gallery.map((image) => (
            <CarouselItem
              key={image.id || image._id}
              className={cl.carouselItem}
              isOutlined={true}
            >
              <Image
                alt=""
                src={image.image}
                fill
                style={{ objectFit: "cover" }}
              />
            </CarouselItem>
          ))}
        </Carousel>
      );
    }
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className={cl.dialog}
      contentClassName={cl.content}
      scroll="body"
    >
      <ContentCard
        cardBgColor={item?.labelColor}
        className={cl.label}
        width="fit-content"
      >
        <Typography variant="body1">{item!.label}</Typography>
      </ContentCard>

      <div className={cl.gallery}>
        {
          getGallery()
          /* {item.gallery.length === 1 ? (
            item.gallery[0].type === "image" ? (
              <ContentCard
                width="666px"
                className={getValidClassNames(cl.imageContainer)}
              >
                <Image
                  alt=""
                  src={item.gallery[0].image}
                  width={1920}
                  height={1080}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </ContentCard>
            ) : (
              <ContentCard
                width="fit-content"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <iframe
                  width="666"
                  height="376"
                  src={getEmbedYouTubeLink(getVideoLink())}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </ContentCard>
            )
          ) : (
            <Carousel
              dots={false}
              slidesToShow={2}
              centerMode={false}
              focusOnSelect={false}
              className={cl.carousel}
            >
              {item.gallery.map((image) => (
                <CarouselItem
                  key={image.id || image._id}
                  className={cl.carouselItem}
                  isOutlined={true}
                >
                  <Image
                    alt=""
                    src={image.image}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </CarouselItem>
              ))}
            </Carousel>
          )} */
        }
      </div>

      <LibraryItemContent
        content={item.content!}
        cardType={item.type}
        color={item.labelColor}
        isDialog={true}
      />
      <Footer hashtags={item.hashtags} cardId={item._id!} />
    </Dialog>
  );
};

export default DialogArticle;
