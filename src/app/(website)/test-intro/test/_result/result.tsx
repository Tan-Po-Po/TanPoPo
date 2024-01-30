"use client";

import cl from "./result.module.scss";
import { ICourse } from "@/models/Course";
import { getCourses } from "./actions";
import { useEffect, useState } from "react";
import {
  ContentCard,
  CourseCardMini,
  Divider,
  Typography,
  Advantages,
  CourseList,
  Loading,
} from "@/components";
import { LEVELS } from "./levels";
import Image from "next/image";

interface Props {
  result: string;
}

export const Result: React.FC<Props> = ({ result }: { result: string }) => {
  const [courses, setCourses] = useState<ICourse[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCoursesFromDb = async () => {
      const courses = await getCourses(result as string);
      courses.forEach((course) => console.log(course));
      setLoading(false);
      setCourses(courses);
    };

    getCoursesFromDb();
  }, [result]);

  if (loading) {
    return (
      <main className={cl.resultMain}>
        <Loading />
      </main>
    );
  }

  const isInDevelopment = courses?.length == 0;
  const levelDescription = LEVELS[result as keyof typeof LEVELS];

  return (
    <main className={cl.resultMain}>
      <ContentCard className={cl.result} width="fit-content">
        <Typography variant="h6">
          Ваш орієнтовний JLPT рівень: {result}
        </Typography>

        <Typography variant="body2">
          ({levelDescription.toLowerCase()})
        </Typography>
      </ContentCard>

      <section className={cl.recommendation}>
        {isInDevelopment ? (
          <Typography variant="h3">
            Ви маєте високий рівень володіння мовою!
          </Typography>
        ) : (
          <>
            <Typography variant="h4">Рекомендовані курси</Typography>
            <Typography variant="h3" style={{ fontSize: "37px" }}>
              для вашого рівня:
            </Typography>
          </>
        )}
      </section>
      {isInDevelopment ? (
        <>
          <Divider
            firstRow="онлайн-курси"
            secondRow="з сенсеєм"
            bgColor="linear-gradient(180deg, #A6C4FF 0%, #E8A6FF 100%)"
            wrapperClassName={cl.dividerWrapper}
          />

          <CourseCardMini course={courses[0]} />

          <Typography variant="h3" style={{ lineBreak: "unset" }}>
            Наразі курси для вашого рівня знаходяться в розробці!
          </Typography>
          <Typography variant="h6">
            <>
              Ми постійно намагаємось додавати нові <br /> круті продукти для
              вдосконалення японської мови!
            </>
          </Typography>
          <Image
            alt=""
            src={"/images/homeAhead.png"}
            width={500}
            height={500}
            style={{ width: "356px", height: "369px" }}
          />
          <Typography variant="body1">Stay tuned for more updates💛</Typography>
        </>
      ) : (
        <>
          <CourseList courses={courses!} />

          <Divider
            className={cl.divider}
            wrapperClassName={cl.dividerWrapper}
            firstRow="ДОДАТКОВІ ПЕРЕВАГИ НАВЧАННЯ"
            bgColor="linear-gradient(91deg, #FF9C9C 0%, #FFEF9C 28.13%, #9CDBFF 71.35%, #FF9CE9 100%)"
            style={{marginBottom: "-20px"}}
          />

          <Advantages />
        </>
      )}
    </main>
  );
};

export default Result;
