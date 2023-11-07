"use client";
import { useRef } from "react";
import cl from "./carouselItem.module.scss";

interface Props {
  children: React.ReactNode;
}

export const CarouselItem: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
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
      className={cl.carouselItem}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
