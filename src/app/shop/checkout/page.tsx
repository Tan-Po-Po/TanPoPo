"use client";

import { useRouter } from "next/navigation";
import cl from "./page.module.scss";
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
  Divider,
  Typography,
} from "@/components";
import { Cart } from "../_components/cart/cart";
import { Controller, UseFormReturn, useForm } from "react-hook-form";
import { FormData } from "@/components/orderForm/formData";
import Link from "next/link";
import { deletePromoCode } from "./actions";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { getTotalPrice } from "@/helpers/getTotalPrice";
import { toast } from "react-toastify";
import PayLaterResult from "./@payLaterResult/page";
import { PayNowResult } from "./@payNowResult/page";

const Checkout = () => {
  const router = useRouter();
  const cart = useAppSelector(selectShopCart);
  const dispatch = useAppDispatch();

  const [showErrors, setShowErrors] = useState(true);

  const [orderInfo, setOrderInfo] = useState<{
    orderNumber: string;
    total?: number;
  } | null>(null);

  const formReturn = useForm<FormData>({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      telegram: false,
      viber: false,
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

  const onSubmit = async (data: FormData) => {
    //add to google sheets

    //send emails

    //if success
    dispatch(clearShopCart());
    localStorage.removeItem("shopCart");

    if (cart.promoCode?.oneTimeUse) {
      await deletePromoCode(cart.promoCode._id!);
    }

    if (data.payAfter) {
      setOrderInfo({ orderNumber: "" }); //add order number from result
    } else if (data.payNow) {
      setOrderInfo({ total: getTotalPrice(cart).final, orderNumber: "" }); //add order number from result
    }
  };

  const handleClick = async () => {
    await trigger();
    setShowErrors(true);
  };

  if (!cart.items.length) {
    router.push("/shop");
    return;
  }

  if (orderInfo) {
    return (
      <main className={cl.checkoutMainResult}>
        <Divider
          firstRow="Замовлення успішно прийнято!"
          className={cl.divider}
        />

        <Typography
          variant="body1"
          style={{ textAlign: "center", fontWeight: "400" }}
        >
          Всю інформацію стосовно вашого замовлення було <br /> щойно надіслано
          на вашу електронну скриньку!
        </Typography>

        <section className={cl.resultBlock}>
          {!orderInfo.total ? (
            <PayLaterResult {...orderInfo} />
          ) : (
            <PayNowResult {...orderInfo} />
          )}
        </section>

        <Typography variant="h6">Дякуємо, що обрали TanPoPo💛</Typography>
      </main>
    );
  }

  return (
    <main className={cl.checkoutMain}>
      <Typography variant="h3">ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</Typography>

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
            <Link target="_blank" href="/">
              <u>Публічної {"\n"}Оферти</u>
            </Link>{" "}
            та{" "}
            <Link target="_blank" href="/">
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
            <Typography variant="h6">ПІДТВЕРДИТИ ЗАМОВЛЕННЯ</Typography>
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Checkout;
