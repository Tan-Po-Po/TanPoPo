"use client";

import { useState, useMemo, useEffect } from "react";
import { Autocomplete } from "@mui/material";
import {
  Button,
  Checkbox,
  ContentCard,
  Divider,
  Typography,
  Input,
  Select,
} from "@/components";
import { getIconArtSrc } from "@/helpers";
import { Controller, FormState, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import cl from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NEW_POST } from "@/config/config";
import { useAppDispatch } from "@/redux/hooks";
import { setCourse } from "@/redux/slices/course/courseSlice";
import { type FormData } from "./formData";
import debounce from "lodash.debounce";

export default function Page() {
  const dispatch = useAppDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
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

  const router = useRouter();
  const isAddressDelivery = watch("isAddressDelivery");
  const isDepartmentDelivery = watch("isDepartmentDelivery");
  const certificateType = watch("certificateType");
  const selectedRegion = watch("region");
  const selectedCity = watch("city");

  const [regions, setRegions] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);

  const fetchCities = useMemo(
    () =>
      debounce(async (FindByString: string, selectedRegion: string) => {
        console.log(selectedRegion);
        if (selectedRegion) {
          const AreaRef = regions.find(
            (reg) => reg.Description === selectedRegion
          ).Ref;

          const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
            method: "POST",
            body: JSON.stringify({
              apiKey: NEW_POST,
              modelName: "Address",
              calledMethod: "getSettlements",
              methodProperties: {
                AreaRef,
                Warehouse: 1,
                FindByString,
              },
            }),
          });
          const cities = await response.json();
          console.log(cities);
          setCities(cities.data);
        }
      }, 300),
    [regions]
  );

  const fetchDepartments = useMemo(
    () =>
      debounce(
        async (
          FindByString: string,
          selectedCity: { label: string; id: string }
        ) => {
          console.log(FindByString);
          console.log(selectedCity);
          if (selectedCity?.label) {
            const SettlementRef = selectedCity.id;
            const response = await fetch(
              "https://api.novaposhta.ua/v2.0/json/",
              {
                method: "POST",
                body: JSON.stringify({
                  apiKey: NEW_POST,
                  modelName: "Address",
                  calledMethod: "getWarehouses",
                  methodProperties: {
                    SettlementRef,
                    FindByString,
                    Limit: 500,
                  },
                }),
              }
            );
            const departments = await response.json();
            console.log(departments.data);
            setDepartments(departments.data);
          }
        },
        300
      ),
    []
  );

  // Get list of regions
  useEffect(() => {
    const getRegions = async () => {
      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        body: JSON.stringify({
          apiKey: NEW_POST,
          modelName: "Address",
          calledMethod: "getSettlementAreas",
          methodProperties: {
            Ref: "",
          },
        }),
      });
      const regions = await response.json();
      console.log(regions.data);
      setRegions(regions.data);
    };

    getRegions();
  }, []);

  // Get list of cities in selected region
  useEffect(() => {
    fetchCities("", selectedRegion);
  }, [selectedRegion, fetchCities]);

  // Get list of departments in selected city
  useEffect(() => {
    fetchDepartments("", selectedCity);
  }, [selectedCity, fetchDepartments]);

  const onSubmit = (formData: FormData) => {
    dispatch(
      setCourse({
        certificateType: formData.certificateType,
      })
    );
    console.log(formData);
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
        <ContentCard className={cl.contactForm}>
          <Typography variant="h6">Ваші контактні дані:</Typography>
          <div className={cl.inputs}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Будь-ласка, вкажіть Ім'я",
                min: {
                  value: 3,
                  message: "Будь-ласка, вкажіть коректне ім'я",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Ім'я" {...field} />
              )}
            />

            <Controller
              name="surname"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть Прізвище",
                minLength: {
                  value: 3,
                  message: "Будь-ласка, вкажіть коректне прізвище",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Прізвище" {...field} />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть Email",
                minLength: {
                  value: 5,
                  message: "Email має бути мінімум 5 символів завдовшки",
                },
                pattern: {
                  value: /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
                  message: "Введіть коректний email",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Email" {...field} />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Будь ласка, вкажіть номер телефону",
                minLength: {
                  value: 10,
                  message: "Телефон має бути мінімум 10 символів завдовшки",
                },
                pattern: {
                  value: /^\+?(\d{12}|\d{10})$/,
                  message: "Введіть номер телефону у форматі +380 або 0..",
                },
              }}
              render={({ field }) => (
                <Input className={cl.input} label="Телефон" {...field} />
              )}
            />
          </div>

          <Typography variant="body2">
            Чи надсилати подарунковий сертифікат додатково в месенджер?
          </Typography>

          <div className={cl.checkboxes}>
            <Controller
              name="telegram"
              control={control}
              rules={
                !getValues("onlyEmail")
                  ? {
                      required: "Оберіть, куди ви бажаєте отримати сертифікат",
                    }
                  : {}
              }
              render={({ field }) => (
                <Checkbox
                  {...field}
                  className={cl.checkbox}
                  label={
                    <Typography variant="subtitle1">На Телеграм</Typography>
                  }
                  isChecked={field.value}
                  onChange={(e) => {
                    setValue("onlyEmail", false);
                    field.onChange(e.target.checked);
                  }}
                />
              )}
            />

            <Controller
              name="viber"
              control={control}
              rules={
                !getValues("onlyEmail")
                  ? {
                      required: "Оберіть, куди ви бажаєте отримати сертифікат",
                    }
                  : {}
              }
              render={({ field }) => (
                <Checkbox
                  {...field}
                  className={cl.checkbox}
                  label={<Typography variant="subtitle1">На Вайбер</Typography>}
                  isChecked={field.value}
                  onChange={(e) => {
                    setValue("onlyEmail", false);
                    field.onChange(e.target.checked);
                  }}
                />
              )}
            />

            <Controller
              name="onlyEmail"
              control={control}
              rules={
                !getValues("viber") && !getValues("telegram")
                  ? {
                      required: "Оберіть, куди ви бажаєте отримати сертифікат",
                    }
                  : {}
              }
              render={({ field }) => (
                <Checkbox
                  {...field}
                  className={cl.checkbox}
                  label={
                    <Typography variant="subtitle1">Лише на E-mail</Typography>
                  }
                  isChecked={field.value}
                  onChange={(e) => {
                    setValue("viber", false);
                    setValue("telegram", false);
                    field.onChange(e.target.checked);
                  }}
                />
              )}
            />
          </div>
        </ContentCard>

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
          <ContentCard className={cl.nameCertificate}>
            <Typography
              variant="h6"
              style={{ whiteSpace: "pre-line", lineHeight: "24px" }}
            >
              {"Дані про майбутнього учня\nдля іменного сертифікату:"}
            </Typography>

            <div className={cl.personal}>
              <Controller
                name="studentName"
                control={control}
                rules={
                  certificateType === "Друкований сертифікат"
                    ? {
                        required: "Будь-ласка, вкажіть Ім'я",
                        min: {
                          value: 3,
                          message: "Будь-ласка, вкажіть коректне ім'я",
                        },
                      }
                    : {}
                }
                render={({ field }) => <Input label="Ім'я" {...field} />}
              />

              <Controller
                name="studentSurname"
                control={control}
                rules={
                  certificateType === "Друкований сертифікат"
                    ? {
                        required: "Будь-ласка, вкажіть Прізвище",
                        min: {
                          value: 3,
                          message: "Будь-ласка, вкажіть коректне Прізвище",
                        },
                      }
                    : {}
                }
                render={({ field }) => <Input label="Прізвище" {...field} />}
              />
            </div>

            <div>
              <Typography variant="body1" style={{ fontWeight: "700" }}>
                Місце доставки Новою Поштою:
              </Typography>
              <Typography variant="subtitle2">
                Доставка - безкоштовно(включено у вартість)
              </Typography>
            </div>

            <div className={cl.selects}>
              <Controller
                name="region"
                control={control}
                rules={
                  certificateType === "Друкований сертифікат"
                    ? {
                        required: "Будь ласка, оберіть область для доставки",
                      }
                    : {}
                }
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    options={[...regions.map((reg: any) => reg.Description)]}
                    onChange={(_, data) => {
                      setValue("city", { label: "", id: "" });
                      setValue("department", "");
                      field.onChange(data);
                      return data;
                    }}
                    renderOption={(props, option) => {
                      return (
                        <li {...props} key={option}>
                          {option}
                        </li>
                      );
                    }}
                    renderInput={(params) => (
                      <Input {...params} label="Оберіть область" />
                    )}
                  />
                )}
              />

              <Controller
                name="city"
                control={control}
                rules={
                  certificateType === "Друкований сертифікат"
                    ? {
                        required: "Будь ласка, оберіть місто для доставки",
                      }
                    : {}
                }
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    className={cl.cities}
                    options={cities.map((city: any) => {
                      return {
                        label:
                          city.Description.toString().toUpperCase() +
                          (city.RegionsDescription &&
                            ",\n" + city.RegionsDescription),
                        id: city.Ref,
                      };
                    })}
                    disabled={!selectedRegion}
                    onChange={(_, data) => {
                      setValue("department", "");
                      field.onChange(data);
                      return data;
                    }}
                    onInputChange={(_, value, reason) => {
                      if (reason === "input") {
                        fetchCities(value, selectedRegion);
                      }
                    }}
                    isOptionEqualToValue={(option, value) => {
                      return option.id === value.id;
                    }}
                    renderOption={(props, option) => {
                      return (
                        <li {...props} key={option.id}>
                          {option.label}
                        </li>
                      );
                    }}
                    renderInput={(params) => (
                      <Input
                        {...params}
                        label="Оберіть місто"
                        onBlur={() => {
                          if (cities.length < 150) {
                            fetchCities("", selectedRegion);
                          }
                        }}
                      />
                    )}
                  />
                )}
              />
            </div>

            <div className={cl.shipment}>
              <div className={cl.shipmentType}>
                <Typography variant="body1" style={{ marginLeft: "40px" }}>
                  Варіант доставки:
                </Typography>
                <Controller
                  name="isDepartmentDelivery"
                  control={control}
                  rules={{
                    required:
                      certificateType === "Друкований сертифікат" &&
                      !isAddressDelivery &&
                      !isDepartmentDelivery
                        ? "Оберіть тип доставки"
                        : false,
                  }}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      className={cl.checkbox}
                      label="Відділення/поштомат"
                      isChecked={field.value}
                      onChange={(e) => {
                        setValue("isAddressDelivery", false);
                        field.onChange(e.target.checked);
                      }}
                    />
                  )}
                />
                <Controller
                  name="isAddressDelivery"
                  control={control}
                  rules={{
                    required:
                      certificateType === "Друкований сертифікат" &&
                      !isAddressDelivery &&
                      !isDepartmentDelivery
                        ? "Оберіть тип доставки"
                        : false,
                  }}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      className={cl.checkbox}
                      label="Адресна доставка"
                      isChecked={field.value}
                      onChange={(e) => {
                        setValue("isDepartmentDelivery", false);
                        field.onChange(e.target.checked);
                      }}
                    />
                  )}
                />
              </div>

              <div>
                {isAddressDelivery ? (
                  <Controller
                    name="address"
                    control={control}
                    rules={
                      certificateType === "Друкований сертифікат" &&
                      isAddressDelivery
                        ? {
                            required: "Будь-ласка, вкажіть адресу для доставки",
                            minLength: {
                              value: 5,
                              message: "Вкажіть повну адресу",
                            },
                          }
                        : {}
                    }
                    render={({ field }) => (
                      <Input
                        className={cl.input}
                        placeholder="Адреса доставки..."
                        label="Адреса"
                        {...field}
                      />
                    )}
                  />
                ) : (
                  <Controller
                    name="department"
                    control={control}
                    rules={
                      certificateType === "Друкований сертифікат" &&
                      isDepartmentDelivery
                        ? {
                            required: "Будь-ласка, оберіть номер відділення",
                          }
                        : {}
                    }
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        options={[...departments.map((dep) => dep.Description)]}
                        onChange={(_, data) => {
                          field.onChange(data);
                          return data;
                        }}
                        onInputChange={(_, value, reason) => {
                          if (reason === "input") {
                            fetchDepartments(value, selectedCity);
                          }
                        }}
                        disabled={!selectedCity?.label}
                        renderInput={(params) => (
                          <Input {...params} label="№ Відділення" />
                        )}
                        renderOption={(props, option) => {
                          return (
                            <li {...props} key={option}>
                              {option}
                            </li>
                          );
                        }}
                      />
                    )}
                  />
                )}
              </div>
            </div>
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <Input
                  className={cl.comment}
                  multiline
                  rows={3}
                  label="Коментар"
                  {...field}
                />
              )}
            />
          </ContentCard>
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
            onClick={async () => {
              await trigger();
              console.log(errors);

              if (errors) {
                for (const error of Object.values(errors)) {
                  if (error.message) {
                    toast(error.message);
                    break;
                  }
                }
              }
              return handleSubmit(onSubmit);
            }}
          >
            Продовжити
          </Button>
        </div>
      </form>
    </main>
  );
}
