"use client";

import cl from "./page.module.scss";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearShopCart,
  selectShopCart,
} from "@/redux/slices/shopCart/shopCartSlice";
import {
  setDeliveryInfo,
  selectDeliveryInfo,
  IDeliveryInfo,
} from "@/redux/slices/deliveryInfo/deliveryInfoSlice";
import {
  AddressForm,
  Button,
  Checkbox,
  ContactForm,
  ContentCard,
  Loading,
  Typography,
  PaymentDialog,
} from "@/components";
import { Cart } from "../_components/components";
import { Controller, useForm } from "react-hook-form";
import { FormData } from "@/components/orderForm/formData";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { getTotalPrice } from "@/helpers";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectShopCart);
  const deliveryInfo = useAppSelector(selectDeliveryInfo);

  useEffect(() => {
    document.title = "Моє замовлення | Tanpopo";
  }, []);

  useEffect(() => {
    if (!cart.items.length) {
      return router.push("/shop");
    }
    setLoading(false);
  }, [cart.items.length, router]);

  const [showErrors, setShowErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  const formReturn = useForm<FormData>({
    defaultValues: {
      ...deliveryInfo,
      agreement: false,
    },
    reValidateMode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    trigger,
    getValues,
    formState: { errors, isDirty },
  } = formReturn;

  useEffect(() => {
    if (showErrors && errors) {
      if (!isDirty && !getValues("name")) {
        toast("Будь ласка, заповніть ваші контактні дані☑️");
        setShowErrors(false);
        return;
      }

      for (const error of Object.values(errors)) {
        if (error.message) {
          toast(error.message);
          break;
        }
      }

      setShowErrors(false);
    }
  }, [errors, showErrors, isDirty]);

  const onSubmit = async (formData: FormData) => {
    dispatch(setDeliveryInfo(formData as Partial<IDeliveryInfo>));

    const dataToSend = {
      ...formData,
      ...cart,
      totalPrice: getTotalPrice(cart),
    };

    setLoading(true);
    scrollTo(0, 0);
    console.log(JSON.stringify(dataToSend));

    fetch("/api/shop", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      // If price changed or product is not available anymore
      const responseData = await res.json();
      if (res.status === 422) {
        dispatch(clearShopCart);
        toast(responseData.message);
        return setTimeout(() => router.push("/shop"), 5000);
      }
      if (!res.ok) {
        setLoading(false);
        toast("Сталася помилка, спробуйте ще раз пізніше");
      } else {
        if (responseData.liqpayLink) {
          router.push(responseData.liqpayLink);
          return;
        } else if (responseData.success && responseData.orderId) {
          router.push(
            `/shop/checkout/thanks?id=${responseData.orderId}&payAfter=true`
          );
          return;
        }
        setLoading(false);
        return;
      }
    });
  };

  const handleClick = async () => {
    await trigger();
    setShowErrors(true);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={cl.checkoutMain}>
      <Suspense fallback={<></>}>
        <PaymentDialog />
      </Suspense>

      <Typography variant="h3" align="center">
        ОФОРМЛЕННЯ ЗАМОВЛЕННЯ
      </Typography>

      <ContentCard width="804px" className={cl.cart}>
        <Cart />
      </ContentCard>

      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
        <ContactForm formReturn={formReturn} isCertificate={false} />
        <AddressForm formReturn={formReturn} isCertificate={false} />

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

          <Typography variant="subtitle1" style={{ color: "#3d3d3d" }}>
            Оформлюючи замовлення, Я ознайомився та приймаю умови{" "}
            <Link target="_blank" href="/contacts/oferta">
              <u>Публічної {"\n"}Оферти</u>
            </Link>{" "}
            та{" "}
            <Link target="_blank" href="/contacts/confidentialityPolicy">
              <u>Політики Конфідеційності</u>.
            </Link>
          </Typography>
        </div>

        <div className={cl.continue}>
          <div className={cl.line}></div>

          <Button
            className={cl.button}
            wrapperClass={cl.wrapperClass}
            variant="outlined"
            type="submit"
            onClick={handleClick}
          >
            <Typography variant="h6">Підтвердити Замовлення</Typography>
          </Button>
        </div>
      </form>
    </main>
  );
}
