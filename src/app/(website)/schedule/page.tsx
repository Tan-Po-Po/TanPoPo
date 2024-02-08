"use client";
import React, { useEffect } from "react";
import {
  ContentCard,
  Divider,
  Typography,
  Button,
  Select,
  Input,
  NewStudentForm,
  Schedule,
  AboutSchedule,
  Loading,
} from "@/components";
import type { FormData } from "@/components/schedule/_form/type";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { toast } from "react-toastify";
import Image from "next/image";
import cl from "./page.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { type ISchedule } from "@/components/schedule/_schedule/type";
import { useForm } from "react-hook-form";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const formReturn = useForm<FormData>({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      age: "",
      contact: false,
      contactName: "",
      contactSurname: "",
      contactPhone: "",
      contactEmail: "",
      contactRole: "",
      lessonsPerWeek: 0,
    },
    reValidateMode: "onSubmit",
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors },
    setValue,
    watch,
  } = formReturn;

  const scheduleArray: ISchedule = Array.from({ length: 7 }, () =>
    Array.from({ length: 5 }, () => "inappropriate")
  );
  const [loading, setLoading] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [showErrors, setShowErrors] = React.useState(false);
  const [schedule, setSchedule] = React.useState<ISchedule>(scheduleArray);
  const [comment, setComment] = React.useState("");
  const lessonsPerWeek = watch("lessonsPerWeek");
  const educationFormat = searchParams.get("format") as
    | "Міні-група"
    | "Індивідуально"
    | undefined;

  const submitForm = (formData: any) => {
    if (educationFormat === "Міні-група" || !educationFormat) {
      setValue("lessonsPerWeek", 2);
      if (counter < 12) {
        return toast(
          `Просимо Вас обрати хоча б 12 часових проміжків категорій: “Може бути” або “Ідеально”,щоб ми мали можливість швидше сформувати зручний для всіх графік занять!☑`
        );
      }
    } else {
      if (!lessonsPerWeek && educationFormat === "Індивідуально") {
        return toast("Оберіть бажану к-сть занять на тиждень!☑");
      }
      if (counter < 10) {
        return toast(
          `Просимо Вас обрати хоча б 10 часових проміжків категорій: “Може бути” або “Ідеально”,щоб ми мали можливість швидше сформувати зручний для всіх графік занять!☑`
        );
      }
    }

    const data = {
      ...{
        courseName: "",
        lessons: "",
        price: "",
        format: educationFormat,
      },
      ...formData,
      comment,
      schedule,
    };

    setLoading(true);
    fetch("/api/education", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      if (!res.ok) {
        setLoading(false);
        return toast(
          "Сталася помилка при відправці розкладу, спробуйте ще раз пізніше"
        );
      }
      router.push("/?redirected=true");
    });
  };

  useEffect(() => {
    if (showErrors && errors) {
      for (const error of Object.values(errors)) {
        if (error.message) {
          toast(error.message);
          setShowErrors(false);
          break;
        }
      }
    }
  }, [showErrors, errors, setShowErrors]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={cl.main}>
      <form onSubmit={handleSubmit(submitForm)} className={cl.formWrapper}>
        <Divider
          className={cl.divider}
          firstRow="2. Заповніть контактні дані та ваш розклад."
          bgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
          width="555px"
        />

        <NewStudentForm formReturn={formReturn} className={cl.form} />

        {!educationFormat ? (
          <></>
        ) : educationFormat === "Міні-група" ? (
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
              Ми врахуємо ваші побажання стосовно днів та часу навчання і
              зможемо швидше сформувати вашу міні-групу для обраного курсу!
            </Typography>
          </ContentCard>
        ) : (
          <ContentCard width="650px" className={cl.lessonsCount}>
            <Typography variant="body1">
              Будь-ласка, вкажіть скільки разів на тиждень Ви бажаєте займатись
              індивідульно з сенсеєм:
            </Typography>

            <Image
              src={getIconArtSrc("teacher")}
              alt="Teacher icon"
              width={130}
              height={105}
            />

            <Select
              menuItems={["1 заняття", "2 заняття", "3 заняття"]}
              handleSelect={(value) => {
                setValue("lessonsPerWeek", parseInt(value[0]));
              }}
              placeHolder="К-сть занять"
              className={cl.select}
            />
          </ContentCard>
        )}
        <Typography variant="h3" align="center" style={{ marginTop: "100px" }}>
          Зручне формування розкладу навчання:
        </Typography>

        <Schedule
          setSchedule={setSchedule}
          setCounter={setCounter}
          format={educationFormat}
        />

        <div className={cl.comment}>
          <Typography variant="h6" align="center">
            {
              "Якщо Ви бажаєте надати додаткові коментарі\n стосовно розкладу, Ви можете написати їх сюди:"
            }
          </Typography>

          <Input
            label="Ваш коментар"
            multiline
            rows={9}
            style={{ width: "750px", maxWidth: "85vw" }}
            className={cl.commentTextarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {!educationFormat ? null : <AboutSchedule format={educationFormat} />}

        <div className={cl.continue}>
          <div className={cl.line}></div>

          <Button
            className={getValidClassNames(cl.btn)}
            icon="triangleButton"
            variant="outlined"
            type="submit"
            onClick={async () => {
              await trigger();
              setShowErrors(true);
            }}
          >
            Продовжити
          </Button>
        </div>
      </form>
    </main>
  );
}
