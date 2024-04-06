"use client";
import React from "react";
import { Typography } from "../typography/typography";
import { Checkbox } from "../checkbox/checkbox";
import { ContentCard } from "../contentCard/contentCard";
import { Select } from "../select/select";
import { getIconSrc, getValidClassNames, parseCoursePrices } from "@/helpers";
import cl from "./courseCardDescription.module.scss";
import Image from "next/image";
import { ICourse } from "@/models/Course";
import { CourseState, setCourse } from "@/redux/slices/course/courseSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Properties = {
  course: ICourse;
};

const typeClassMap = {
  teacher: cl.teacher,
  mega: [cl.teacher, cl.mega],
};

const TeacherCard: React.FC<Properties> = ({ course }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const courseInfo = course.large;
  const isMegaCourse = course.type === "mega";
  const [checkbox, setCheckbox] = React.useState<
    "newStudent" | "activeStudent" | "gift"
  >("newStudent");
  const isGift = checkbox === "gift";
  const isNewStudent = checkbox === "newStudent";
  const isActiveStudent = checkbox === "activeStudent";
  const [cardState, setCardState] = React.useState<{
    learningFormat: "Міні-група" | "Індивідуально" | null;
    lessons: null | string;
    link: null | string;
  }>({
    learningFormat: null,
    lessons: null,
    link: null,
  });

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

    const courseLevel =
      course.level.length > 1
        ? `${course.level[0]}/${course.level.at(-1)}`
        : course.level[0];

    const selectedCourse: Partial<CourseState> = {
      id: course._id,
      type: course.type,
      name: course.name,
      japanName: course.nameJapanese,
      format: cardState.learningFormat,
      lessons: +cardState.lessons.slice(0, 2).trim(),
      price: cardState.lessons.match(/\(([^)]+)\)/)![1],
      level: courseLevel,
      lessonsPerWeek: cardState.learningFormat === "Міні-група" ? 2 : null,
      isGift,
      backgroundColor: course.large.labelColor,
    };

    dispatch(setCourse(selectedCourse));
    isGift ? router.push("/education/gift") : router.push("/education/start");
  };

  return (
    <ContentCard
      className={getValidClassNames(
        cl.card,
        typeClassMap[course.type as "teacher" | "mega"]
      )}
      label={
        !isMegaCourse && (
          <>
            <Typography variant="h5" className={cl.name}>
              {course.name}
            </Typography>
            <Typography variant="body2" className={cl.nameJpn}>
              {course.nameJapanese}
            </Typography>
          </>
        )
      }
      labelClassName={cl.header}
      labelBgColor={courseInfo.labelColor}
      cardBgColor={courseInfo.bgColor}
      labelPosition="top"
      width={"1065px"}
    >
      {isMegaCourse && (
        <div
          className={getValidClassNames(cl.megaHeader)}
          style={{
            background: `linear-gradient(180deg, #FFF 0%, ${courseInfo.bgColor} 100%)`,
          }}
        >
          <>
            <ContentCard
              className={cl.headerWrapper}
              cardBgColor={courseInfo.labelColor}
            >
              <p>{course.name}</p>
              <p>{course.nameJapanese}</p>
            </ContentCard>
          </>

          <div className={cl.headerPlus}>+</div>

          <>
            <ContentCard
              className={cl.headerWrapper}
              cardBgColor={courseInfo.labelColor}
            >
              <p>{course.secondName}</p>
              <p>{course.secondNameJapanese}</p>
            </ContentCard>
          </>
        </div>
      )}

      <Typography variant="h6" className={cl.h6}>
        {" "}
        Твої скіли після засвоєння курсу:
      </Typography>
      <div className={cl.description}>
        {courseInfo.description.map((item, index) => {
          const { icon, text } = item as { icon: string; text: string };
          return (
            <div key={index} className={cl.descItem}>
              <Image src={getIconSrc(icon)} alt={icon} width={26} height={26} />
              <Typography variant="body1">{text}</Typography>
            </div>
          );
        })}
      </div>

      <div className={cl.labels}>
        <div className={cl.label} style={{ background: courseInfo.labelColor }}>
          Міні-група: 2 р./тиждень
        </div>
        <div className={cl.label} style={{ background: courseInfo.labelColor }}>
          Індивідуально: 1-3 р./тиждень
        </div>
        {course.labels.concat(courseInfo.labels).map((item, index) => (
          <div
            className={cl.label}
            key={index}
            style={{ background: courseInfo.labelColor }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={cl.selects}>
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
              ? course.prices.individual.map((price) => {
                  return parseCoursePrices(price);
                })
              : course.prices.group.map((price) => {
                  return parseCoursePrices(price);
                })
          }
          handleSelect={(value: string, link?: string) =>
            setCardState((prev) => {
              return { ...prev, lessons: value, link: link as string };
            })
          }
          isDisabled={cardState.learningFormat === null}
          onClick={() =>
            cardState.learningFormat === null
              ? toast("Оберіть формат навчання")
              : null
          }
        />
      </div>

      <div style={{ width: "312px", marginLeft: "10px", marginTop: "-10px" }}>
        {cardState.learningFormat !== null && cardState.lessons !== null && (
          <>
            <Checkbox
              className={cl.checkbox}
              label="Я розпочинаю онлайн-курс з
            сенсеєм школи TanPoPo вперше!"
              isChecked={isNewStudent}
              onClick={() => setCheckbox("newStudent")}
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
              onClick={() => setCheckbox("activeStudent")}
            />
          </>
        )}
        <Checkbox
          label="Подарунковий Сертифікат🎁"
          onClick={() =>
            isGift ? setCheckbox("newStudent") : setCheckbox("gift")
          }
          className={getValidClassNames(cl.checkbox, cl.giftCheckbox)}
          isChecked={isGift}
        />
      </div>

      <ContentCard
        className={getValidClassNames(
          cl.bottomBtn,
          isGift && cl.giftBtn,
          isNewStudent && !isGift && cl.startBtn,
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

export { TeacherCard };
