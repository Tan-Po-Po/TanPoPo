"use client";

import { useState, useEffect } from "react";
import {
  AddressForm,
  Button,
  Checkbox,
  ContentCard,
  ContactForm,
  Divider,
  Typography,
  Select,
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
    formState: { errors },
  } = formReturn;
  const router = useRouter();
  const course = useAppSelector(selectCourse);

  const [showErrors, setShowErrors] = useState(true);
  const certificateType = watch("certificateType");
  

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

  const onSubmit = (formData: FormData) => {
    dispatch(
      setCourse({
        certificateType: formData.certificateType,
      })
    );

    const data = { ...course, ...formData, courseName: course.name };

    fetch("/api/gift", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      if (!res.ok) {
        return toast("Сталася помилка, спробуйте ще раз пізніше");
      }
      router.push("/education/checkout");
    });
  };

  const handleClick = async () => {
    await trigger();
    setShowErrors(true);
  };

  return (
    <main className={cl.main}>
      <div className={cl.header}>
        <Typography variant="h4">Навчання у подарунок</Typography>
        <Typography variant="h1">2 прості кроки:</Typography>
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
            src={getIconArtSrc("caliography")}
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
        <div className={cl.certificateType}>
          <ContentCard
            cardBgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
            width="390px"
            height="85px"
            className={cl.certificateHeader}
          >
            <Typography
              variant="body1"
              style={{ fontSize: "22px", fontWeight: "700" }}
            >
              Оберіть вид
            </Typography>
            <Typography variant="body1">подарункового сертифікату</Typography>
            <div className={cl.line}></div>
          </ContentCard>

          <div className={cl.container}>
            <ContentCard width="400px">
              <div>
                <Typography
                  variant="body1"
                  style={{ fontSize: "19px", fontWeight: "700" }}
                >
                  Електронний Подарунковий
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: "22px", fontWeight: "700" }}
                >
                  Сертифікат
                </Typography>
              </div>

              <Image
                alt="certificate"
                src="/certificates/electronic.png"
                width={274}
                height={190}
              />

              <Typography variant="body2">
                Протягом дня з моменту успішної оплати ми надішлимо ваш
                подарунковий сертифікат в електронному вигляді (формат .pdf та
                .png). Разом з сертифікатом Вам надається унікальний промокод
                для активації обраного курсу. Приклад такого подарункового
                сертифікату, Ви можете переглянути зверху на картинці!
              </Typography>
            </ContentCard>

            <Typography variant="body1" className={cl.or}>
              АБО
            </Typography>

            <ContentCard width="400px">
              <div>
                <Typography
                  variant="body1"
                  style={{ fontSize: "19px", fontWeight: "700" }}
                >
                  Іменний Друкований
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontSize: "22px", fontWeight: "700" }}
                >
                  Сертифікат
                </Typography>
              </div>

              <Image
                alt="certificate"
                src="/certificates/physical.png"
                width={274}
                height={190}
              />

              <Typography variant="body2">
              Ми друкуємо іменні сертифікати з вискоякісного щільного паперу, використовуючи цифрове фольгування та лакування преміум-якості! Таким чином сертифікат виглядає максимально святково та презентабельно! Послуга коштує: 120грн(друк + доставка). Ви зможете отримати іменний сертифікат за 2-4 дні з моменту замовлення!
              </Typography>
            </ContentCard>
          </div>
        </div>

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
              placeHolder="Вид сертифікату"
              setValue={setValue}
              name="certificateType"
            />
          )}
        />

        {certificateType === "Друкований сертифікат" && (
          <AddressForm
            formReturn={formReturn}
            isCertificate
          />
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
          />
          <Typography
            variant="body2"
            style={{ fontSize: "18px", fontWeight: 600 }}
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
            className={cl.btn}
            icon="triangleButton"
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
