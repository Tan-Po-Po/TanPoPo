"use client";

import { ContentCard, Loading, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearShopCart,
  selectShopCart,
} from "@/redux/slices/shopCart/shopCartSlice";
import {
  clearDeliveryInfo,
  selectDeliveryInfo,
  IDeliveryInfo,
} from "@/redux/slices/deliveryInfo/deliveryInfoSlice";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getOrderStatus } from "./actions";
import { deletePromoCode } from "./actions";
import cl from "../../page.module.scss";
import { toast } from "react-toastify";
import { getTotalPrice } from "@/helpers";

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
    if (!orderId) {
      router.push("/");
      return;
    }

    const checkStatus = async (payAfter: boolean) => {
      if (!payAfter) {
        const orderStatus = await getOrderStatus(orderId);
        console.log("===orderStatus===");
        console.log(orderStatus === "success");
        console.log("===orderStatus===");

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
          console.log(JSON.stringify(dataToSend));
          const res = await fetch("/api/email?sheetName=orders", {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });

          setLoading(false);
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
    };

    checkStatus(Boolean(payAfter));
  }, []);

  if (loading) {
    return <Loading heightAuto />;
  }

  return (
    <>
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
          Та надішлимо Вам повідомлення, коли пакуночок почне прямувати до Вас!
        </Typography>
      </ContentCard>
    </>
  );
};

export default PayLaterResult;
