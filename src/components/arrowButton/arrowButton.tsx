"use client";
import { CSSProperties, useRef } from "react";
import cl from "./arrowButton.module.scss";
import TriangleIcon from "/public/icons/triangleButton.svg";
import { getIconSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";

interface Props {
  direction: "left" | "right";
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  handleClickToAnimate?: () => void;
}

const ArrowButton: React.FC<Props> = ({
  direction = "right",
  className,
  handleClickToAnimate,
  ...props
}) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  return (
    <div className={cl.clickHandler} onClick={handleClickToAnimate}>
      <div
        className={getValidClassNames(className, cl.arrow, cl[direction])}
        {...props}
      >
        <TriangleIcon />
      </div>
    </div>
  );
};

export default ArrowButton;
