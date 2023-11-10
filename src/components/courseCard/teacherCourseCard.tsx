"use client";
import React from "react";
import { Typography } from "../typography/typography";
import { Checkbox } from "../checkbox/checkbox";
import { ContentCard } from "../contentCard/contentCard";
import { Select } from "../select/select";
import { getValidClassNames } from "@/helpers";
import cl from "./courseCard.module.scss";
import { ICourse } from "@/models/Course";

type Properties = {
  course: ICourse;
};

const typeClassMap = {
  teacher: cl.teacher,
  video: cl.video,
  audio: cl.audio,
  book: cl.book,
};


const TeacherCourseCard: React.FC<Properties> = ({ course }) => {
  const courseInfo = course.medium;
  const [isGift, setIsGift] = React.useState(false);
  const [isNewStudent, setIsNewStudent] = React.useState(false);
  const [isActiveStudent, setIsActiveStudent] = React.useState(false);
  const [cardState, setCardState] = React.useState<{
    learningFormat: null | string;
    lessons: null | string;
  }>({
    learningFormat: null,
    lessons: null,
  });

  const toggleGift = () => {
    console.log(isGift);
    setIsGift((prev) => !prev);
  };
  const handleNewStudentCheckbox = () => {
    if (isActiveStudent) setIsActiveStudent(false);
    setIsNewStudent((prev) => !prev);
  };
  const handleActiveStudentCheckbox = () => {
    if (isNewStudent) setIsNewStudent(false);
    setIsActiveStudent((prev) => !prev);
  };

  return (
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
      width="385px"
      style={{ minHeight: 700 }}
    >
      <ul className={cl.description}>
        {courseInfo.description.map((desc, index) => (
          <li key={index}>
            <Typography className={cl.description} variant="body1">
              {desc}
            </Typography>
          </li>
        ))}
      </ul>
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
        placeHolder="Формат навчання"
        menuItems={[
          { value: "Міні-група", label: "Міні-група (2-5 осіб)" },
          { value: "Індивідуально", label: "Індивідуально (з сенсеєм)" },
        ]}
        handleSelect={(value: string) =>
          setCardState((prev) => {
            return { ...prev, learningFormat: value };
          })
        }
      />

      <Select
        className={cl.select}
        placeHolder="К-сть Уроків & Ціна"
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
        handleSelect={(value: string) =>
          setCardState((prev) => {
            return { ...prev, lessons: value };
          })
        }
        checkbox
        checkboxLabel="Подарунковий Сертифікат🎁"
        setGift={toggleGift}
        gift={isGift}
        isDisabled={cardState.learningFormat === null}
      />

      {isGift ? (
        <Checkbox
          label="Подарунковий Сертифікат🎁"
          onClick={toggleGift}
          isChecked={isGift}
        />
      ) : (
        cardState.learningFormat !== null &&
        cardState.lessons !== null && (
          <div>
            <Checkbox
              className={cl.checkbox}
              label="Я розпочинаю онлайн-курс з
            сенсеєм школи TanPoPo вперше!"
              isChecked={isNewStudent}
              onClick={handleNewStudentCheckbox}
            />
            <div
              className={cl.divider}
              style={{ background: courseInfo.bgColor }}
            >
              <div className={cl.line}></div>
              <Typography variant="body2" className={cl.text}>
                Або
              </Typography>
              <div className={cl.line}></div>
            </div>
            <Checkbox
              className={cl.checkbox}
              label="Я вже маю розклад занять та
            бажаю продовжити навчання!"
              isChecked={isActiveStudent}
              onClick={handleActiveStudentCheckbox}
            />
          </div>
        )
      )}
      <ContentCard
        className={getValidClassNames(
          cl.bottomBtn,
          isGift && cl.giftBtn,
          isNewStudent && cl.startBtn,
          !isGift && !isNewStudent && cl.continueBtn
        )}
      >
        {isGift && (
          <Typography variant="body1">Навчання у Подарунок!</Typography>
        )}
        {!isGift && isNewStudent && (
          <Typography variant="body1">Розпочати навчання!</Typography>
        )}
        {!isGift && !isNewStudent && (
          <Typography variant="body1">Продовжити навчання!</Typography>
        )}
      </ContentCard>
    </ContentCard>
  );
};

export { TeacherCourseCard };
