"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from "./carousel.module.scss";
import Slider from "react-slick";
import ArrowButton from "../arrowButton/arrowButton";
import { getValidClassNames } from "@/helpers";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  dots?: boolean;
  slidesToShow?: number;
  centerMode?: boolean;
  className?: string;
  focusOnSelect?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  initialSlide?: number;
  arrows?: boolean;
  rows?: number;
  slidesPerRow?: number;
  pauseOnHover?: boolean;
};

const Carousel: React.FC<Props> = ({
  children,
  className,
  dots = true,
  slidesToShow = 3,
  centerMode = true,
  focusOnSelect = true,
  infinite = true,
  autoplay = false,
  autoplaySpeed = 3000,
  initialSlide = 0,
  arrows = true,
  rows = 1,
  slidesPerRow = 1,
  pauseOnHover = true,
}) => {
  const ref = useRef<Slider | null>(null);
  const speed = 300;

  const handleArrowButtonClick = (direction: "Left" | "Right") => {
    ref.current!.innerSlider!.list!.style.animation = `animateCarousel${direction} 0.5s`;
    ref.current!.innerSlider!.list!.style.animationDelay = "0.1s";

    setTimeout(() => {
      ref.current!.innerSlider!.list!.style.animation = "";
    }, speed * 2);
  };

  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode,
    focusOnSelect,
    autoplay,
    autoplaySpeed,
    initialSlide,
    arrows,
    rows,
    slidesPerRow,
    pauseOnHover,
    nextArrow: (
      <ArrowButton
        direction={"right"}
        handleClickToAnimate={() => handleArrowButtonClick("Right")}
      />
    ),
    prevArrow: (
      <ArrowButton
        direction={"left"}
        handleClickToAnimate={() => handleArrowButtonClick("Left")}
      />
    ),
    dotsClass: getValidClassNames("slick-dots", cl.dotsContainer),
    customPaging: () => <div className={cl.dot} id="carouselDot"></div>,
  };

  return (
    <div className={getValidClassNames(cl.sliderWrapper, className)}>
      <Slider {...settings} ref={ref} className={cl.slider}>
        {children}
      </Slider>
    </div>
  );
};

export { Carousel };
