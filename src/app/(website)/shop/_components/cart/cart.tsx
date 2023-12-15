"use client";
import cl from "./cart.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addPromoCode,
  selectShopCart,
} from "@/redux/slices/shopCart/shopCartSlice";
import { Button, ContentCard, Input, Typography } from "@/components";
import { CartItem } from "./cartItem/cartItem";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { getValidClassNames, getTotalPrice } from "@/helpers";
import { getPromoCode } from "@/helpers/actions/getPromoCode";
import { FormCode } from "@/components/formCode/formCode";

interface IPromoCodeInput {
  code: string;
}

export const Cart = () => {
  const cart = useAppSelector(selectShopCart);

  const dispatch = useAppDispatch();

  const [total, setTotal] = useState<{ original: number; final: number }>({
    original: 0,
    final: 0,
  });

  // const { control, handleSubmit, reset } = useForm({
  //   defaultValues: {
  //     code: cart.promoCode?.code || "",
  //   },
  // });
  const formReturn = useForm({
    defaultValues: {
      code: cart.promoCode?.code || "",
    },
  });

  useEffect(() => {
    setTotal(getTotalPrice(cart));
  }, [cart]);

  const onSubmit: SubmitHandler<IPromoCodeInput> = async (data) => {
    console.log("data", data);

    if (cart.promoCode) {
      return;
    }

    const code = await getPromoCode(data.code);

    if (code) {
      toast("Промокод прийнято!😎");
      dispatch(addPromoCode(code));
    } else {
      toast("Такого промокоду не існує.🥲");
      formReturn.reset();
    }
  };

  if (!cart.items.length) {
    return (
      <div className={cl.cartMain}>
        <Typography variant="h4">Кошик порожній</Typography>
      </div>
    );
  }

  return (
    <div className={cl.cartMain}>
      <div className={cl.headers}>
        <Typography variant="subtitle1">Обрані товари</Typography>
        <Typography variant="subtitle1">Кількість</Typography>
        <Typography variant="subtitle1">Ціна</Typography>
      </div>

      <section className={cl.items}>
        {cart.items.map((item) => (
          <CartItem key={item._id} {...item} />
        ))}
      </section>

      <div className={cl.promoAndTotal}>
        <div className={cl.promoCodeContainer}>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "600", color: "#464646" }}
          >
            Промокод на знижку:
          </Typography>
          <FormCode
            label={cart.promoCode ? "Ваш промокод" : "Введіть промокод..."}
            disabled={!!cart.promoCode}
            formReturn={formReturn}
            onSubmit={onSubmit}
          />
          {/* <form className={cl.promoCodeForm} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="code"
              control={control}
              disabled={!!cart.promoCode}
              render={({ field }) => (
                <Input
                  type="text"
                  className={cl.input}
                  label={
                    cart.promoCode ? "Ваш промокод" : "Введіть промокод..."
                  }
                  {...field}
                />
              )}
            />
            <Button
              type="submit"
              wrapperClass={getValidClassNames(
                cl.buttonWrapper,
                cart.promoCode && cl.buttonDisabled
              )}
              variant="outlined"
            >
              +
            </Button>
          </form> */}
        </div>

        <div className={cl.totalContainer}>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "600", color: "#464646" }}
          >
            Разом:
          </Typography>

          <ContentCard width="136px" className={cl.total}>
            {total.final != total.original ? (
              <>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "700", textDecoration: "line-through" }}
                >
                  {total.original}
                </Typography>
                <Typography variant="h6">{total.final}</Typography>
              </>
            ) : (
              <Typography variant="h6">{total.original}</Typography>
            )}
          </ContentCard>
        </div>
      </div>
    </div>
  );
};