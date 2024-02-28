"use client";
import { Button, Checkbox, Input, Typography, Loading } from "@/components";
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import cl from "./feedbackForm.module.scss";

export type IFeedbackFormInput = {
  name: string;
  phone: string;
  email: string;
  question: string;
  checkbox: boolean;
};

export const FeedbackForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm<IFeedbackFormInput>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      question: "",
      checkbox: false,
    },
    reValidateMode: "onSubmit",
  });

  const [showErrors, setShowErrors] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showErrors && errors) {
      for (const error of Object.values(errors)) {
        if (error.message) {
          toast(error.message);
          break;
        }
      }

      setShowErrors(false);
    }
  }, [errors, showErrors]);

  const handleClick = async () => {
    await trigger();
    setShowErrors(true);
  };
  
  const onSubmit: SubmitHandler<IFeedbackFormInput> = async (data) => {
    setLoading(true);
    fetch("/api/question", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        setLoading(false);

        if (!res.ok) {
          return toast("Сталася помилка, спробуйте ще раз пізніше");
        }
        reset();
        toast("Ваше звернення успішно відправлено⭐️", { autoClose: 5000 });
      })
      .catch(() => toast("Сталася помилка, спробуйте ще раз пізніше"));
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <div className={cl.inputs}>
        <div className={cl.left}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Будь-ласка, вкажіть Ім'я",
              minLength: {
                value: 3,
                message: "Будь-ласка, вкажіть коректне ім'я",
              },
              validate: {
                notEmpty: (val) => !!val.trim() || "Будь-ласка, вкажіть Ім'я",
              },
            }}
            render={({ field }) => (
              <Input label="Ім'я" {...field} className={cl.input} />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Будь-ласка, вкажіть номер телефону",
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
              <Input
                type="phone"
                label="Телефон"
                {...field}
                className={cl.input}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Будь-ласка, вкажіть Email",
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
              <Input label="Email" {...field} className={cl.input} />
            )}
          />
        </div>
        <div className={cl.right}>
          <Controller
            name="question"
            control={control}
            rules={{
              required: "Будь-ласка, напишіть Питання",
              minLength: {
                value: 5,
                message: "Будь-ласка, опишіть Питання коректно",
              },
            }}
            render={({ field }) => (
              <Input
                label="Ваше питання"
                multiline
                rows={9}
                style={{ width: "100%" }}
                className={cl.textArea}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className={cl.footer}>
        <div className={cl.content}>
          <Controller
            name="checkbox"
            control={control}
            rules={{
              required:
                "Будь-ласка, дайте згоду на обробку персональних данних",
            }}
            render={({ field }) => (
              <Checkbox
                {...field}
                label={
                  <div className={cl.label}>
                    Даю згоду на{" "}
                    <Link
                      href={"/contacts/confidentialityPolicy"}
                      style={{ textDecoration: "underline" }}
                      target="_blank"
                    >
                      обробку персональних даних.
                    </Link>
                  </div>
                }
              />
            )}
          />

          <Button
            icon="envelop"
            variant="outlined"
            type="submit"
            className={cl.button}
            onClick={handleClick}
          >
            <Typography variant="h6">Надіслати</Typography>
          </Button>
        </div>
      </div>
    </form>
  );
};
