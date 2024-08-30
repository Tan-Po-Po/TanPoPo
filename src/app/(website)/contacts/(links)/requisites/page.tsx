"use client";
import Link from "next/link";
import cl from "./page.module.scss";
import {
  Button,
  Checkbox,
  ContentCard,
  Input,
  Loading,
  PaymentDialog,
  Typography,
} from "@/components";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { getPaymentStatus } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearShopCart,
  selectShopCart,
  updateInvoiceId,
} from "@/redux/slices/shopCart/shopCartSlice";

type FormData = {
  amount: string | number;
  comment: string;
  agreement: boolean;
};

export default function Requisites() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const shopCart = useAppSelector(selectShopCart);
  const [showErrors, setShowErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failedPayment, setFailedPayment] = useState(false);

  const formReturn = useForm<FormData>({
    defaultValues: {
      amount: "",
      comment: "",
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

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    scrollTo(0, 0);

    fetch("/api/directPayment", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      const responseData = await res.json();
      if (!res.ok) {
        setLoading(false);
        toast("Сталася помилка, спробуйте ще раз пізніше");
        return;
      } else {
        if (responseData.monopayLink && responseData.invoiceId) {
          dispatch(updateInvoiceId(responseData.invoiceId));
          router.push(responseData.monopayLink);
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

  useEffect(() => {
    document.title = "Онлайн оплата | TanPoPo";
    if (orderId && shopCart.invoiceId) {
      getPaymentStatus(shopCart.invoiceId).then((status) => {
        if (status === "success") {
          toast("Оплата пройшла успішно!");
          dispatch(updateInvoiceId(''));
        } else {
          setFailedPayment(true);
        }
      });
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={cl.payment}>
      {failedPayment && <PaymentDialog useParams={false} />}
      <Typography variant="h3" style={{ marginTop: "70px", whiteSpace: "pre" }}>
        ОНЛАЙН ОПЛАТА:
      </Typography>
      <ContentCard
        label={
          <Typography variant="body1" style={{ fontSize: "22px" }}>
            Дані про оплату:
          </Typography>
        }
        labelBgColor="linear-gradient( rgb(255, 252, 243), rgb(255, 250, 208))"
        cardBgColor="linear-gradient( rgb(255, 255, 255), rgb(255, 251, 241))"
        width="525px"
        height="525px"
        className={cl.paymentCard}
        labelClassName={cl.label}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="amount"
            control={control}
            rules={{
              required: "Будь ласка, вкажіть суму для оплати",
              validate: (value) => {
                if (
                  !value ||
                  (typeof value !== "number" && isNaN(Number(value))) ||
                  Number(value) < 1
                ) {
                  return "Будь ласка, вкажіть коректну суму для оплати";
                }
                return true;
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="1. Введіть суму(грн)"
                className={cl.amount}
                {...field}
              />
            )}
          />

          <Controller
            name="comment"
            control={control}
            rules={{
              required: "Будь ласка, вкажіть призначення платежу",
              minLength: {
                value: 5,
                message: "Будь ласка, вкажіть коректне призначення платежу",
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="2. Призначення платежу"
                rows={4}
                multiline
                className={cl.comment}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            onClick={handleClick}
            variant="outlined"
            className={cl.button}
            wrapperClass={cl.buttonWrapper}
          >
            3. Онлайн-оплата 🌐
          </Button>

          <div className={cl.checkboxWrapper}>
            <Controller
              name="agreement"
              control={control}
              rules={{
                required:
                  "Щоб продовжити, прийміть\nумови Публічної Оферти та \nПолітику Конфіденційності!☑",
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
              Я ознайомився та приймаю умови{" "}
              <Link
                href={"/contacts/oferta"}
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Публічної Оферти
              </Link>{" "}
              та{" "}
              <Link
                href={"/contacts/confidentialityPolicy"}
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                {" "}
                Політики Конфіденційності
              </Link>
              .
            </Typography>
          </div>
        </form>
      </ContentCard>

      <Typography
        variant="body1"
        className={cl.dividerParagraph}
        style={{ fontSize: "28px" }}
      >
        АБО
      </Typography>

      <Typography
        variant="h3"
        style={{ marginTop: "70px", textTransform: "uppercase" }}
        align="center"
      >
        Оплата за реквізитами:
      </Typography>
      <ContentCard
        cardBgColor="linear-gradient( rgb(255, 255, 255), rgb(255, 251, 241))"
        width="470px"
        height="215px"
        className={cl.requisitesCard}
      >
        <ContentCard
          cardBgColor="linear-gradient( rgb(255, 255, 255), rgb(255, 251, 241))"
          width="365px"
          height="100px"
        >
          <Typography
            variant="body1"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            IBAN:
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            UA153220010000026005340112692
          </Typography>
        </ContentCard>

        <Typography
          variant="subtitle1"
          style={{ color: "#151515", fontWeight: "300", marginTop: "25px" }}
        >
          ФОП Селіверстова Тетяна Дмитрівна
        </Typography>
      </ContentCard>
    </main>
  );
}
