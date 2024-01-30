"use client";

import {
  Controller,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import cl from "./formCode.module.scss";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { getValidClassNames } from "@/helpers";

export interface IPromoCodeInput {
  code: string;
}

interface Props {
  disabled?: boolean;
  onSubmit: SubmitHandler<IPromoCodeInput>;
  label: string;
  formReturn: UseFormReturn<IPromoCodeInput>;
  inputClassName?: string;
  formClassName?: string;
}

export const FormCode: React.FC<Props> = ({
  disabled,
  onSubmit,
  label,
  formReturn,
  inputClassName,
  formClassName,
}) => {
  const { control, handleSubmit } = formReturn;

  return (
    <form
      className={getValidClassNames(cl.promoCodeForm, formClassName)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="code"
        control={control}
        disabled={disabled}
        render={({ field }) => (
          <Input
            type="text"
            className={getValidClassNames(cl.input, inputClassName)}
            label={label}
            {...field}
          />
        )}
      />
      <Button
        type="submit"
        wrapperClass={getValidClassNames(
          cl.buttonWrapper,
          disabled && cl.buttonDisabled
        )}
        variant="outlined"
      >
        +
      </Button>
    </form>
  );
};
