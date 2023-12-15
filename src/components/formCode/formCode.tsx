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
  //   defaultValues: IPromoCodeInput;
  label: string;
  formReturn: UseFormReturn<IPromoCodeInput>;
}

export const FormCode: React.FC<Props> = ({
  disabled,
  onSubmit,
  //   defaultValues,
  label,
  formReturn,
}) => {
  const { control, handleSubmit, reset } = formReturn;

  //   const handleFormSubmit: SubmitHandler<IPromoCodeInput> = async (data) => {
  //     console.log("promocode input", data);
  //     const action = await onSubmit(data);

  //     if (action === "reset") {
  //       reset();
  //     }
  //   };

  return (
    <form className={cl.promoCodeForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="code"
        control={control}
        disabled={disabled}
        render={({ field }) => (
          <Input type="text" className={cl.input} label={label} {...field} />
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
