"use client";
import React from "react";
import {
  ContentCard,
  Divider,
  Typography,
  Button,
  Select,
  Input,
} from "@/components";
import { Form } from "./_form/form";
import { Schedule } from "./_schedule/schedule";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import { toast } from "react-toastify";
import cl from "./page.module.scss";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { setCourse, selectCourse } from "@/redux/slices/course/courseSlice";
import { type ISchedule } from "./_schedule/type";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const scheduleArray: ISchedule = Array.from({ length: 7 }, () =>
    Array.from({ length: 5 }, () => "inappropriate")
  );
  const [counter, setCounter] = React.useState(0);
  const [schedule, setSchedule] = React.useState<ISchedule>(scheduleArray);
  const [comment, setComment] = React.useState("");
  const [lessonsPerWeek, setLessonsPerWeek] = React.useState(0);
  const course = useAppSelector((state) => selectCourse(state));

  const submitForm = (formData: any) => {
    if (course.format === "Міні-група") {
      if (counter < 12) {
        return toast(
          `Просимо Вас обрати хоча б 12 часових проміжків категорій: “Може бути” або “Ідеально”,щоб ми мали можливість швидше сформувати зручний для всіх графік занять!☑`
        );
      }
    } else {
      if (counter < 10) {
        return toast(
          `Просимо Вас обрати хоча б 10 часових проміжків категорій: “Може бути” або “Ідеально”,щоб ми мали можливість швидше сформувати зручний для всіх графік занять!☑`
        );
      }
      if (!lessonsPerWeek) {
        return toast("Оберіть бажану к-сть занять на тиждень!☑");
      }
    }

    const data = {
      ...course,
      courseName: course.name,
      ...formData,
      comment,
      schedule,
    };
    console.log(data);

    fetch("/api/education", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      if (!res.ok) {
        return toast(
          "Сталася помилка при відправці розкладу, спробуйте ще раз пізніше"
        );
      }
      // router.push("/education/payment");
    });
  };

  return (
    <main className={cl.main}>
      <Divider
        className={cl.divider}
        firstRow="2. Заповніть контактні дані та ваш розклад."
        bgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
        width="555px"
      />

      <Form onSubmit={submitForm} className={cl.form} id="contact" />

      {course.format === "Міні-група" ? (
        <ContentCard width="650px" className={cl.lessonsCount}>
          <Typography variant="body1">К-сть занять:</Typography>
          <Typography variant="h4">2 уроки / тиждень</Typography>

          <Image
            src={getIconArtSrc("boyAndGirl")}
            alt="Boy and girl icon"
            width={130}
            height={115}
          />

          <Typography variant="body1">
            Ми врахуємо ваші побажання стосовно днів та часу навчання і зможемо
            швидше сформувати вашу міні-групу для обраного курсу!
          </Typography>
        </ContentCard>
      ) : (
        <ContentCard width="650px" className={cl.lessonsCount}>
          <Typography variant="body1">
            Будь ласка, вкажіть скільки разів на тиждень Ви бажаєте займатись
            індивідульно з сенсеєм:
          </Typography>

          <Image
            src={getIconArtSrc("teacher")}
            alt="Teacher icon"
            width={130}
            height={105}
          />

          <Select
            menuItems={[
              "1 заняття",
              "2 заняття",
              "3 заняття",
              "4 занять",
              "5 занять",
            ]}
            handleSelect={(value) => {
              setLessonsPerWeek(parseInt(value[0]));
              dispatch(setCourse({ lessonsPerWeek: parseInt(value[0]) }));
            }}
            placeHolder="К-сть занять"
            className={cl.select}
          />
        </ContentCard>
      )}
      <Typography variant="h3" style={{ marginTop: "100px" }}>
        Зручне формування розкладу навчання:
      </Typography>
      <Schedule
        setSchedule={setSchedule}
        setCounter={setCounter}
        format={course.format}
      />

      <div className={cl.comment}>
        <Typography variant="h6">
          {
            "Якщо Ви бажаєте надати додаткові коментарі\n стосовно розкладу, Ви можете написати їх сюди:"
          }
        </Typography>

        <Input
          label="Ваш коментар"
          multiline
          rows={9}
          style={{ width: "100%", maxWidth: "750px" }}
          className={cl.commentTextarea}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <ContentCard className={cl.important} width="850px">
        <Typography variant="h6">
          Важливо знати! Формування Розкладу:
        </Typography>
        <Image
          src={getIconArtSrc("calendar3")}
          alt="Calendar icon"
          width={106}
          height={115}
        />
        <ul className={cl.list}>
          <li>
            {course.format === "Міні-група" ? (
              <>
                З моменту оплати обраного вами курсу нам потрібно до 14 днів,
                щоб сформувати міні-групу за зручним для всіх розкладом!{" "}
                <u>Зазвичай, це займає меншу кількість часу!</u> Ми вказуємо
                саме такий проміжок, щоб в нас була можливість погодити та
                сформувати єдиний для всіх графік занять! Протягом цього терміну
                ми обов’язково сконтактуємо з Вами, щоб фінально погодити
                розклад!
              </>
            ) : (
              <>
                З моменту оплати обраного вами курсу нам потрібно до 7 днів, щоб
                сформувати Ваш особистий розклад!{" "}
                <u>Зазвичай, це займає меншу кількість часу!</u> Ми вказуємо
                саме такий проміжок, щоб в нас була можливість погодити та
                сформувати зручний для всіх графік занять! Протягом цього
                терміну ми обов’язково сконтактуємо з Вами, щоб фінально
                погодити розклад!
              </>
            )}
          </li>
          <li>
            {course.format === "Міні-група" ? (
              <>
                Якщо протягом 14 днів ми так і не зможемо сформувати міні-групу
                зі зручним розкладом за обраним курсом, Ми гарантуємо Вам повне
                повернення коштів!
              </>
            ) : (
              <>
                Після узгодження з вами графіку навчання, він стає фіксованим.
                Якщо Ви бажаєте змінити к-сть занять на тиждень, нам потрібно
                буде заздалегідь узгодити новий графік занять!
              </>
            )}
          </li>
          <li>
            Після успішного формування та погодження розкладу Ви відразу
            розпочинаєте вивчення японської мови!
          </li>
        </ul>
      </ContentCard>

      <div className={cl.continue}>
        <div className={cl.line}></div>

        <Button
          className={getValidClassNames(cl.btn)}
          icon="triangleButton"
          variant="outlined"
          disabled
          type="submit"
          form="contact"
        >
          Продовжити
        </Button>
      </div>
    </main>
  );
}
