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

export const DialogGallery = () => {
  const galleryDialog = useAppSelector(selectGalleryDialog);
  const dispatch = useAppDispatch();
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
            height: "auto",
          }}
        />
      ) : (
        <iframe
          width="560"
          height="315"
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
