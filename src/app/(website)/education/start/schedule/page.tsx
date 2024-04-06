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
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  setCourse,
  selectCourse,
  clearCourse,
} from "@/redux/slices/course/courseSlice";
import {
  setDeliveryInfo,
  selectDeliveryInfo,
  IDeliveryInfo,
} from "@/redux/slices/deliveryInfo/deliveryInfoSlice";
import { type ISchedule } from "@/components/schedule/_schedule/type";
import { useForm } from "react-hook-form";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const deliveryInfo = useAppSelector(selectDeliveryInfo);
  const courseInfo = useAppSelector(selectCourse);
  const formReturn = useForm<FormData>({
    defaultValues: {
      ...deliveryInfo,
      lessonsPerWeek: courseInfo.lessonsPerWeek || 0,
    },
    reValidateMode: "onSubmit",
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors, isDirty },
    setValue,
    watch,
    getValues,
  } = formReturn;

  const scheduleArray: ISchedule = Array.from({ length: 7 }, () =>
    Array.from({ length: 5 }, () => "inappropriate")
  );
  const course = useAppSelector((state) => selectCourse(state));
  const [loading, setLoading] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [showErrors, setShowErrors] = React.useState(false);
  const [schedule, setSchedule] = React.useState<ISchedule>(scheduleArray);

  const [comment, setComment] = React.useState("");
  const lessonsPerWeek = watch("lessonsPerWeek");

  const submitForm = (formData: FormData) => {
    if (course.format === "Міні-група") {
      if (counter < 12) {
        return timeToSelectMessage(12);
      }
      setValue("lessonsPerWeek", 2);
      dispatch(setCourse({ lessonsPerWeek: 2, schedule }));
    } else {
      if (!lessonsPerWeek) {
        return toast("Оберіть бажану к-сть занять на тиждень!☑");
      }
      if (lessonsPerWeek === 1 && counter < 7) {
        return timeToSelectMessage(7);
      } else if (lessonsPerWeek === 2 && counter < 10) {
        return timeToSelectMessage(10);
      } else if (lessonsPerWeek === 3 && counter < 12) {
        return timeToSelectMessage(12);
      }
      dispatch(setCourse({ lessonsPerWeek, schedule }));
    }

    dispatch(
      setDeliveryInfo({
        name: formData.name,
        surname: formData.surname,
        phone: formData.phone,
        email: formData.email,
        age: formData.age,
        contact: formData.contact,
        contactName: formData.contactName,
        contactSurname: formData.contactSurname,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        contactRole: formData.contactRole,
        comment,
      } as Partial<IDeliveryInfo>)
    );

    const data = {
      ...course, // course slice
      courseName: course.name, // rename from course slice
      ...formData, // delivery slice (with contact info)
      comment, // delivery slice
      schedule, // into course slice
    };

    setLoading(true);
    scrollTo(0, 0);
    fetch("/api/education", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        // If price changed or course is not available anymore
        const responseData = await res.json();
        if (res.status === 422) {
          dispatch(clearCourse());
          toast(responseData.message);
          return setTimeout(() => router.push("/prices"), 3000);
        }

        if (!res.ok) {
          setLoading(false);
          return toast("Сталася помилка, спробуйте ще раз пізніше");
        }

        dispatch(setCourse({ liqpayLink: responseData.liqpayLink }));
        router.push("/education/payment");
      })
      .catch((error) => {
        setLoading(false);
        toast(
          "Сталася помилка при відправці розкладу, спробуйте ще раз пізніше"
        );
      });
  };

  useEffect(() => {
    document.title = "Розклад | Tanpopo";
  }, []);

  useEffect(() => {
    if (showErrors && errors) {
      if (!isDirty && !getValues("name")) {
        toast("Будь ласка, заповніть ваші контактні дані☑️");
        setShowErrors(false);
        return;
      }

      for (const error of Object.values(errors)) {
        if (error.message) {
          toast(error.message);
          setShowErrors(false);
          break;
        }
      }
    }
  }, [showErrors, errors, setShowErrors, isDirty]);

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

        {course.format === "Міні-група" ? (
          <ContentCard width="650px" className={cl.lessonsCount}>
            <div>
              <Typography variant="body1">К-сть занять:</Typography>
              <Typography variant="h4">2 уроки / тиждень</Typography>
            </div>

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
                const lessonsPerWeek = parseInt(value[0]);
                setValue("lessonsPerWeek", lessonsPerWeek);
              }}
              placeHolder="К-сть занять"
              className={cl.select}
            />
          </ContentCard>
        )}

        <Typography
          variant="h3"
          align="center"
          style={{ marginTop: "100px" }}
          className={cl.scheduleHeader}
        >
          Зручне формування розкладу навчання:
        </Typography>

        <Schedule
          setSchedule={setSchedule}
          setCounter={setCounter}
          format={course.format}
          lessonsPerWeek={lessonsPerWeek}
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
            rows={7}
            style={{ width: "750px", maxWidth: "85vw" }}
            className={cl.commentTextarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <AboutSchedule format={course.format} />

        <div className={cl.continue}>
          <div className={cl.line}></div>

          <Button
            className={getValidClassNames(cl.btn)}
            icon="triangleButtonRight"
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

const timeToSelectMessage = (timeToSelect: number) => {
  return toast(
    <>
      Просимо Вас обрати хоча б {timeToSelect} часових проміжків категорій:
      <u>“Може бути”</u> або <u>“Ідеально”</u>,щоб ми мали можливість швидше
      сформувати зручний для всіх графік занять!☑
    </>
  );
};
