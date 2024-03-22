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
import { getIconArtSrc } from "@/helpers";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import cl from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCourse, setCourse } from "@/redux/slices/course/courseSlice";
import { type FormData } from "@/components/orderForm/formData";

export default function Page() {
  const dispatch = useAppDispatch();
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
    watch,
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors, isDirty },
  } = formReturn;
  const router = useRouter();
  const course = useAppSelector(selectCourse);

  const [loading, setLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const certificateType = watch("certificateType");

  useEffect(() => {
    document.title = "Навчання у подарунок | Tanpopo";
  }, []);

  useEffect(() => {
    if (showErrors && errors) {
      if (!isDirty) {
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

  const onSubmit = (formData: FormData) => {
    let price = course.price;
    if (certificateType === "Друкований сертифікат") {
      price = `${+course?.price?.slice(0, -3)! + 200}грн`;
    }
    dispatch(
      setCourse({
        certificateType: formData.certificateType,
        price,
      })
    );

    const data = { ...course, price, ...formData, courseName: course.name };

    setLoading(true);
    fetch("/api/gift", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          setLoading(false);
          return toast("Сталася помилка, спробуйте ще раз пізніше");
        }

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
            Протягом дня з моменту успішної оплати ми надішлимо ваш електронний
            подарунковий сертифікат та промокод для активації обраного курсу!
          </Typography>
        </ContentCard>
      </div>

      <Divider
        className={cl.divider}
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
            required: "Будь-ласка, оберіть вид сертифікату",
          }}
          render={({ field }) => (
            <Select
              {...field}
              className={cl.selectType}
              menuItems={["Електронний сертифікат", "Друкований сертифікат"]}
              placeHolder="Вид сертифікату"
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
            Продовжуючи, Я приймаю умови{" "}
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
