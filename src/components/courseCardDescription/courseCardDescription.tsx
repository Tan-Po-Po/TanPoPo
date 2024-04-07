"use client";

import React, { useState } from "react";
import { Typography } from "../typography/typography";
import { ContentCard } from "../contentCard/contentCard";
import { Checkbox } from "../checkbox/checkbox";
import { Select } from "../select/select";
import { Carousel } from "../carousel/carousel";
import { getValidClassNames, parseCoursePrices } from "@/helpers";
import { TeacherCard } from "./teacherCard";
import cl from "./courseCardDescription.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ICourse } from "@/models/Course";
import PlayBtn from "../../../public/icons/playButton.svg";
import { CarouselItem } from "../carousel/carouselItem/carouselItem";
import { AudioButton } from "../audioButton/audioButton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IMAGE_BASE_URL } from "@/config/config";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { CourseState, setCourse } from "@/redux/slices/course/courseSlice";

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
  const { width } = useWindowSize();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const courseInfo = course.large;
  const [isGift, setIsGift] = useState(false);
  const [lessons, setLessons] = useState<null | string>(null);
  const [isAccepted, setIsAccepted] = useState(false);
  const [link, setLink] = useState<null | string>(null);

  const toggleGift = () => {
    setIsGift((prev) => !prev);
  };
  const toggleAcceptation = () => {
    setIsAccepted((prev) => !prev);
  };

  const handleClick = () => {
    if (!lessons) {
      return toast("Спочатку оберіть К-сть уроків!📚");
    }
    if (!isAccepted && !(course.type === "book")) {
      return toast("Спочатку ознайомтесь з навчальним періодом!📚");
    }

    if (isGift) {
      const courseLevel =
        course.level.length > 1
          ? `${course.level[0]}/${course.level.at(-1)}`
          : course.level[0];

      const selectedCourse: Partial<CourseState> = {
        id: course._id,
        type: course.type,
        name: course.name,
        japanName: course.nameJapanese,
        format: "Індивідуально",
        lessons: Number(lessons.slice(0, 2).trim()),
        price: lessons.match(/\(([^)]+)\)/)![1],
        level: courseLevel,
        isGift,
        backgroundColor: course.large.labelColor,
        lessonDuration: course.lessonDuration,
        accessDuration: course.accessDuration,
      };
      dispatch(setCourse(selectedCourse));
      return router.push("/education/gift");
    }

    return link && router.push(link);
  };

  return course.type === "teacher" || course.type === "mega" ? (
    <TeacherCard course={course} />
  ) : (
    <ContentCard
      className={getValidClassNames(cl.card, typeClassMap[course.type])}
      label={
        <>
          <Typography variant="h5" className={cl.name}>
            {course.name}
          </Typography>
          <Typography variant="body2" className={cl.nameJpn}>
            {course.nameJapanese}
          </Typography>
        </>
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
        <div
          className={cl.imageWrapper}
          onClick={() =>
            dispatch(
              openGalleryDialog({
                type: "video",
                src: course.href,
              })
            )
          }
        >
          <Image
            src={`${IMAGE_BASE_URL}/${course.images[0].image.filename}`}
            alt="Course image"
            width={500}
            height={280}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <PlayBtn className={cl.playBtn} />
        </div>
      )}

      {course.type === "audio" && (
        <AudioButton
          isPodcast={width! > 500}
          color={courseInfo.labelColor}
          onClick={() =>
            dispatch(
              openGalleryDialog({
                type: "video",
                src: course.href,
              })
            )
          }
        />
      )}

      {course.type === "book" && (
        <Carousel
          dots={false}
          slidesToShow={width! > 600 ? 2 : 1}
          centerMode={width! < 600}
          className={cl.carousel}
        >
          {course.images.map((item, index) => (
            <CarouselItem
              key={index}
              isOutlined={true}
              className={cl.carouselItem}
              onClick={() =>
                dispatch(
                  openGalleryDialog({
                    type: "image",
                    src: `${IMAGE_BASE_URL}/${item.image.filename}`,
                  })
                )
              }
            >
              <Image
                className={cl.image}
                alt="Book course image"
                src={`${IMAGE_BASE_URL}/${item.image.filename}`}
                sizes="(max-width: 2400px) 215px"
                fill
                style={{ objectFit: "contain" }}
              />
            </CarouselItem>
          ))}
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
        menuItems={course.prices.individual.map((price) => {
          return parseCoursePrices(price, course.type);
        })}
        handleSelect={(value: string, link?: string) => {
          setLessons(value);
          link && setLink(link);
        }}
      />

      <div className={cl.checkboxes}>
        <Checkbox
          label="Подарунковий Сертифікат🎁"
          onClick={toggleGift}
          isChecked={isGift}
          className={getValidClassNames(cl.checkbox, cl.giftCheckbox)}
        />

        {course.type !== "book" && lessons && (
          <>
            <div className={cl.line}></div>
            <div className={cl.checkboxWrapper}>
              <Checkbox
                className={cl.checkbox}
                onClick={toggleAcceptation}
                isChecked={isAccepted}
              />
              <Link href="/self-education" target="_blank">
                <Typography variant="body2">
                  Я ознайомлений з <u>Навчальним Періодом</u> для самостійних
                  курсів!
                </Typography>
              </Link>
            </div>
          </>
        )}
      </div>

      <ContentCard
        onClick={handleClick}
        className={getValidClassNames(
          cl.bottomBtn,
          isGift && cl.giftBtn,
          !isGift && cl.startBtn
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
