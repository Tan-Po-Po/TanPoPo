"use client";

import React from "react";
import { Typography } from "../typography/typography";
import { ContentCard } from "../contentCard/contentCard";
import { Checkbox } from "../checkbox/checkbox";
import { Select } from "../select/select";
import Carousel from "../carousel/carousel";
import { getValidClassNames } from "@/helpers";
import { TeacherCard } from "./teacherCard";
import cl from "./courseCardDescription.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ICourse } from "@/models/Course";
import PlayBtn from "../../../public/icons/playButton.svg";
import TriangleBtn from "../../../public/icons/playButtonTest.svg";
import { CarouselItem } from "../carousel/carouselItem/carouselItem";

type Properties = {
  course: ICourse;
};

const typeClassMap = {
  video: cl.video,
  audio: cl.audio,
  book: cl.book,
};

const placeholders = {
  video: "Відеокурс🎬 & Ціна",
  audio: "Аудіокурс🎧 & Ціна",
  book: "Посібники📖 & Ціна",
};

const CourseCardDescription: React.FC<Properties> = ({ course }) => {
  const courseInfo = course.large;
  const [isGift, setIsGift] = React.useState(false);
  const [lessons, setLessons] = React.useState<null | string>(null);
  const [isAccepted, setIsAccepted] = React.useState(false);

  const toggleGift = () => {
    setIsGift((prev) => !prev);
  };
  const toggleAcceptation = () => {
    setIsAccepted((prev) => !prev);
  };

  return course.type === "teacher" || course.type === "mega" ? (
    <TeacherCard course={course} />
  ) : (
    <ContentCard
      className={getValidClassNames(cl.card, typeClassMap[course.type])}
      label={
        <Link href={`courses/${course._id}`}>
          <Typography variant="h5" className={cl.name}>
            {course.name}
          </Typography>
          <Typography variant="body2" className={cl.nameJpn}>
            {course.nameJapanese}
          </Typography>
        </Link>
      }
      labelClassName={cl.header}
      labelBgColor={courseInfo.labelColor}
      labelPosition="top"
      cardBgColor={courseInfo.bgColor}
      width={"625px"}
    >
      {courseInfo.description.map((desc, index) => (
        <Typography key={index} className={cl.description} variant="body1">
          {desc.text}
        </Typography>
      ))}

      {course.type === "video" && (
        <Link href={course.href}>
          <div className={cl.imageWrapper}>
            <Image
              src={course.image[0]}
              alt="Course image"
              width={500}
              height={280}
            />
            <PlayBtn className={cl.playBtn} />
          </div>
        </Link>
      )}

      {course.type === "audio" && (
        <ContentCard className={cl.podcast} cardBgColor={courseInfo.labelColor}>
          <Link href={course.href || ""} className={cl.link}>
            <TriangleBtn
              className={cl.triangleBtn}
              src="/icons/triangleButton.svg"
              alt="Play button"
            />
          </Link>
          <Image
            className={cl.audioImg}
            src="/icons/audioLong.svg"
            alt="Audio"
            width={430}
            height={40}
          />
        </ContentCard>
      )}

      {course.type === "book" && (
        <Carousel
          dots={false}
          slidesToShow={2}
          centerMode={false}
          className={cl.carousel}
        >
          {course.image.map((img, index) => (
            <CarouselItem isOutlined={false} key={index}>
              <Image
                className={cl.image}
                src={img}
                alt="Book course image"
                width={215}
                height={215}
                style={{ width: "215px", height: "215px" }}
              />
            </CarouselItem>
          ))}
          {/* <CarouselItem isOutlined={false}>
            <Image
              className={cl.image}
              src={`/courses/tales1.png`}
              alt="Book course image"
              width={215}
              height={215}
              style={{ width: "215px", height: "215px" }}
            />
          </CarouselItem>
          <CarouselItem isOutlined={false}>
            <Image
              className={cl.image}
              src={`/courses/tales2.png`}
              alt="Audio"
              width={215}
              height={215}
              style={{ width: "215px", height: "215px" }}
            />
          </CarouselItem> */}
        </Carousel>
      )}

      <section className={cl.labels}>
        {course.labels.concat(courseInfo.labels).map((label, index) => (
          <Typography
            variant="body2"
            key={index}
            className={cl.label}
            style={{ background: courseInfo.labelColor }}
          >
            {label}
          </Typography>
        ))}
      </section>

      <Select
        className={cl.select}
        placeHolder={placeholders[course.type]}
        menuItems={course.prices.map((price, idx) => {
          return {
            label: (
              <Typography variant="body2">
                {price.lessons} {idx === 0 ? "уроки" : "уроків"} ({price.price}
                грн){" "}
                <span className={cl.greyText}>
                  ({Math.round(price.price / price.lessons)}грн)
                </span>
              </Typography>
            ),
            value: `${price.lessons} ${idx === 0 ? "уроки" : "уроків"} (${
              price.price
            })`,
          };
        })}
        handleSelect={(value: string) => setLessons(value)}
        checkbox
        checkboxLabel="Подарунковий Сертифікат🎁"
        setGift={toggleGift}
        gift={isGift}
      />

      {isGift && (
        <Checkbox
          label="Подарунковий Сертифікат🎁"
          onClick={toggleGift}
          isChecked={isGift}
        />
      )}

      {course.type !== "book" && (
        <Checkbox
          className={cl.checkbox}
          label={
            <Typography variant="body2">
              Я ознайомлений з <Link href="/">Навчальним Періодом</Link> для
              самостійних курсів!
            </Typography>
          }
          onClick={toggleAcceptation}
          isChecked={isAccepted}
        />
      )}

      <ContentCard
        className={getValidClassNames(
          cl.bottomBtn,
          isGift && cl.giftBtn,
          !isGift && cl.startBtn,
          course.type !== "book" && !isAccepted && cl.disabledBtn
        )}
      >
        {isGift && (
          <Typography variant="body1">Навчання у Подарунок!</Typography>
        )}
        {!isGift && (
          <Typography variant="body1">Розпочати навчання!</Typography>
        )}
      </ContentCard>
    </ContentCard>
  );
};

export { CourseCardDescription };
