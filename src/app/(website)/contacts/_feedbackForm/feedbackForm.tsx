"use client";
import { Button, Checkbox, Input, Typography } from "@/components";
import cl from "./feedBackForm.module.scss";
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
import { sendFeedback } from "./action";
import { useEffect, useState } from "react";

export type IFeedbackFormInput = {
  name: string;
  phone: string;
  email: string;
  question: string;
  checkbox: boolean | undefined;
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
      checkbox: undefined,
    },
    reValidateMode: "onSubmit",
  });

  const [showErrors, setShowErrors] = useState(true);

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

  const onSubmit: SubmitHandler<IFeedbackFormInput> = async (data) => {
    await sendFeedback(data);
    reset();
    toast("Питання успішно відправлено.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <div className={cl.inputs}>
        <div className={cl.left}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Будь ласка, вкажіть Ім'я",
              validate: {
                notEmpty: (val) => !!val.trim() || "Будь ласка, вкажіть Ім'я",
              },
            }}
            render={({ field }) => <Input label="Ім'я" {...field} />}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Будь ласка, вкажіть Телефон",
            }}
            render={({ field }) => (
              <Input type="phone" label="Телефон" {...field} />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Будь ласка, вкажіть Email",
            }}
            render={({ field }) => (
              <Input type="email" label="Email" {...field} />
            )}
          />
        </div>
        <div className={cl.right}>
          <Controller
            name="question"
            control={control}
            rules={{
              required: "Будь ласка, напишіть Питання",
            }}
            render={({ field }) => (
              <Input
                label="Ваше питання"
                multiline
                rows={9}
                style={{ width: "100%" }}
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
                "Будь ласка, дайте згоду на обробку персональних данних",
            }}
            render={({ field }) => (
              <Checkbox
                {...field}
                label={
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
