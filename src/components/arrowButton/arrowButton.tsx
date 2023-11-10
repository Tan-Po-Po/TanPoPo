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
}

const ArrowButton: React.FC<Props> = ({
  direction = "right",
  className,
  handleClickToAnimate,
  ...props
}) => {
  return (
    <div className={cl.wrapper} onClick={handleClickToAnimate}>
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
