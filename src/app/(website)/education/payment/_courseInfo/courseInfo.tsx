import React from "react";
import cl from "./courseinfo.module.scss";
import { ContentCard, Typography } from "@/components";
import { CourseState } from "@/redux/slices/course/courseSlice";

type Props = {
  course: CourseState;
};

const CourseInfo: React.FC<Props> = ({ course }) => {
  let formatBlock = "",
    lessonsBlock = "",
    lessonDurationBlock = "",
    certificateTypeBlock = "";
  let studyDuration = Math.ceil(course.lessons! / (course.lessonsPerWeek || 2));
  let weeks =
    studyDuration === 1 ? "тиждень" : studyDuration < 5 ? "тижня" : "тижнів";
  let lessons =
    course.lessons === 1 ? "урок" : course.lessons! < 5 ? "уроки" : "уроків";

  if (course.type === "teacher" || course.type === "mega") {
    if (course.format === "Індивідуально") {
      formatBlock = "Онлайн-курс з Сенсеєм\n(Індивідуально)";
    } else {
      formatBlock = "Онлайн-курс з Сенсеєм\n(Міні-група 2-4 учня)";
    }
    lessonsBlock = `${course.lessons} онлайн-${lessons}\n (${studyDuration} ${weeks} навчання)`;
    lessonDurationBlock = `70 хвилин / заняття\n(рівень: JLPT ${course.level})`;
  } else if (course.type === "video") {
    formatBlock = "Самостійний\n(Відеокурс)";
    lessonsBlock = `${course.lessons} відео${lessons}\n (${course.accessDuration} днів доступу до курсу)`;
    lessonDurationBlock = `Відеоурок ${course.lessonDuration}\n(+інтерактивні завдання)`;
  } else if (course.type === "audio") {
    formatBlock = "Самостійний\n(Аудіокурс)";
    lessonsBlock = `${course.lessons} аудіо${lessons}\n (${course.accessDuration} днів доступу до курсу)`;
    lessonDurationBlock = `Аудіоурок ${course.lessonDuration}\n(+інтерактивні завдання)`;
  } else if (course.type === "book") {
    formatBlock = "Самостійний\n(Книжковий мінікурс)";
    lessonsBlock = `${course.lessonDuration}\n (рівень JLPT: ${course.level})`;
    lessonDurationBlock = `Завдання на платформі,\nдопоміжні матеріали та ін.`;
  }

  if (course.certificateType === "Друкований сертифікат") {
    certificateTypeBlock = "Іменний Друкований\n+200грн(друк та доставка)";
  } else if (course.certificateType === "Електронний сертифікат") {
    certificateTypeBlock = "Електронний\nподарунковий сертифікат";
  }

  if (course.isGift) {
    return (
      <ContentCard
        width="855px"
        className={cl.courseInfo}
        labelPosition="top"
        label={
          <>
            <Typography variant="h5">
              {course?.name || "Course name"}
            </Typography>
            <Typography variant="body2">
              {course?.japanName || "Course japanese name"}
            </Typography>
          </>
        }
        labelBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
      >
        <ContentCard
          className={cl.card}
          width="345px"
          height="135px"
          cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
        >
          <Typography variant="body1">Формат навчання:</Typography>
          <Typography variant="body1">
            <b>{formatBlock}</b>
          </Typography>
        </ContentCard>

        <ContentCard
          className={cl.card}
          width="345px"
          height="135px"
          cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
        >
          <Typography variant="body1">
            {course.type === "book" ? "Посібники:" : "Обрана к-сть уроків:"}
          </Typography>
          <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
            <b>{lessonsBlock}</b>
          </Typography>
        </ContentCard>

        <ContentCard
          className={cl.card}
          width="345px"
          height="135px"
          cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
        >
          <Typography variant="body1">
            {course.type === "book"
              ? "Додатково:"
              : ["teacher", "mega-course"].includes(course.type!)
              ? "Тривалість онлайн-уроку:"
              : "Тривалість уроку:"}
          </Typography>
          <Typography variant="body1">
            <b>{lessonDurationBlock}</b>
          </Typography>
        </ContentCard>

        <ContentCard
          className={cl.card}
          width="345px"
          height="135px"
          cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
        >
          <Typography variant="body1">Вид сертифікату:</Typography>

          <Typography variant="body1">
            <b style={{ whiteSpace: "pre" }}>{certificateTypeBlock}</b>
          </Typography>
        </ContentCard>
      </ContentCard>
    );
  }

  return (
    <ContentCard
      width="855px"
      className={cl.courseInfo}
      labelPosition="top"
      label={
        <>
          <Typography variant="h5">{course?.name || "Course name"}</Typography>
          <Typography variant="body2">
            {course?.japanName || "Course japanese name"}
          </Typography>
        </>
      }
      labelBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
    >
      <ContentCard
        className={cl.card}
        width="345px"
        height="135px"
        cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
      >
        <Typography variant="body1">Формат навчання:</Typography>
        <Typography variant="body1">
          <b>{formatBlock}</b>
        </Typography>
      </ContentCard>

      <ContentCard
        className={cl.card}
        width="345px"
        height="135px"
        cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
      >
        <Typography variant="body1" style={{ fontSize: "19px" }}>
          Занять в тиждень:
        </Typography>
        <Typography variant="body1">
          <b>
            {course.lessonsPerWeek || 2} заняття <br />в тиждень
          </b>
        </Typography>
      </ContentCard>

      <ContentCard
        className={cl.card}
        width="345px"
        height="135px"
        cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
      >
        <Typography variant="body1">Тривалість онлайн-уроку:</Typography>
        <Typography variant="body1">
          <b>{lessonDurationBlock}</b>
        </Typography>
      </ContentCard>

      <ContentCard
        className={cl.card}
        width="345px"
        height="135px"
        cardBgColor={course?.backgroundColor || "rgba(255, 192, 215, 1)"}
      >
        <Typography variant="body1">Обрана кількість уроків:</Typography>

        <Typography variant="body1">
          <b>{lessonsBlock}</b>
        </Typography>
      </ContentCard>
    </ContentCard>
  );
};

export { CourseInfo };
