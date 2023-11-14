"use client";
import { Button, Checkbox, Input, Typography } from "@/components";
import cl from "./feedBackForm.module.scss";
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
import { sendFeedback } from "./action";

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
  });

  const onSubmit: SubmitHandler<IFeedbackFormInput> = async (data) => {
    await sendFeedback(data);
    reset();
    toast("Питання успішно відправлено.");
    console.log(data);
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
          <div style={{ display: "none" }}>
            <ErrorMessage
              name="name"
              errors={errors}
              render={({ message }) => toast(message)}
            />
          </div>
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
          <div style={{ display: "none" }}>
            <ErrorMessage
              name="phone"
              errors={errors}
              render={({ message }) => toast(message)}
            />
          </div>
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
          <div style={{ display: "none" }}>
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => toast(message)}
            />
          </div>
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
          <div style={{ display: "none" }}>
            <ErrorMessage
              name="question"
              errors={errors}
              render={({ message }) => toast(message)}
            />
          </div>
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
                    <Link href={"/contacts/legal-terms"}>
                      обробку персональних даних.
                    </Link>
                  </>
                }
              />
            )}
          />
          <div style={{ display: "none" }}>
            <ErrorMessage
              name="checkbox"
              errors={errors}
              render={({ message }) => toast(message)}
            />
          </div>
          <Button icon="envelop" variant="outlined" type="submit">
            <Typography variant="h6">Надіслати</Typography>
          </Button>
        </div>
      </div>
    </form>
  );
};
