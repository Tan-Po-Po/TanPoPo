"use client";
import React from "react";
import { Typography } from "../typography/typography";
import { ContentCard } from "../contentCard/contentCard";
import { getValidClassNames } from "@/helpers";
import cl from "./courseCardMini.module.scss";
import Link from "next/link";
import { ICourse } from "@/models/Course";
import { toast } from "react-toastify";

type Properties = {
  course: ICourse;
};

const typeClassMap = {
  teacher: cl.teacher,
  mega: cl.teacher,
  video: cl.video,
  audio: cl.audio,
  book: cl.book,
};

const CourseCardMini: React.FC<Properties> = ({ course }) => {
  const courseInfo = course.small;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (course.inDevelopment) {
      event.preventDefault()
      return toast("Цей курс ще в розробці");
    }
  };

  return (
    <Link
      className={cl.link}
      href={`/courses/${course._id}`}
      onClick={handleClick}
    >
      <ContentCard
        className={getValidClassNames(cl.card, typeClassMap[course.type])}
        label={courseInfo.label}
        labelBgColor={courseInfo.labelColor}
        labelPosition="top"
        cardBgColor={courseInfo.bgColor}
      >
        <Typography className={cl.level} variant="body1">
          {course.level.length > 1
            ? `${course.level[0]}/${course.level[course.level.length - 1]}`
            : course.level[0]}
        </Typography>
        <Typography className={cl.name} variant="h4">
          {course.name}
        </Typography>
        <Typography className={cl.nameJapanese} variant="body2">
          {course.nameJapanese}
        </Typography>
        <Typography className={cl.description} variant="subtitle1">
          {courseInfo.description}
        </Typography>
      </ContentCard>
    </Link>
  );
};

export { CourseCardMini };
