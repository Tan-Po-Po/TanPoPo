"use client";
import React from "react";
import { Checkbox, Input, ContentCard, Typography } from "@/components";
import { Controller, UseFormReturn } from "react-hook-form";
import ArrowIcon from "public/icons/arrowDown.svg";
import { FormData } from "./type";
import cl from "./form.module.scss";
import { getValidClassNames } from "@/helpers";

type Properties = {
  formReturn: UseFormReturn<FormData>;
  className: string;
};

const Form: React.FC<Properties> = ({ formReturn, className }) => {
  const { control, getValues, watch } = formReturn;
  const isContactChecked = watch("contact");

  return (
    <ContentCard className={getValidClassNames(cl.form, className)}>
      <Typography variant="h6">Контактні дані майбутнього учня:</Typography>
      <div className={cl.container}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Будь ласка, вкажіть Ім'я",
            min: {
              value: 3,
              message: "Будь ласка, вкажіть коректне ім'я",
            },
          }}
          render={({ field }) => <Input label="Ім'я" {...field} />}
        />

        <Controller
          name="surname"
          control={control}
          rules={{
            required: "Будь ласка, вкажіть Прізвище",
            minLength: {
              value: 3,
              message: "Будь ласка, вкажіть коректне прізвище",
            },
          }}
          render={({ field }) => <Input label="Прізвище" {...field} />}
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
              value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
              message: "Введіть номер телефону у форматі +380 або 0..",
            },
          }}
          render={({ field }) => <Input label="Телефон" {...field} />}
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
          render={({ field }) => <Input label="Email" {...field} />}
        />

        <Controller
          name="age"
          control={control}
          rules={{
            required: "Будь ласка, вкажіть вік",
            validate: {
              validNumber: (value) => {
                const parsedValue = Number(value);

                if (isNaN(parsedValue)) {
                  return "Введіть коректний вік";
                }

                if (parsedValue <= 0 || parsedValue >= 99) {
                  return "Введіть коректний вік";
                }

                return true;
              },
            },
          }}
          render={({ field }) => <Input label="Вік" {...field} />}
        />

        <div className={cl.textContainer}>
          <ArrowIcon
            style={{ stroke: "black" }}
            alt="Arrow icon"
            className={cl.arrow}
            width={13}
            height={6}
          />
          <Typography variant="subtitle1">
            Важливо: На вищевказану <u>електронну пошту</u> ми надішлемо доступ
            до курсу!
          </Typography>
        </div>
      </div>

      <Controller
        name="contact"
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            className={cl.checkbox}
            label="Додати контактну особу (по бажанню)"
            isChecked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        )}
      />

      {isContactChecked && (
        <>
          <Typography variant="h6" className={cl.contact}>
            Контактна особа:
          </Typography>
          <div className={cl.container}>
            <Controller
              name="contactName"
              control={control}
              rules={
                getValues("contact")
                  ? {
                      required: "Будь ласка, вкажіть\nІм'я контактної особи",
                      min: {
                        value: 3,
                        message: "Будь ласка, вкажіть коректне ім'я",
                      },
                    }
                  : {}
              }
              render={({ field }) => <Input label="Ім'я" {...field} />}
            />

            <Controller
              name="contactSurname"
              control={control}
              rules={
                getValues("contact")
                  ? {
                      required:
                        "Будь ласка, вкажіть\nПрізвище контактної особи",
                      minLength: {
                        value: 3,
                        message: "Будь ласка, вкажіть коректне прізвище",
                      },
                    }
                  : {}
              }
              render={({ field }) => <Input label="Прізвище" {...field} />}
            />

            <Controller
              name="contactPhone"
              control={control}
              rules={
                getValues("contact")
                  ? {
                      required:
                        "Будь ласка, вкажіть номер\nтелефону контактної особи",
                      minLength: {
                        value: 10,
                        message:
                          "Телефон має бути мінімум 10 символів завдовшки",
                      },
                      pattern: {
                        value: /^\+?(\d{12}|\d{10})$/,
                        message:
                          "Введіть номер телефону у форматі +380 або 0..",
                      },
                    }
                  : {}
              }
              render={({ field }) => <Input label="Телефон" {...field} />}
            />

            <Controller
              name="contactEmail"
              control={control}
              rules={
                getValues("contact")
                  ? {
                      required: "Будь ласка, вкажіть\nEmail контактної особи",
                      minLength: {
                        value: 5,
                        message: "Email має бути мінімум 5 символів завдовшки",
                      },
                      pattern: {
                        value: /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
                        message: "Введіть коректний email",
                      },
                    }
                  : {}
              }
              render={({ field }) => <Input label="Email" {...field} />}
            />
          </div>

          <Controller
            name="contactRole"
            control={control}
            rules={
              getValues("contact")
                ? {
                    required: "Вкажіть, хто Ви є для учня",
                    minLength: {
                      value: 3,
                      message: "Вкажіть, хто Ви є для учня",
                    },
                  }
                : {}
            }
            render={({ field }) => (
              <Input
                {...field}
                className={cl.roleInput}
                placeholder="Будь ласка, вкажіть хто Ви є для учня?"
              />
            )}
          />
        </>
      )}
    </ContentCard>
  );
};

export { Form };
