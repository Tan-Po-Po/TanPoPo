"use client";

import { Controller, SubmitHandler, UseFormReturn } from "react-hook-form";
import cl from "./formCode.module.scss";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { getValidClassNames } from "@/helpers";
import TrashCan from "public/icons/trashCan.svg";
import { deletePromoCode } from "@/redux/slices/shopCart/shopCartSlice";
import { useAppDispatch } from "@/redux/hooks";
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
  const { control, handleSubmit, reset } = formReturn;
  const dispatch = useAppDispatch();

  const removePromo = (e: any) => {
    e.preventDefault()
    if (
      window.confirm(
        "Ви точно бажаєте видалити промокод? \n(Одноразові промокоди не можна буде ввести повторно)"
      )
    ) {
      dispatch(deletePromoCode());
      reset();
    }
  };
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
      {disabled ? (
        <Button
          wrapperClass={getValidClassNames(
            cl.buttonWrapper,
            disabled && cl.buttonDisabled
          )}
          onClick={removePromo}
        >
          <TrashCan />
        </Button>
      ) : (
        <Button
          type="submit"
          wrapperClass={getValidClassNames(cl.buttonWrapper)}
          variant="outlined"
        >
          +
        </Button>
      )}
    </form>
  );
};
