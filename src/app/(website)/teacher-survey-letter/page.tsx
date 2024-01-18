"use client";

import {
  Button,
  Checkbox,
  ContentCard,
  Input,
  Loading,
  Typography,
} from "@/components";
import cl from "./page.module.scss";
import inputCl from "@/components/input/input.module.scss";
import Image from "next/image";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { Controller, useForm } from "react-hook-form";
import { IFormInputs, defaultValues } from "./formInputs.d";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { DatePicker } from "@mui/x-date-pickers";
import { submitTeacherSurveyForm } from "./actions/actions";
import { useRouter } from "next/navigation";

const Page = () => {
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues,
    reValidateMode: "onSubmit",
  });

  const [showErrors, setShowErrors] = useState(true);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showErrors) {
      if (errors) {
        for (const error of Object.values(errors)) {
          if (error.message) {
            toast(error.message);
            break;
          }
        }
      }
      setShowErrors(false);
    }
  }, [errors, showErrors]);

  const handleClick = async () => {
    await trigger();
    setShowErrors(true);
  };

  const onSubmit = async (data: IFormInputs) => {
    setIsLoading(true);
    const isSuccess = await submitTeacherSurveyForm(
      JSON.parse(JSON.stringify(data))
    );

    if (!isSuccess) {
      setIsLoading(false);
      return toast(
        "Трапилась помилка про обробці форми. Відправте ще раз або спробуйте пізніше."
      );
    }

    toast(
      "Ми бачимо і цінуємо ваше бажанняпрацювати в команді TanPoPo⭐ Невдовзі ми розглянемо вашу заявку іобов’язково сконтактуємось з Вами!",
      { autoClose: 5000 }
    );
    router.push("/");
  };

  if (isLoading) {
    return (
      <main className={cl.main}>
        <Loading />
      </main>
    );
  }

  return (
    <main className={cl.main}>
      <Typography variant="h4" align="center">
        Бажаєте долучитись до <br /> нашої команди TanPoPo?
      </Typography>

      <Image
        alt=""
        src={getIconArtSrc("team")}
        width={500}
        height={500}
        style={{ width: "285px", height: "auto" }}
      />

      <ContentCard width="834px" className={cl.titleCard}>
        Важливо, щоб кожен вчитель відчував, що він є частиною великої родини,
        де його таланти та творчість підтримуються і розвиваються. Ми віримо, що
        задоволений вчитель здатний внести позитивну зміну у життя своїх учнів,
        надихаючи їх на нові великі досягнення та спонукаючи пізнавати більше!
      </ContentCard>

      <Typography
        variant="h6"
        align="center"
        style={{ maxWidth: "554px", fontSize: "22px" }}
      >
        Якщо Ви хочете отримувати задоволення від роботи викладачем та працювати
        в крутій команді, залишайте заявку нижче:
      </Typography>

      <form
        className={cl.form}
        id="surveyForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ContentCard
          width="100%"
          className={getValidClassNames(cl.formBlock, cl.contacts)}
        >
          <div className={cl.title}>Ваші контактні дані:</div>

          <div className={cl.inputs}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Будь-ласка, вкажіть Ім'я",
                minLength: {
                  value: 2,
                  message: "Будь-ласка, вкажіть коректне ім'я",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Ім'я" {...field} />
              )}
            />

            <Controller
              name="surname"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть Прізвище",
                minLength: {
                  value: 3,
                  message: "Будь-ласка, вкажіть коректне прізвище",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Прізвище" {...field} />
              )}
            />

            <Controller
              name="patronymic"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть По-батькові",
                minLength: {
                  value: 3,
                  message: "Будь-ласка, вкажіть коректне По-батькові",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="По-батькові" {...field} />
              )}
            />

            <Controller
              name="birthDate"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть Дату Народження",
              }}
              render={({ field }) => (
                <DatePicker
                  className={inputCl.input}
                  {...field}
                  label="Дата народження"
                  views={["day", "month", "year"]}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть Email",
                minLength: {
                  value: 5,
                  message: "Email має бути мінімум 5 символів завдовшки",
                },
                pattern: {
                  value: /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
                  message: "Введіть коректний email",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Email" {...field} />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть номер телефону",
                minLength: {
                  value: 10,
                  message: "Телефон має бути мінімум 10 символів завдовшки",
                },
                pattern: {
                  value: /^\+?(\d{12}|\d{10})$/,
                  message: "Введіть номер телефону у форматі +380 або 0..",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Телефон" {...field} />
              )}
            />
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              За цим номером телефону є можливість користуватись:
            </div>
            <div className={cl.inputs}>
              <Controller
                name="telegram"
                control={control}
                rules={{
                  validate: (value) => {
                    if (!getValues("telegram") && !getValues("viber")) {
                      return "Вкажіть, в якому  мессенджері з вами можна звязатись";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">Телеграм</Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="viber"
                control={control}
                rules={{
                  validate: (value) => {
                    if (!getValues("telegram") && !getValues("viber")) {
                      return "Вкажіть в якому  мессенджері з вами можна звязатись";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">Вайбер</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              Де ви проживаєте? (населений пункт та країна)
            </div>
            <div className={cl.inputs}>
              <Controller
                name="livingPlace"
                control={control}
                rules={{
                  required: "Вкажіть місце проживання",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={4}
                    style={{ width: "100%" }}
                    className={cl.textArea}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </ContentCard>

        <ContentCard
          className={getValidClassNames(cl.formBlock, cl.aboutTecher)}
          width="100%"
        >
          <div className={cl.questionBlock}>
            <div className={cl.question}>
              1. Яким рівнем володієте за кваліфікаційниміспитом з японської
              мови JLPT?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="n4"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("n1") &&
                      !getValues("n2") &&
                      !getValues("n3") &&
                      !getValues("n4")
                    ) {
                      return "Вкажіть в якому  мессенджері з вами можна звязатись";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">N4</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="n3"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("n1") &&
                      !getValues("n2") &&
                      !getValues("n3") &&
                      !getValues("n4")
                    ) {
                      return "Вкажіть в якому  мессенджері з вами можна звязатись";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">N3</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="n2"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("n1") &&
                      !getValues("n2") &&
                      !getValues("n3") &&
                      !getValues("n4")
                    ) {
                      return "Вкажіть в якому  мессенджері з вами можна звязатись";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">N2</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="n1"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("n1") &&
                      !getValues("n2") &&
                      !getValues("n3") &&
                      !getValues("n4")
                    ) {
                      return "Вкажіть в якому  мессенджері з вами можна звязатись";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">N1</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            </div>
            <div className={cl.inputs}>
              <Controller
                name="dateOfExam"
                control={control}
                rules={{
                  required: "Вкажіть дату складання іспиту",
                }}
                render={({ field }) => (
                  <Input
                    label="Будь ласка, напишіть дату складання іспиту."
                    multiline
                    rows={4}
                    style={{ width: "100%" }}
                    className={cl.textArea}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className={cl.questionBlock}>
            <div className={cl.question}>
              2. Чи маєте вищу освіту з японської філології абоперекладу? Якщо
              так, то який заклад та ступінь?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="education"
                control={control}
                rules={{
                  required: "Вкажіть місце проживання",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className={cl.questionBlock}>
            <div className={cl.question}>3. Чи відвідували Ви Японію?</div>
            <div className={cl.inputs}>
              <Controller
                name="visitedJpAsStudent"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("visitedJpAsStudent") &&
                      !getValues("visitedJpAsTourist") &&
                      !getValues("visitedJpOther") &&
                      !getValues("didNotVisitJp")
                    ) {
                      return "Вкажіть чи відвідували Ви Японію";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">
                        Так, навчання в японському університеті
                      </Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("visitedJpAsTourist", false);
                      setValue("visitedJpOther", false);
                      setValue("didNotVisitJp", false);

                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="visitedJpAsTourist"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("visitedJpAsStudent") &&
                      !getValues("visitedJpAsTourist") &&
                      !getValues("visitedJpOther") &&
                      !getValues("didNotVisitJp")
                    ) {
                      return "Вкажіть чи відвідували Ви Японію";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">Так, подорожі</Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("visitedJpAsStudent", false);
                      setValue("visitedJpOther", false);
                      setValue("didNotVisitJp", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
              <Controller
                name="visitedJpOther"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("visitedJpAsStudent") &&
                      !getValues("visitedJpAsTourist") &&
                      !getValues("visitedJpOther") &&
                      !getValues("didNotVisitJp")
                    ) {
                      return "Вкажіть чи відвідували Ви Японію";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">Так, але інше</Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("visitedJpAsStudent", false);
                      setValue("visitedJpAsTourist", false);
                      setValue("didNotVisitJp", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="didNotVisitJp"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("visitedJpAsStudent") &&
                      !getValues("visitedJpAsTourist") &&
                      !getValues("visitedJpOther") &&
                      !getValues("didNotVisitJp")
                    ) {
                      return "Вкажіть чи відвідували Ви Японію";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">
                        Ні, не було такого досвіду
                      </Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("visitedJpAsStudent", false);
                      setValue("visitedJpAsTourist", false);
                      setValue("visitedJpOther", false);

                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            </div>
            <div className={cl.inputs}>
              <Controller
                name="visitedJpAdditional"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Можете доповнити свою відповідь(по бажанню)"
                    multiline
                    rows={4}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className={cl.questionBlock}>
            <div className={cl.question}>
              4. Чи був досвід спілкування з японцями?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="speakingExpYes"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("speakingExpYes") &&
                      !getValues("speakingExpNo")
                    ) {
                      return "Вкажіть чи був досвід спілкування з японцями";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">Так</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("speakingExpNo", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="speakingExpNo"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("speakingExpYes") &&
                      !getValues("speakingExpNo")
                    ) {
                      return "Вкажіть чи був досвід спілкування з японцями";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">
                        Ні, поки не доводилось
                      </Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("speakingExpYes", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            </div>

            <div className={cl.inputs}>
              <Controller
                name="speakingExpAdditional"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Можете доповнити свою відповідь(по бажанню)"
                    multiline
                    rows={4}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              5. Чи був у Вас досвід викладання офлайн/онлайн?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="teachingExp"
                control={control}
                rules={{
                  required: "Вкажіть чи був досвід викладання офлайн/онлайн",
                }}
                render={({ field }) => (
                  <Input
                    label="Будь ласка, надайте розгорнуту відповідь"
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              6. Який ще досвід роботи у Вас був?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="workExp"
                control={control}
                rules={{
                  required: "Вкажіть чи був досвід роботи",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={9}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              7. Чи є у Вас ноутбук в робочому стані та чи Ви
              маєтестабільне/гарне з’єднання до мережі Інтернет?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="notebookInternetIsAvailable"
                control={control}
                rules={{
                  required:
                    "Вкажіть чи маєте ноутбук та гарне з’єднання до мережі Інтернет",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={4}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              8. Якби робочий день складався б з 5-7 робочих годин,скільки днів
              на тиждень в такому випадку Вибули б готові працювати?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="d34"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("d34") &&
                      !getValues("d45") &&
                      !getValues("d56") &&
                      !getValues("d67")
                    ) {
                      return "Вкажіть кількість можливих робочих днів";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">3-4</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("d45", false);
                      setValue("d56", false);
                      setValue("d67", false);

                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="d45"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("d34") &&
                      !getValues("d45") &&
                      !getValues("d56") &&
                      !getValues("d67")
                    ) {
                      return "Вкажіть кількість можливих робочих днів";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">4-5</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("d34", false);
                      setValue("d56", false);
                      setValue("d67", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="d56"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("d34") &&
                      !getValues("d45") &&
                      !getValues("d56") &&
                      !getValues("d67")
                    ) {
                      return "Вкажіть кількість можливих робочих днів";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">5-6</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("d34", false);
                      setValue("d45", false);
                      setValue("d67", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />

              <Controller
                name="d67"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("d34") &&
                      !getValues("d45") &&
                      !getValues("d56") &&
                      !getValues("d67")
                    ) {
                      return "Вкажіть кількість можливих робочих днів";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={<Typography variant="subtitle1">6-7</Typography>}
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("d34", false);
                      setValue("d45", false);
                      setValue("d56", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              9. Чи маєте зараз можливість працюватив будь-який день тижня за
              різними годинами?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="weekDaysAvailableYesAlmostAnytime"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("weekDaysAvailableYesAlmostAnytime") &&
                      !getValues("weekDaysAvailableNoNotAnyDay") &&
                      !getValues("weekDaysAvailableYseAnyDayNotAnyHour")
                    ) {
                      return "Вкажіть чи маєте зараз можливість працюватив будь-який день тижня за різними годинами";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">
                        Так, практично будь-коли
                      </Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("weekDaysAvailableNoNotAnyDay", false);
                      setValue("weekDaysAvailableYseAnyDayNotAnyHour", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
              <Controller
                name="weekDaysAvailableNoNotAnyDay"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("weekDaysAvailableYesAlmostAnytime") &&
                      !getValues("weekDaysAvailableNoNotAnyDay") &&
                      !getValues("weekDaysAvailableYseAnyDayNotAnyHour")
                    ) {
                      return "Вкажіть чи маєте зараз можливість працюватив будь-який день тижня за різними годинами";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">
                        Ні, не у всі дні тижня
                      </Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("weekDaysAvailableYesAlmostAnytime", false);
                      setValue("weekDaysAvailableYseAnyDayNotAnyHour", false);
                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
              <Controller
                name="weekDaysAvailableYseAnyDayNotAnyHour"
                control={control}
                rules={{
                  validate: (value) => {
                    if (
                      !getValues("weekDaysAvailableYesAlmostAnytime") &&
                      !getValues("weekDaysAvailableNoNotAnyDay") &&
                      !getValues("weekDaysAvailableYseAnyDayNotAnyHour")
                    ) {
                      return "Вкажіть чи маєте зараз можливість працюватив будь-який день тижня за різними годинами";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className={cl.checkbox}
                    label={
                      <Typography variant="subtitle1">
                        У будь-який день тижня, але не всі годині вільні
                      </Typography>
                    }
                    isChecked={field.value}
                    onChange={(e) => {
                      setValue("weekDaysAvailableYesAlmostAnytime", false);
                      setValue("weekDaysAvailableNoNotAnyDay", false);

                      field.onChange(e.target.checked);
                    }}
                  />
                )}
              />
            </div>
            <div className={cl.inputs}>
              <Controller
                name="weekDaysAvailableAdditional"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Можете доповнити свою відповідь(по бажанню)"
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </ContentCard>

        <ContentCard width="100%" className={getValidClassNames(cl.formBlock)}>
          <div className={cl.questionBlock}>
            <div className={cl.question}>
              10. Чим Вас зацікавила наша вакансія?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="vacancyInterest"
                control={control}
                rules={{
                  required: "Вкажіть чим Вас зацікавила наша вакансія",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              11. Що особисто для Вас важливо для комфортного та приємного
              проведення робочих годин?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="workComfort"
                control={control}
                rules={{
                  required:
                    "Вкажіть що важливо для комфортного та приємного проведення робочих годин",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              12. Чи маєте Ви додаткові вміння/навички, які могли б бути
              корисними при роботі викладачем?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="skills"
                control={control}
                rules={{
                  required: "Вкажіть ваші додаткові вміння/навички",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              13. Які маєте очікування від роботи в нашому освітньому просторі?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="expectations"
                control={control}
                rules={{
                  required:
                    "Вкажіть ваші очікування від роботи в нашому освітньому просторі",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className={cl.questionBlock}>
            <div className={cl.question}>
              14. Що слугує найбільшою мотивацією для Вас - бути викладачем?
            </div>
            <div className={cl.inputs}>
              <Controller
                name="motivation"
                control={control}
                rules={{
                  required: "Вкажіть вашу мотивацію",
                }}
                render={({ field }) => (
                  <Input
                    multiline
                    rows={7}
                    className={cl.textArea}
                    style={{ width: "100%" }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </ContentCard>

        <div className={cl.agreement}>
          <Controller
            name="agreement"
            control={control}
            rules={{
              required:
                "Щоб продовжити, прийміть\nумови Публічної Оферти та \nПолітику Конфідеційності!☑",
            }}
            render={({ field }) => (
              <Checkbox
                {...field}
                className={cl.checkbox}
                isChecked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />

          <Typography variant="subtitle1">
            <>
              Даю згоду на{" "}
              <Link
                href={"/contacts/confidentialityPolicy"}
                style={{ textDecoration: "underline" }}
                target="_blank"
              >
                обробку персональних даних.
              </Link>
            </>
          </Typography>
        </div>
      </form>
      <div className={cl.buttonWrapper}>
        <div className={cl.line}></div>
        <Button
          className={cl.button}
          variant="outlined"
          type="submit"
          onClick={handleClick}
          form="surveyForm"
        >
          <Typography variant="h6">Надіслати</Typography>
        </Button>
      </div>
    </main>
  );
};

export default Page;
