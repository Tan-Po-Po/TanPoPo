import React from "react";
import { ContentCard } from "@/components/contentCard/contentCard";
import cl from "./schedule.module.scss";
import { Typography } from "@/components/typography/typography";
import { getValidClassNames } from "@/helpers";
import { Button } from "@/components/button/button";
import { TimeButton } from "./timeButton";
import { time, days } from "../common";

type Properties = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setSchedule: React.Dispatch<any>;
  format?: "Міні-група" | "Індивідуально" | null;
};

const Schedule: React.FC<Properties> = ({
  setCounter,
  setSchedule,
  format,
}) => {
  return (
    <div className={cl.schedule}>
      <ContentCard width="775px">
        <Typography variant="h6">
          Будь ласка, визначте ваш навчальний графік за 3 категоріями:
        </Typography>
        <div className={cl.buttons}>
          <Button
            variant="outlined"
            className={getValidClassNames(cl.inappropriateBtn, cl.timeBtn)}
          >
            НЕ ПІДХОДИТЬ
          </Button>
          <Button
            variant="outlined"
            className={getValidClassNames(cl.maybeBtn, cl.timeBtn)}
          >
            МОЖЕ БУТИ
          </Button>
          <Button
            variant="outlined"
            className={getValidClassNames(cl.perfectBtn, cl.timeBtn)}
          >
            ІДЕАЛЬНО!
          </Button>
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
        <Typography variant="body2">
          Просимо Вас обрати хоча б{" "}
          <u>
            {format === "Міні-група" || !format ? 12 : 10} часових проміжків{" "}
          </u>
          категорій: “<u>Може бути</u>” або “<u>Ідеально</u>”, щоб ми мали
          можливість швидше сформувати зручний для всіх графік занять!
        </Typography>
      </ContentCard>
    </div>
  );
};

export { Schedule };
