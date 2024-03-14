"use client";

import cl from "./result.module.scss";
import { ICourse } from "@/models/Course";
import { getCourses } from "./actions";
import { useEffect, useRef, useState } from "react";
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
import { useWindowSize } from "@uidotdev/usehooks";
import ArrowButton from "@/components/arrowButton/arrowButton";
interface Props {
  result: { activeLevel: string; nextLevel: string };
}

export const Result: React.FC<Props> = ({ result }) => {
  const { width } = useWindowSize();
  const levelsContainer = useRef<HTMLDivElement>(null);
  const { activeLevel, nextLevel } = result;
  const [courses, setCourses] = useState<ICourse[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCoursesFromDb = async () => {
      const courses = await getCourses(nextLevel);

      setLoading(false);
      setCourses(courses);
    };

    getCoursesFromDb();
  }, [nextLevel, activeLevel]);

  if (loading) {
    return (
      <main className={cl.resultMain}>
        <Loading />
      </main>
    );
  }

  const isInDevelopment = courses?.length == 0;
  const levelDescription = LEVELS[activeLevel as keyof typeof LEVELS];

  return (
    <main className={cl.resultMain}>
      <ContentCard className={cl.result} width="fit-content">
        {activeLevel === "N0" ? (
          <Typography variant="h6" style={{ lineHeight: "30px" }}>
            Ви ентузіаст-початківець😎 <br />
            Варто розпочинати з базових <br />
            знань японської мови - рівня N5!
          </Typography>
        ) : (
          <>
            <Typography variant="h6">
              Ваш орієнтовний JLPT рівень: {activeLevel}
            </Typography>

            <Typography variant="body2">
              ({levelDescription.toLowerCase()})
            </Typography>
          </>
        )}
      </ContentCard>

      <div style={{ width: "100%" }}>
        <div className={cl.levelsWrapper} ref={levelsContainer}>
          <ContentCard width="1010px" className={cl.ruler}>
            <div
              className={cl.background}
              style={{
                width:
                  levels.find((level) => level.level === result.activeLevel)
                    ?.width || "0%",
              }}
            ></div>
            {levels.map((level, i) => {
              if (!(i % 2)) {
                return (
                  <div key={i} className={cl.mark} id={level.level}>
                    <Typography variant="h3">{level.level}</Typography>
                    <div className={cl.line}></div>
                    <Typography
                      variant="subtitle2"
                      style={{ whiteSpace: "pre" }}
                    >
                      {level.label}
                    </Typography>
                  </div>
                );
              } else {
                return (
                  <ContentCard
                    className={cl.pill}
                    key={i}
                    cardBgColor={level.background}
                    width="63px"
                    style={{ padding: "0" }}
                    id={level.level}
                  >
                    <Typography variant="h6">{level.level}</Typography>
                  </ContentCard>
                );
              }
            })}
          </ContentCard>
        </div>
        {width! < 1100 && (
          <div className={cl.levelsSlide}>
            <button>
              <ArrowButton
                direction={"left"}
                onClick={() =>
                  levelsContainer.current?.scrollBy({
                    left: -150,
                    behavior: "smooth",
                  })
                }
              />
            </button>
            <Typography variant="body1">рівні мови</Typography>
            <button>
              <ArrowButton
                direction={"right"}
                onClick={() =>
                  levelsContainer.current?.scrollBy({
                    left: 150,
                    behavior: "smooth",
                  })
                }
              />
            </button>
          </div>
        )}
      </div>

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
            style={{ marginBottom: "-20px" }}
          />

          <Advantages />
        </>
      )}
    </main>
  );
};

const levels = [
  {
    level: "N5",
    label: "вступний\nрівень",
    width: "12%",
  },
  {
    level: "N5+",
    background: "#FFE796",
    width: "24%",
  },
  {
    level: "N4",
    width: "34%",
  },
  {
    level: "N4+",
    background: "#FFA2D9",
    width: "45%",
  },
  {
    level: "N3",
    label: "середній\nрівень",
    width: "56%",
  },
  {
    level: "N3+",
    background: "#FF9F9F",
    width: "67%",
  },
  {
    level: "N2",
    width: "80%",
  },
  {
    level: "",
    label: "Placeholder",
    width: "0%",
  },
  {
    level: "N1",
    label: "майстер\nрівень",
    width: "100%",
  },
];

export default Result;
