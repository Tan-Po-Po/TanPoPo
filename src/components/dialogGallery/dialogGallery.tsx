"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Dialog } from "..";
import {
  closeGalleryDialog,
  selectGalleryDialog,
} from "@/redux/slices/galleryDialog/galleryDialogSlice";
import Image from "next/image";
import { getEmbedYouTubeLink } from "@/helpers/getEmbedYouTubeLink";

export const DialogGallery = () => {
  const galleryDialog = useAppSelector(selectGalleryDialog);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      onClose={() => dispatch(closeGalleryDialog())}
      open={galleryDialog.isOpen}
    >
      {galleryDialog.type === "image" ? (
        <Image
          alt=""
          src={galleryDialog.src}
          sizes="100vw"
          width={500}
          height={500}
          style={{
            maxWidth: "500px",
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
