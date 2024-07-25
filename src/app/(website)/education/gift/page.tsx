"use client";

import { useState, useEffect, useRef } from "react";
import {
  AddressForm,
  Button,
  Checkbox,
  ContentCard,
  ContactForm,
  Divider,
  Typography,
  Select,
  Certificates,
  Loading,
} from "@/components";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import cl from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearCourse,
  selectCourse,
  setCourse,
} from "@/redux/slices/course/courseSlice";
import { type FormData } from "@/components/orderForm/formData";
import {
  selectDeliveryInfo,
  setDeliveryInfo,
} from "@/redux/slices/deliveryInfo/deliveryInfoSlice";

export default function Page() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const course = useAppSelector(selectCourse);
  const deliveryInfo = useAppSelector(selectDeliveryInfo);

  const formReturn = useForm<FormData>({
    defaultValues: {
      ...deliveryInfo,
      certificateType: course.certificateType,
      agreement: false,
    },
    reValidateMode: "onSubmit",
  });
  const {
    watch,
    handleSubmit,
    control,
    setValue,
    getValues,
    trigger,
    formState: { errors, isDirty },
  } = formReturn;

  const [loading, setLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const certificateType = watch("certificateType");

  useEffect(() => {
    document.title = "Навчання у подарунок | TanPoPo";
  }, []);

  useEffect(() => {
    if (showErrors && errors) {
      if (!isDirty && !getValues("name")) {
        toast("Будь ласка, заповніть ваші контактні дані☑️", {
          toastId: "contactInfo",
        });
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
  }, [errors, showErrors, isDirty, getValues]);

  const onSubmit = (formData: FormData) => {
    let price = course.price;
    if (certificateType === "Друкований сертифікат") {
      price = `${+course?.price?.split(" ")[0]! + 200} грн`;
    }

    dispatch(
      setCourse({
        certificateType: formData.certificateType,
        price,
      })
    );
    const deliveryInfo: Partial<FormData> = { ...formData };
    delete deliveryInfo.agreement;
    dispatch(setDeliveryInfo(deliveryInfo));
    const data = { ...course, price, ...formData, courseName: course.name };

    setLoading(true);
    scrollTo(0, 0);
    // Just save order in google sheets and generate monopay link
    fetch("/api/gift", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        const responseData = await res.json();
        if (res.status === 422) {
          dispatch(clearCourse());
          toast(responseData.message);
          return setTimeout(() => router.push("/prices"), 3000);
        }

        if (!res.ok) {
          setLoading(false);
          return toast("Сталася помилка, спробуйте ще раз пізніше");
        }

        dispatch(
          setCourse({
            invoiceId: responseData.invoiceId,
            monopayLink: responseData.monopayLink,
          })
        );
        router.push("/education/payment");
      })
      .catch(() => {
        setLoading(false);
        toast(
          "Сталася помилка при відправці розкладу, спробуйте ще раз пізніше"
        );
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
    <main className={cl.main}>
      <div className={cl.header}>
        <Typography variant="h4">Навчання у подарунок🎁</Typography>
        <Typography variant="h6" style={{ maxWidth: "660px" }}>
          {" "}
          Оформіть подарунковий сертифікат для обраного курсу на нашому сайті
          прямо зараз:
        </Typography>
      </div>

      <div className={cl.steps}>
        <ContentCard
          className={cl.step}
          width="365px"
          height="365px"
          index={1}
          indexBgColor="#C8F2FF"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C8F2FF 100%)"
        >
          <Typography variant="h6">
            Заповніть контактні дані та оберіть вид сертифікату.
          </Typography>
          <Image
            alt="Notepad icon"
            src={getIconArtSrc("calligraphy")}
            width={109}
            height={89}
          />
          <Typography variant="body2">
            Проходьте швидке заповнення необхідних контактних даних, обирайте
            вид подарункового сертифікату та ознайомтесь із необхідною
            інформацією.
          </Typography>
        </ContentCard>

        <ContentCard
          className={cl.step}
          width="365px"
          height="365px"
          index={2}
          indexBgColor="#C9FFC8"
          cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C9FFC8 100%)"
        >
          <Typography variant="h6">
            {"Оплатіть обраний\nкурс та отримайте\nваш сертифікат!"}
          </Typography>
          <Image
            alt="Certificate icon"
            src={getIconArtSrc("certificate4")}
            width={112}
            height={83}
          />
          <Typography variant="body2">
            Протягом дня з моменту успішної оплати ми надішлемо ваш електронний
            подарунковий сертифікат та промокод для активації обраного курсу!
          </Typography>
        </ContentCard>
      </div>

      <Divider
        className={getValidClassNames(cl.divider, cl.dividerFixed)}
        firstRow={"1. Заповніть контактні дані \nта оберіть вид сертифікату."}
        bgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
      />

      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
        <ContactForm formReturn={formReturn} isCertificate />

        <Certificates header={1} className={cl.certificate} />

        <Controller
          name="certificateType"
          control={control}
          rules={{
            required: "Будь ласка, оберіть вид сертифікату",
          }}
          render={({ field }) => (
            <Select
              {...field}
              className={cl.selectType}
              menuItems={["Електронний сертифікат", "Друкований сертифікат"]}
              placeHolder={
                certificateType ? certificateType : "Вид сертифікату"
              }
              setValue={setValue}
              name="certificateType"
            />
          )}
        />

        {certificateType === "Друкований сертифікат" && (
          <AddressForm formReturn={formReturn} isCertificate />
        )}

        <ContentCard className={cl.important}>
          <Typography variant="body2" style={{ fontWeight: 700 }}>
            Декілька важливих пам’яток стосовно промокоду для активації курсу:
          </Typography>
          <ul className={cl.list}>
            <li>
              <Typography variant="subtitle1">
                Промокод не може бути використаний повторно після активації
                курсу.
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1">
                Промокод можна використати протягом 1 року з моменту його
                надання.
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1">
                Промокод діє лише на обраний курс з зазначеним форматом та к-стю
                занять.
              </Typography>
            </li>
          </ul>
          <Image
            className={cl.image}
            src="/images/laptop.png"
            alt="Laptop"
            width={332}
            height={172}
            style={{ width: "332px", maxWidth: "100%", height: "auto" }}
          />
          <Typography
            variant="body2"
            style={{ fontSize: "18px", fontWeight: 600 }}
            className={cl.p}
          >
            Активувати курс за допомогою подарункового промокоду дуже
            легко!Спеціально для цього ми записали короткий відеогайд по
            активації курсу, який завжди можна знайти на нашій сторінці
            “Контакти”.
          </Typography>
        </ContentCard>

        <div className={cl.agreement}>
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
            Продовжуючи, Я приймаю умови{" "}
            <Link target="_blank" href="/contacts/oferta">
              <u>Публічної {"\n"}Оферти</u>
            </Link>{" "}
            та{" "}
            <Link target="_blank" href="/contacts/confidentialityPolicy">
              <u>Політики Конфіденційності</u>.
            </Link>
          </Typography>
        </div>

        <div className={cl.continue}>
          <div className={cl.line}></div>

          <Button
            className={cl.btn}
            icon="triangleButtonRight"
            variant="outlined"
            type="submit"
            onClick={handleClick}
          >
            Продовжити
          </Button>
        </div>
      </form>
    </main>
  );
}
