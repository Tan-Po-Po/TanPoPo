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
import { useAppDispatch } from "@/redux/hooks";
import { Gallery } from "./gallery/gallery";

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

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className={cl.dialog}
      contentClassName={cl.content}
      scroll="paper"
    >
      <ContentCard
        cardBgColor={item?.labelColor}
        className={cl.label}
        width="fit-content"
      >
        <Typography variant="body1">{item!.label}</Typography>
      </ContentCard>

      <div className={cl.gallery}>
        <Gallery item={item} />
      </div>

      <LibraryItemContent
        content={item.content!}
        cardType={item.type}
        color={item.labelColor}
        isDialog={true}
      />
      <Footer item={item} />
    </Dialog>
  );
};

export default DialogArticle;
