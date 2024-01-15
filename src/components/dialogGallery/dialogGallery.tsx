"use client";
import cl from "./dialogGallery.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Dialog } from "..";
import {
  closeGalleryDialog,
  selectGalleryDialog,
} from "@/redux/slices/galleryDialog/galleryDialogSlice";
import Image from "next/image";
import { getEmbedYouTubeLink } from "@/helpers";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

export const DialogGallery = () => {
  const galleryDialog = useAppSelector(selectGalleryDialog);
  const dispatch = useAppDispatch();

  const { isPc, isTablet, isMobile } = useAppSelector(selectWindowMatchMedia);

  const iFrameWidth =
    (isPc && "760") || (isTablet && "560") || (isMobile && "340") || "560";

  const iFrameHeight =
    (isPc && "515") || (isTablet && "315") || (isMobile && "215") || "315";

  return (
    <Dialog
      onClose={() => dispatch(closeGalleryDialog())}
      open={galleryDialog.isOpen}
      className={cl.dialog}
      contentClassName={cl.content}
    >
      {galleryDialog.type === "image" ? (
        <Image
          alt=""
          src={galleryDialog.src}
          sizes="100vw"
          width={1920}
          height={1080}
          style={{
            width: "100%",
            minWidth: "300px",
            height: "auto",
          }}
        />
      ) : (
        <iframe
          width={iFrameWidth}
          height={iFrameHeight}
          src={getEmbedYouTubeLink(galleryDialog.src)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </Dialog>
  );
};
