import Image from "next/image";
import cl from "./page.module.scss";
import Carousel from "@/components/carousel/carousel";
import { CarouselItem } from "@/components/carousel/carouselItem/carouselItem";

export default function Home() {
  const image = [
    <Image
      alt=""
      key={1}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={2}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={13}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={14}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={15}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={16}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={17}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={18}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
    <Image
      alt=""
      key={19}
      src={"/temp/Property 1=Default (1).png"}
      width={500}
      height={300}
      style={{ width: "230px", height: "auto" }}
    />,
  ];
  return (
    <main className={cl.main}>
      <h1>Test page</h1>
      <Carousel>
        {image.map((img, i) => (
          <CarouselItem key={i}>{img}</CarouselItem>
        ))}
      </Carousel>
    </main>
  );
}
