import React from "react";
import { ContentCard, Typography } from "@/components/index";
import { getValidClassNames } from "@/helpers";
import cl from "./courseCardMini.module.scss";
import Link from "next/link";

type Course = {
  type: "teacher" | "video" | "audio" | "book";
  name: string; // Цвіт сакури
  nameJapanese?: string; // 桜の花
  level: string; // N1, N5-N3...
  description: string; // "Середній рівень" || "Це не просто мовний курс..."
  backgroundColor: string; // linear-gradient(#ffede81a, #fffbd8) || "red"
  label?: string; // BESTseller! || незабаром
  labelColor?: string; // linear-gradient(#FFFCAE, #FF83F3) || "red" || #FFFCAE
};

type Properties = {
  course: Course;
};

const typeClassMap = {
  teacher: cl.teacher,
  video: cl.video,
  audio: cl.audio,
  book: cl.book,
};

const CourseCardMini: React.FC<Properties> = ({ course }) => {

  return (
    <Link className={cl.link} href="">
      <ContentCard
        className={getValidClassNames(cl.card, typeClassMap[course.type])}
        label={course.label}
        labelBgColor={course.labelColor}
        labelPosition="top"
        cardBgColor={course.backgroundColor}
      >
        <Typography className={cl.level} variant="body1">
          {course.level}
        </Typography>
        <Typography className={cl.name} variant="h4">
          {course.name}
        </Typography>
        <Typography className={cl.nameJapanese} variant="body2">
          {course.nameJapanese}
        </Typography>
        <Typography className={cl.description} variant="subtitle1">
          {course.description}
        </Typography>
      </ContentCard>
    </Link>
  );
};

export { CourseCardMini };
