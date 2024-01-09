"use client";
import { librarySections } from "@/config/librarySections";
import { LibraryCard } from "../libraryCard/libraryCard";
import { Carousel, CarouselItem } from "@/components";
import cl from "./libraryTable.module.scss";
import { useWindowSize } from "@uidotdev/usehooks";

export const LibraryTable: React.FC = () => {
  const { width } = useWindowSize();
  console.log(width)
  return width! > 550 ? (
    <section className={cl.libraryTable}>
      {librarySections.map((section, i) => (
        <LibraryCard key={i} {...section} width="260px"/>
      ))}
    </section>
  ) : (
    <Carousel
      initialSlide={0}
      slideAmount={Math.ceil(librarySections.length / 2)}
      useNumbers
      dots={false}
      slidesToShow={1}
      className={cl.carousel}
      rows={2}
      infinite={false}
    >
      {librarySections.map((section, i) => (
        <CarouselItem key={i} className={cl.slide}>
          <LibraryCard {...section} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};
