"use client";

import { ContentCard, Divider, Loading, Typography } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearShopCart,
  selectShopCart,
} from "@/redux/slices/shopCart/shopCartSlice";
import {
  clearDeliveryInfo,
  selectDeliveryInfo,
} from "@/redux/slices/deliveryInfo/deliveryInfoSlice";
import { Suspense, useEffect, useState } from "react";
import { deletePromoCode } from "./actions";
import { toast } from "react-toastify";
import { getTotalPrice, getValidClassNames, getPaymentStatus } from "@/helpers";
import Image from "next/image";
import cl from "../page.module.scss";

const PayLaterResult: React.FC = ({}) => {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const payAfter = searchParams.get("payAfter");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectShopCart);
  const deliveryInfo = useAppSelector(selectDeliveryInfo);

  useEffect(() => {
    document.title = "Моє замовлення | Tanpopo";
  }, []);

  useEffect(() => {
    if (!orderId) {
      router.push("/shop/checkout");
      return;
    }

    const checkStatus = async (payAfter: boolean) => {
      if (!payAfter) {
        const orderStatus = await getPaymentStatus(orderId);

        if (!(orderStatus === "success")) {
          router.push("/shop/checkout?failedPayment=true");
          return;
        }

        if (cart.items.length) {
          const dataToSend = {
            ...cart,
            ...deliveryInfo,
            totalPrice: getTotalPrice(cart),
            orderId,
          };

          const res = await fetch("/api/email?sheetName=orders", {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });

          if (!res.ok) {
            toast("Сталася помилка, будь-ласка,оновіть сторінку");
          }
        }
      }

      if (cart.promoCode?.oneTimeUse) {
        await deletePromoCode(cart.promoCode._id!);
      }
      dispatch(clearShopCart());
      dispatch(clearDeliveryInfo());
      setLoading(false);
    };

    checkStatus(Boolean(payAfter));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={cl.checkoutMainResult}>
      <Divider
        firstRow="Замовлення успішно прийнято!"
        className={cl.divider}
        bgColor="#FFEC6A"
      />
      <section className={cl.resultBlock}>
        <Image
          alt=""
          src="/logo/colorConfettiLeft.png"
          width={466}
          height={599}
          className={getValidClassNames(cl.confetti, cl.confettiLeft)}
        />
        <Image
          alt=""
          src="/logo/colorConfettiRight.png"
          width={466}
          height={599}
          className={getValidClassNames(cl.confetti, cl.confettiRight)}
        />
        <Typography
          variant="body1"
          style={{ textAlign: "center", fontWeight: "400" }}
        >
          Всю інформацію стосовно вашого замовлення було <br /> щойно надіслано
          на вашу електронну скриньку!
        </Typography>

        <ContentCard width="336px" className={cl.orderNumber}>
          <Typography variant="h6">Номер замовлення:</Typography>
          <Suspense fallback={<></>}>
            <ContentCard width="195px" className={cl.orderValue}>
              <Typography variant="h4">{orderId}</Typography>
            </ContentCard>
          </Suspense>
        </ContentCard>

        <ContentCard width="478px" className={cl.message}>
          <Typography variant="h6">
            Ми якнайшвидше розпочнемо пакувати ваше замовлення!
          </Typography>
          <Typography variant="subtitle1">
            Та надішлимо Вам повідомлення, коли пакуночок почне прямувати до
            Вас!
          </Typography>
        </ContentCard>
      </section>

      <Typography variant="h6" align="center">
        Дякуємо, що обрали TanPoPo💛
      </Typography>
    </main>
  );
};

export default PayLaterResult;
