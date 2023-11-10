"use client";
import { useRef } from "react";
import cl from "./carouselItem.module.scss";
import { getValidClassNames } from "@/helpers";

interface Props {
  isOutlined?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const CarouselItem: React.FC<Props> = ({
  children,
  isOutlined,
  className,
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
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
