"use client";
import { useRef } from "react";
import cl from "./carouselItem.module.scss";
import { getValidClassNames } from "@/helpers";
import PlayButtonIcon from "/public/icons/playButton.svg";

interface Props {
  isOutlined?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "video" | "image";
  onClick?: () => void;
}

export const CarouselItem: React.FC<Props> = ({
  children,
  isOutlined,
  className,
  type = "image",
  onClick,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    ref.current!.classList.remove(cl.hovered);

    ref.current!.classList.add(cl.clicked);
  };

  const handleMouseEnter = () => {
    ref.current!.classList.add(cl.hovered);
  };

  const handleMouseLeave = () => {
    ref.current!.classList.remove(cl.clicked);
    ref.current!.classList.remove(cl.hovered);
  };

  return (
    <div
      ref={ref}
      className={getValidClassNames(
        cl.carouselItem,
        isOutlined && cl.isOutlined,
        className
      )}
      onClick={onClick || handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {type === "video" && (
        <div className={cl.playButtonIcon}>
          <PlayButtonIcon />
        </div>
      )}
    </div>
  );
};
