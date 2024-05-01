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
import { useWindowSize } from "@uidotdev/usehooks";

export const DialogGallery = () => {
  const galleryDialog = useAppSelector(selectGalleryDialog);
  const dispatch = useAppDispatch();

  const {width} = useWindowSize()
  const isPc = Boolean(width && width >= 1024)
  const isMobile = Boolean(width && width < 678)
  const isTablet = Boolean(width && width >= 678 && width < 1024)

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
          // sizes="100vw"
          width={1920}
          height={1080}
          style={{
            maxWidth: "calc(100vw - 20px)",
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
