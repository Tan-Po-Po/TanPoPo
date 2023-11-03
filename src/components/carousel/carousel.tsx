"use client";
import cl from "./carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ArrowButton from "../arrowButton/arrowButton";
import { getValidClassNames } from "@/helpers";

type Props = {
  children: React.ReactNode;
  dots?: boolean;
  slidesToShow?: number;
  centerMode?: boolean;
};

const Carousel: React.FC<Props> = ({ children, ...props }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <ArrowButton direction={"right"} />,
    prevArrow: <ArrowButton direction={"left"} />,
    dotsClass: getValidClassNames("slick-dots", cl.dotsContainer),

    customPaging: () => <div className={cl.dot} id="carouselDot"></div>,
  };

  return (
    <div className={cl.sliderWrapper} style={{ width: "600px" }}>
      <Slider {...settings} {...props}>
        {children}
      </Slider>
    </div>
  );
};

// interface;
// const Dot: React.FC<>;

export default Carousel;
