"use client";
import { CSSProperties } from "react";
import cl from "./arrowButton.module.scss";
import TriangleIcon from "/public/icons/triangleButton.svg";
import { getValidClassNames } from "@/helpers";

interface Props {
  direction: "left" | "right";
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  handleClickToAnimate?: () => void;
  slideCount?: number;
  currentSlide?: number;
}

const ArrowButton: React.FC<Props> = ({
  direction = "right",
  className,
  handleClickToAnimate,
  slideCount,
  currentSlide,
  ...props
}) => {
  return (
    <div
      className={cl.wrapper}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        handleClickToAnimate && handleClickToAnimate();
      }}
    >
      <div
        className={getValidClassNames(cl.arrow, cl[direction], className)}
        {...props}
      >
        <TriangleIcon />
      </div>
    </div>
  );
};

export default ArrowButton;
