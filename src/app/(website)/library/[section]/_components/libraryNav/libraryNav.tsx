"use client";
import { librarySections } from "@/config/librarySections";
import cl from "./libraryNav.module.scss";
import { NavButton } from "./navButton/navButton";
import { Carousel } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { useWindowSize } from "@uidotdev/usehooks";

export const LibraryNav = () => {
  const { isMobile } = useAppSelector(selectWindowMatchMedia);

  const { width } = useWindowSize();

  return (
    <div className={cl.nav}>
      <Carousel
        renderCarousel={width! < 660 || isMobile}
        rows={2}
        slidesToShow={1}
        dots={false}
        useNumbers
        slideAmount={librarySections.length / 2}
        infinite={false}
        centerPadding="130px"
      >
        {librarySections.map((section, i) => (
          <NavButton key={i} {...section} />
        ))}
      </Carousel>
    </div>
  );
};
