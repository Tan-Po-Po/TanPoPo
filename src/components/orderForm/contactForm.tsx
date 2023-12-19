"use client";

import React from "react";
import { ContentCard } from "../contentCard/contentCard";
import { Typography } from "../typography/typography";
import { Input } from "../input/input";
import { Controller, UseFormReturn } from "react-hook-form";
import { type FormData } from "./formData";
import cl from "./orderFrom.module.scss";
import { Checkbox } from "../checkbox/checkbox";

type Properties = {
  formReturn: UseFormReturn<FormData>;
  sms?: boolean;
  isCertificate?: boolean;
};

const ContactForm: React.FC<Properties> = ({ formReturn, isCertificate }) => {
  const { control, setValue, getValues } = formReturn;

  return (
    <ContentCard className={cl.contactForm}>
      <Typography variant="h6">Ваші контактні дані:</Typography>
      <div className={cl.inputs}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Будь-ласка, вкажіть Ім'я",
            minLength: {
              value: 3,
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

      <Typography variant="body2">
        {isCertificate
          ? "Чи надсилати подарунковий сертифікат додатково в месенджер?"
          : "Чи надсилати інформацію по замовленню в месенджер?"}
      </Typography>

      <div className={cl.checkboxes}>
        <Controller
          name="telegram"
          control={control}
          rules={{
            validate: (value) => {
              if (
                !getValues("onlyEmail") &&
                !getValues("viber") &&
                !value &&
                !getValues("sms")
              ) {
                return isCertificate
                  ? "Оберіть, куди ви бажаєте отримати сертифікат"
                  : "Оберіть, куди ви бажаєте отримати інформацію про замовлення";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <Checkbox
              {...field}
              className={cl.checkbox}
              label={<Typography variant="subtitle1">Телеграм</Typography>}
              isChecked={field.value}
              onChange={(e) => {
                setValue("onlyEmail", false);
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
              if (
                !getValues("onlyEmail") &&
                !getValues("telegram") &&
                !value &&
                !getValues("sms")
              ) {
                return isCertificate
                  ? "Оберіть, куди ви бажаєте отримати сертифікат"
                  : "Оберіть, куди ви бажаєте отримати інформацію про замовлення";
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
                setValue("onlyEmail", false);
                field.onChange(e.target.checked);
              }}
            />
          )}
        />

        {!isCertificate && (
          <Controller
            name="sms"
            control={control}
            rules={{
              validate: (value) => {
                if (
                  !getValues("onlyEmail") &&
                  !getValues("telegram") &&
                  !value &&
                  !getValues("viber")
                ) {
                  return isCertificate
                    ? "Оберіть, куди ви бажаєте отримати сертифікат"
                    : "Оберіть, куди ви бажаєте отримати інформацію про замовлення";
                }
                return true;
              },
            }}
            render={({ field }) => (
              <Checkbox
                {...field}
                className={cl.checkbox}
                label={<Typography variant="subtitle1">SMS</Typography>}
                isChecked={field.value}
                onChange={(e) => {
                  setValue("onlyEmail", false);
                  field.onChange(e.target.checked);
                }}
              />
            )}
          />
        )}

        <Controller
          name="onlyEmail"
          control={control}
          rules={{
            validate: (value) => {
              if (
                !getValues("sms") &&
                !getValues("telegram") &&
                !value &&
                !getValues("viber")
              ) {
                return isCertificate
                  ? "Оберіть, куди ви бажаєте отримати сертифікат"
                  : "Оберіть, куди ви бажаєте отримати інформацію про замовлення";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <Checkbox
              {...field}
              className={cl.checkbox}
              label={
                <Typography variant="subtitle1">Лише на E-mail</Typography>
              }
              isChecked={field.value}
              onChange={(e) => {
                setValue("viber", false);
                setValue("telegram", false);
                setValue("sms", false);
                field.onChange(e.target.checked);
              }}
            />
          )}
        />
      </div>
    </ContentCard>
  );
};

export { ContactForm };
