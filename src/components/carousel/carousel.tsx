"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from "./carousel.module.scss";
import Slider from "react-slick";
import ArrowButton from "../arrowButton/arrowButton";
import { getValidClassNames } from "@/helpers";
import { useEffect, useRef, useState } from "react";
import { Typography } from "..";

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
  variableWidth?: boolean;
  adaptiveHeight?: boolean;
  responsive?: any[];
  slideAmount?: number;
  useNumbers?: boolean;
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
  variableWidth = true,
  adaptiveHeight = false,
  responsive = [],
  slideAmount,
  useNumbers = false,
}) => {
  const ref = useRef<Slider | null>(null);
  const speed = 300;
  const [activeSlide, setActiveSlide] = useState(initialSlide);

  const handleArrowButtonClick = (direction: "Left" | "Right") => {
    direction === "Left"
      ? setActiveSlide((prev) => (prev !== 0 ? prev - 1 : prev))
      : setActiveSlide((prev) => (prev !== slideAmount! - 1 ? prev + 1 : prev));
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
    centerMode,
    focusOnSelect,
    autoplay,
    autoplaySpeed,
    initialSlide,
    arrows,
    rows,
    slidesPerRow,
    pauseOnHover,
    variableWidth,
    adaptiveHeight,
    responsive,
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
    afterChange: function (index: number) {
      setActiveSlide(index);
    },
  };

  return (
    <div
      className={getValidClassNames(
        cl.sliderWrapper,
        useNumbers && cl.numberSlider,
        className
      )}
    >
      <Slider {...settings} ref={ref} className={cl.slider}>
        {children}
      </Slider>
      {useNumbers && (
        <div className={cl.numbers}>
          <Typography variant="h5">
            {activeSlide + 1}/{slideAmount}
          </Typography>
        </div>
      )}
    </div>
  );
};

export { Carousel };
