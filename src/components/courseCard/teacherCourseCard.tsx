"use client";
import React, { MouseEventHandler } from "react";
import { Typography } from "../typography/typography";
import { Checkbox } from "../checkbox/checkbox";
import { ContentCard } from "../contentCard/contentCard";
import { Select } from "../select/select";
import { getValidClassNames, parseCoursePrices } from "@/helpers";
import { ICourse } from "@/models/Course";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CourseState, setCourse } from "@/redux/slices/course/courseSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "react-toastify";
import cl from "./courseCard.module.scss";

type Properties = {
  course: ICourse;
};

const TeacherCourseCard: React.FC<Properties> = ({ course }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const courseInfo = course.medium;
  const isMegaCourse = course.type === "mega";
  const [isGift, setIsGift] = React.useState(false);
  const [isNewStudent, setIsNewStudent] = React.useState(true);
  const [isActiveStudent, setIsActiveStudent] = React.useState(false);
  const [cardState, setCardState] = React.useState<{
    learningFormat: "Міні-група" | "Індивідуально" | null;
    lessons: null | string;
    link: null | string;
  }>({
    learningFormat: null,
    lessons: null,
    link: null,
  });

  const toggleGift = () => {
    setIsGift((prev) => !prev);
  };

  const handleNewStudentCheckbox = () => {
    if (isActiveStudent) setIsActiveStudent(false);
    !isNewStudent && setIsNewStudent(true);
  };

  const handleActiveStudentCheckbox = () => {
    if (isNewStudent) setIsNewStudent(false);
    !isActiveStudent && setIsActiveStudent(true);
  };

  const handleClick = () => {
    if (isMegaCourse && !cardState.lessons) {
      return toast(() => (
        <div>
          Спочатку оберіть <u>К-сть уроків!</u>📚
        </div>
      ));
    } else if (
      (!cardState.learningFormat && !isMegaCourse) ||
      !cardState.lessons
    ) {
      return toast(() => (
        <div>
          Спочатку оберіть <u>Формат Навчання</u> та <u>К-сть уроків!</u>📚
        </div>
      ));
    }

    if (isActiveStudent && cardState.link) {
      return router.push(cardState.link);
    }

    const selectedCourse: Partial<CourseState> = {
      name: course.name,
      japanName: course.nameJapanese,
      format: cardState.learningFormat,
      lessons: +cardState.lessons.slice(0, 2).trim(),
      price: cardState.lessons.match(/\(([^)]+)\)/)![1],
      level: course.level[0],
      isGift,
    };

    dispatch(setCourse(selectedCourse));
    isGift ? router.push("/education/gift") : router.push("/education/start");
  };

  return (
    <ContentCard
      className={getValidClassNames(cl.card, cl.teacher)}
      label={
        !isMegaCourse && (
          <Link href={`courses/${course._id}`}>
            <Typography
              variant="h5"
              className={cl.name}
              style={{ lineHeight: "normal" }}
            >
              {course.name}
            </Typography>
            <Typography variant="body2" className={cl.nameJpn}>
              {course.nameJapanese}
            </Typography>
          </Link>
        )
      }
      labelClassName={cl.header}
      labelBgColor={courseInfo.labelColor}
      labelPosition="top"
      cardBgColor={courseInfo.bgColor}
      width="385px"
      style={{ minHeight: 700 }}
    >
      {isMegaCourse && (
        <div
          className={getValidClassNames(cl.megaHeader)}
          style={{
            background: `linear-gradient(180deg, #FFF 0%, ${courseInfo.bgColor} 100%)`,
          }}
        >
          <Link href={`courses/${course._id}`}>
            <ContentCard
              className={cl.headerWrapper}
              cardBgColor={courseInfo.labelColor}
            >
              <p>{course.name}</p>
              <p>{course.nameJapanese}</p>
            </ContentCard>
          </Link>

          <div className={cl.headerPlus}>+</div>

          <Link href={`courses/${course._id}`}>
            <ContentCard
              className={cl.headerWrapper}
              cardBgColor={courseInfo.labelColor}
            >
              <p>{course.secondName}</p>
              <p>{course.secondNameJapanese}</p>
            </ContentCard>
          </Link>
        </div>
      )}

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
        <Typography
          variant="body2"
          className={cl.label}
          style={{ background: courseInfo.labelColor }}
        >
          Міні-група: 2 р./тиждень <br />
          Індивідуально: 1-3 р./тиждень
        </Typography>
      </section>

      <div className={cl.selectWrapper}>
        {!isMegaCourse ? (
          <>
            <Select
              showValue
              className={cl.select}
              placeHolder="Формат навчання"
              menuItems={[
                { value: "Міні-група", label: "Міні-група (2-5 осіб)" },
                { value: "Індивідуально", label: "Індивідуально (з сенсеєм)" },
              ]}
              handleSelect={(value: string) =>
                setCardState((prev) => {
                  return {
                    ...prev,
                    learningFormat: value as "Міні-група" | "Індивідуально",
                  };
                })
              }
            />

            <Select
              className={cl.select}
              placeHolder="К-сть Уроків & Ціна"
              menuItems={
                cardState.learningFormat === "Індивідуально"
                  ? course.prices.individual.map((price, idx) => {
                      return parseCoursePrices(price, idx);
                    })
                  : course.prices.group.map((price, idx) => {
                      return parseCoursePrices(price, idx);
                    })
              }
              handleSelect={(value: string, link?: string) => {
                setCardState((prev) => {
                  return { ...prev, lessons: value, link: link as string };
                });
              }}
              checkbox
              checkboxLabel="Подарунковий Сертифікат🎁"
              setGift={toggleGift}
              gift={isGift}
              isDisabled={cardState.learningFormat === null}
              onClick={() =>
                cardState.learningFormat === null
                  ? toast("Оберіть формат навчання")
                  : null
              }
            />
          </>
        ) : (
          <Select
            className={cl.select}
            placeHolder="Мегакурс & Ціна"
            menuItems={course.prices.group.map((price, idx) => {
              return parseCoursePrices(price, idx);
            })}
            handleSelect={(value: string, link?: string) => {
              setCardState((prev) => {
                return { ...prev, lessons: value, link: link as string };
              });
            }}
            checkbox
            checkboxLabel="Подарунковий Сертифікат🎁"
            setGift={toggleGift}
            gift={isGift}
          />
        )}
      </div>

      {isGift ? (
        <Checkbox
          label={
            <Typography variant="subtitle1" className={cl.presentCheckbox}>
              Подарунковий Сертифікат🎁
            </Typography>
          }
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
          isNewStudent && !isGift && cl.startBtn,
          isGift && cl.giftBtn,
          !isGift && !isNewStudent && cl.continueBtn
        )}
        onClick={handleClick}
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
