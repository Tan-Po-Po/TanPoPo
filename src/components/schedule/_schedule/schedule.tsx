"use client";
import React, { useEffect, useState } from "react";
import { ContentCard } from "@/components/contentCard/contentCard";
import cl from "./schedule.module.scss";
import { Typography } from "@/components/typography/typography";
import { getValidClassNames } from "@/helpers";
import { TimeButton } from "./timeButton";
import { time, days } from "../common";
import { ISchedule } from "./type";

type Properties = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setSchedule: React.Dispatch<any>;
  format?: "Міні-група" | "Індивідуально" | null;
  lessonsPerWeek?: number;
};

const Schedule: React.FC<Properties> = ({
  setCounter,
  setSchedule,
  format,
  lessonsPerWeek,
}) => {
  const [timeToSelect, setTimeToSelect] = useState(
    format === "Міні-група" || !format ? 12 : 10
  );
  console.log(format);
  console.log(lessonsPerWeek);
  useEffect(() => {
    if (lessonsPerWeek && format !== "Міні-група") {
      switch (lessonsPerWeek) {
        case 1:
          setTimeToSelect(7);
          break;
        case 2:
          setTimeToSelect(10);
          break;
        case 3:
          setTimeToSelect(12);
          break;
      }
    }
  }, [lessonsPerWeek, format]);
  return (
    <div className={cl.schedule}>
      <ContentCard width="910px" className={cl.header}>
        <Typography variant="h6">
          Будь-ласка, визначте ваш навчальний графік за 3 категоріями:
        </Typography>
        <div className={cl.buttons}>
          <div className={getValidClassNames(cl.inappropriateBtn, cl.timeBtn)}>
            НЕ ПІДХОДИТЬ
          </div>
          <div className={getValidClassNames(cl.maybeBtn, cl.timeBtn)}>
            МОЖЕ БУТИ
          </div>
          <div className={getValidClassNames(cl.perfectBtn, cl.timeBtn)}>
            ІДЕАЛЬНО!
          </div>
        </div>
        <Typography variant="body2">
          Натискайте на проміжок часу на розкладі, щоб обрати потрібну Вам
          категорію.
        </Typography>
      </ContentCard>
      <div className={cl.line}></div>
      <ContentCard width="1350px" className={cl.scheduleCard}>
        <div className={cl.container}>
          {days.map((day, dayIndex) => {
            return (
              <div key={dayIndex} className={cl.dayColumn}>
                <Typography variant="h6">{day}</Typography>
                {time.map((lesson, index) => {
                  return (
                    <TimeButton
                      setSchedule={setSchedule}
                      setCounter={setCounter}
                      variant="outlined"
                      key={`${dayIndex}-${index}`}
                      className={cl.timeBtn}
                      dayIndex={dayIndex}
                      lessonIndex={index}
                    >
                      {lesson}
                    </TimeButton>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Typography
          variant="body2"
          style={{ maxWidth: "875px", fontSize: "18px", marginTop: "14px" }}
        >
          Просимо Вас обрати хоча б <u>{timeToSelect} часових проміжків </u>
          категорій: “<u>Може бути</u>” або “<u>Ідеально</u>”, щоб ми мали
          можливість швидше сформувати зручний для всіх графік занять!
        </Typography>
      </ContentCard>
    </div>
  );
};

export { Schedule };
