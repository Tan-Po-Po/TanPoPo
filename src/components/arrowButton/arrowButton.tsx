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
}

const ArrowButton: React.FC<Props> = ({
  direction = "right",
  className,
  ...props
}) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  return (
    <div
      className={getValidClassNames(className, cl.arrow, cl[direction])}
      {...props}
    >
      <TriangleIcon />
    </div>
  );
};

export default ArrowButton;
