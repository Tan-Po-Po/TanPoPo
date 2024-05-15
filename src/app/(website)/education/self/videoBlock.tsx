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
            src: "https://www.youtube.com/watch?v=rpVYjsBWTPc",
          })
        )
      }
    >
      <Image
        src="/photos/selfCoursesEducation.png"
        alt="Japanese courses"
        width={970}
        height={550}
      />
      <div className={cl.title}>🎌Курси для самостійного навчання🎌</div>
      <PlayButton className={cl.playBtn} />
    </div>
  );
};

export { VideoBlock };
