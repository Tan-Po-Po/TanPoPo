"use client";
import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import Image from "next/image";
import PlayButton from "public/icons/playButton.svg";
import cl from "./page.module.scss";

const VideoBlock = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={cl.video}
      onClick={() =>
        dispatch(
          openGalleryDialog({
            type: "video",
            src: "https://www.youtube.com/watch?v=8ypRvNZhocU",
          })
        )
      }
    >
      <Image
        src="/photos/university.jpg"
        alt="Japanese modern building"
        width={970}
        height={550}
      />
      <div className={cl.title}>Як проходять наші онлайн-заняття?</div>
      <PlayButton className={cl.playBtn} />
    </div>
  );
};

export { VideoBlock };
