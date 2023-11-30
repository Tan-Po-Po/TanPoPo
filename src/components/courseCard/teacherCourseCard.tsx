"use client";
import React from "react";
import { Typography } from "../typography/typography";
import { Checkbox } from "../checkbox/checkbox";
import { ContentCard } from "../contentCard/contentCard";
import { Select } from "../select/select";
import { getValidClassNames } from "@/helpers";
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

const typeClassMap = {
  teacher: cl.teacher,
  mega: cl.teacher,
  video: cl.video,
  audio: cl.audio,
  book: cl.book,
};

const TeacherCourseCard: React.FC<Properties> = ({ course }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const courseInfo = course.medium;
  const [isGift, setIsGift] = React.useState(false);
  const [isNewStudent, setIsNewStudent] = React.useState(true);
  const [isActiveStudent, setIsActiveStudent] = React.useState(false);
  const [cardState, setCardState] = React.useState<{
    learningFormat: "Міні-група" | "Індивідуально" | null;
    lessons: null | string;
  }>({
    learningFormat: null,
    lessons: null,
  });

  const toggleGift = () => {
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

  const handleClick = () => {
    if (!cardState.learningFormat || !cardState.lessons) {
      return toast("Спочатку оберіть Формат \nНавчання та К-сть уроків!📚");
    }
    if (isActiveStudent) {
      // Change link to LMS store
      router.push("/education");
    }

    const selectedCourse:Partial<CourseState>  = {
      name: course.name,
      japanName: course.nameJapanese,
      format: cardState.learningFormat,
      lessons: +cardState.lessons.slice(0, 2).trim(),
      price: cardState.lessons.match(/\(([^)]+)\)/)![1],
      level: course.level[0],
      isGift
    };
    console.log(selectedCourse);
    dispatch(setCourse(selectedCourse));
    isGift ? router.push("/education/gift") : router.push("/education/start");
  };

  return (
    <ContentCard
      className={getValidClassNames(cl.card, typeClassMap[course.type])}
      label={
        <Link href={`courses/${course._id}`}>
          <Typography variant="h5" className={cl.name}>
            {course.name}
          </Typography>
          <Typography variant="body2" className={cl.nameJpn}>
            {course.nameJapanese}
          </Typography>
        </Link>
      }
      labelClassName={cl.header}
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
            }грн)`,
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
