"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from "./carousel.module.scss";
import Slider from "react-slick";
import ArrowButton from "../arrowButton/arrowButton";
import { getValidClassNames } from "@/helpers";
import { useRef, useState } from "react";
import { Typography } from "..";

type Props = {
  children: React.ReactNode;
  id?: string;
  sliderClassName?: string;
  renderCarousel?: boolean;
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
  centerPadding?: string;
  numbersClass?: string;
  accessibility?: boolean;
};

const Carousel: React.FC<Props> = ({
  children,
  id,
  sliderClassName,
  className,
  renderCarousel = true,
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
  centerPadding = "50px",
  numbersClass,
  accessibility = true,
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
    centerPadding,
    accessibility,
    nextArrow: (
      <ArrowButton
        direction={"right"}
        className="slick-arrow"
        handleClickToAnimate={() => handleArrowButtonClick("Right")}
        onClick={(e) => e.stopPropagation()}
      />
    ),
    prevArrow: (
      <ArrowButton
        direction={"left"}
        className="slick-arrow"
        handleClickToAnimate={() => handleArrowButtonClick("Left")}
        onClick={(e) => e.stopPropagation()}
      />
    ),
    dotsClass: getValidClassNames("slick-dots", cl.dotsContainer),
    customPaging: () => <div className={cl.dot} id="carouselDot"></div>,
    afterChange: function (index: number) {
      setActiveSlide(index);
    },
  };

  if (!renderCarousel) {
    return children;
  }

  return (
    <div
      className={getValidClassNames(
        cl.sliderWrapper,
        useNumbers && cl.numberSlider,
        className
      )}
      id={id}
    >
      <Slider {...settings} ref={ref} className={cl.slider} swipe>
        {children}
      </Slider>
      {useNumbers && (
        <div className={getValidClassNames(cl.numbers, numbersClass)}>
          <Typography variant="h5">
            {activeSlide + 1}/{slideAmount}
          </Typography>
        </div>
      )}
    </div>
  );
};

export { Carousel };
