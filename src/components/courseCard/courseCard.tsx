"use client";
import React from "react";
import { Typography } from "../typography/typography";
import { Checkbox } from "../checkbox/checkbox";
import { ContentCard } from "../contentCard/contentCard";
import { Select } from "../select/select";
import { getValidClassNames } from "@/helpers";
import cl from "./courseCard.module.scss";
import { ICourse } from "@/models/Course";
import { TeacherCourseCard } from "./teacherCourseCard";
import PlayBtn from "../../../public/icons/playWhite.svg";
import Image from "next/image";
import Link from "next/link";

type Properties = {
  course: ICourse;
};

const typeClassMap = {
  teacher: cl.teacher,
  video: cl.video,
  audio: cl.audio,
  book: cl.book,
};

const placeholders = {
  teacher: "К-сть Уроків & Ціна",
  video: "Відеокурс🎬 & Ціна",
  audio: "Аудіокурс🎧 & Ціна",
  book: "Посібники📖 & Ціна",
};

const CourseCard: React.FC<Properties> = ({ course }) => {
  const courseInfo = course.medium;
  const [isGift, setIsGift] = React.useState(false);
  const [lessons, setLessons] = React.useState<null | string>(null);

  const toggleGift = () => {
    console.log(isGift);
    setIsGift((prev) => !prev);
  };

  return course.type === "teacher" ? (
    <TeacherCourseCard course={course} />
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
      labelBgColor={courseInfo.labelColor}
      labelPosition="top"
      cardBgColor={courseInfo.bgColor}
      width={course.type === "book" ? "385px" : "625px"}
      // style={{ minHeight: 700 }}
    >
      {courseInfo.description.map((desc, index) => (
        <Typography key={index} className={cl.description} variant="body1">
          {desc}
        </Typography>
      ))}

      <div className={cl.imageWrapper}>
        <Image src={course.image} alt="Course image" width={500} height={280} />
        <PlayBtn className={cl.playBtn} />
      </div>
      
      <section className={cl.labels}>
        {course.labels.map((label, index) => (
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

      <Checkbox
        label={
          <Typography variant="body2">
            Я ознайомлений з <Link href="/">Навчальним Періодом</Link> для
            самостійних курсів!
          </Typography>
        }
      />
      <ContentCard
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

export { CourseCard };
