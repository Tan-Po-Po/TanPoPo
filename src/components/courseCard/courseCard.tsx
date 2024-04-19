"use client";
import React, { useState } from "react";
import { Typography } from "../typography/typography";
import { Checkbox } from "../checkbox/checkbox";
import { ContentCard } from "../contentCard/contentCard";
import { Select } from "../select/select";
import { getValidClassNames, parseCoursePrices } from "@/helpers";
import cl from "./courseCard.module.scss";
import { ICourse } from "@/models/Course";
import { TeacherCourseCard } from "./teacherCourseCard";
import PlayBtn from "../../../public/icons/playButton.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AudioButton } from "../audioButton/audioButton";
import { IMAGE_BASE_URL } from "@/config/config";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { CourseState, setCourse } from "@/redux/slices/course/courseSlice";

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
  const { width } = useWindowSize();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const courseInfo = course.medium;
  const [isGift, setIsGift] = useState(false);
  const [lessons, setLessons] = useState<null | string>(null);
  const [isAccepted, setIsAccepted] = useState(false);
  const [link, setLink] = useState<null | string>(null);

  const handleClick = () => {
    if (!lessons) {
      return toast("Спочатку оберіть К-сть уроків!📚", {
        toastId: "lessonsAmount",
      });
    }
    if (!isAccepted && !(course.type === "book")) {
      return toast("Спочатку ознайомтесь з навчальним періодом!📚", {
        toastId: "lessonsAmount",
      });
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
    <TeacherCourseCard course={course} />
  ) : (
    <ContentCard
      className={getValidClassNames(cl.card, typeClassMap[course.type])}
      label={
        <Link href={`courses/${course._id}`} className={cl.nameLink}>
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
      width={course.type === "book" ? "385px" : "625px"}
    >
      {courseInfo.description.map((desc, index) => (
        <Typography key={index} className={cl.description} variant="body1">
          {desc}
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
            src={`${IMAGE_BASE_URL}/${course.images[0].image?.filename}`}
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
          color={courseInfo.labelColor}
          isPodcast={width! > 500}
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
        <Image
          className={cl.image}
          src={`${IMAGE_BASE_URL}/${course.images[0].image?.filename}`}
          alt="Audio"
          width={215}
          height={215}
          style={{ objectFit: "contain" }}
          onClick={() =>
            dispatch(
              openGalleryDialog({
                type: "image",
                src: `${IMAGE_BASE_URL}/${course.images[0].image?.filename}`,
              })
            )
          }
        />
      )}

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
        menuItems={course.prices.individual.map((price) => {
          return parseCoursePrices(price, course.type);
        })}
        handleSelect={(value: string, link?: string) => {
          setLessons(value);
          link && setLink(link);
        }}
        fixZIndex
      />

      <div className={cl.checkboxes}>
        <Checkbox
          label={"Подарунковий Сертифікат🎁"}
          className={getValidClassNames(cl.giftCheckbox, cl.checkbox)}
          onClick={(e) => {
            setIsGift((prev) => !prev);
            e.stopPropagation();
          }}
          isChecked={isGift}
        />

        {course.type !== "book" && lessons && (
          <>
            <div className={cl.line}></div>
            <div className={cl.checkboxWrapper}>
              <Checkbox
                className={cl.checkbox}
                onClick={(e) => {
                  setIsAccepted((prev) => !prev);
                  e.stopPropagation();
                }}
                isChecked={isAccepted}
              />
              <Link href="/self-education" target="_blank">
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "15px",
                    textAlign: "start",
                    width: "285px",
                  }}
                  className={cl.selfCourseCheckbox}
                >
                  Я ознайомлений з <br />
                  <u>Навчальним Періодом</u> <br />
                  для самостійних курсів!
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

export { CourseCard };
