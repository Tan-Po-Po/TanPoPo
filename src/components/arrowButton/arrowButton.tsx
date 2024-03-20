"use client";
import { CSSProperties } from "react";
import cl from "./arrowButton.module.scss";
import TriangleIcon from "/public/icons/triangleButton.svg";
import { getValidClassNames } from "@/helpers";

interface Props {
  direction: "left" | "right";
  className?: string;
  style?: CSSProperties;
  onClick?: (e?: any) => void;
  handleClickToAnimate?: () => void;
  slideCount?: number;
  currentSlide?: number;
  wrapperClassName?: string;
  disableHover?: boolean;
}

const ArrowButton: React.FC<Props> = ({
  direction = "right",
  className,
  handleClickToAnimate,
  slideCount,
  currentSlide,
  wrapperClassName,
  disableHover,
  ...props
}) => {
  return (
    <div
      className={getValidClassNames(cl.wrapper, wrapperClassName)}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        handleClickToAnimate && handleClickToAnimate();
      }}
    >
      <div
        className={getValidClassNames(
          cl.arrow,
          cl[direction],
          className,
          disableHover && cl.disableHover
        )}
        {...props}
      >
        <TriangleIcon />
      </div>
    </div>
  );
};

export default ArrowButton;
