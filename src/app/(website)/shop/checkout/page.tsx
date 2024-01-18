"use client";

import cl from "./page.module.scss";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearShopCart,
  selectShopCart,
} from "@/redux/slices/shopCart/shopCartSlice";
import {
  AddressForm,
  Button,
  Checkbox,
  ContactForm,
  ContentCard,
  Loading,
  Typography,
} from "@/components";
import { Cart } from "../_components/components";
import { Controller, useForm } from "react-hook-form";
import { FormData } from "@/components/orderForm/formData";
import Link from "next/link";
import { deletePromoCode } from "./actions";
import { useEffect, useState } from "react";
import { getTotalPrice } from "@/helpers";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectShopCart);

  const [showErrors, setShowErrors] = useState(true);
  const [loading, setLoading] = useState(true);

  const formReturn = useForm<FormData>({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      telegram: false,
      viber: false,
      sms: false,
      onlyEmail: true,
      certificateType: null,
      studentName: "",
      studentSurname: "",
      region: "",
      city: { label: "", id: "" },
      department: "",
      address: "",
      comment: "",
      isDepartmentDelivery: true,
      isAddressDelivery: false,
      agreement: false,
      payNow: false,
      payAfter: false,
    },
    reValidateMode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = formReturn;

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

  const onSubmit = async (formData: FormData) => {
    const dataToSend = {
      ...formData,
      ...cart,
      totalPrice: getTotalPrice(cart),
    };

    setLoading(true);

    fetch("/api/shop", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      if (!res.ok) {
        setLoading(false);
        toast("Сталася помилка, спробуйте ще раз пізніше");
      } else {
        if (cart.promoCode?.oneTimeUse) {
          await deletePromoCode(cart.promoCode._id!);
        }

        dispatch(clearShopCart());

        const responseData = await res.json();

        if (formData.payAfter) {
          router.push(`/shop/checkout/thanks?id=${responseData.orderId}`);
        } else if (formData.payNow) {
          router.push(
            `/shop/checkout/requisites?id=${responseData.orderId}&total=${dataToSend.totalPrice.final}`
          );
        }
      }
    });
  };

  const handleClick = async () => {
    await trigger();
    setShowErrors(true);
  };

  useEffect(() => {
    if (!cart.items.length) {
      return router.push("/shop");
    }
    setLoading(false);
  }, [cart.items.length, router]);

  // if (!cart.items.length) {
  //   return router.push("/shop");
  // }

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={cl.checkoutMain}>
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

          <Typography variant="subtitle1">
            Продовжуючи, Я приймаю умови  
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
