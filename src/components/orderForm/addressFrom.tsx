"use client";

import { useState, useMemo, useEffect } from "react";
import { Autocomplete } from "@mui/material";
import { ContentCard } from "../contentCard/contentCard";
import { Checkbox } from "../checkbox/checkbox";
import { Typography } from "../typography/typography";
import { Input } from "../input/input";
import { Controller, UseFormReturn } from "react-hook-form";

import { NOVA_POSHTA } from "@/config/config";
import { type FormData } from "./formData";
import debounce from "lodash.debounce";
import cl from "./orderFrom.module.scss";

type Properties = {
  formReturn: UseFormReturn<FormData>;
  isCertificate?: boolean;
};

const AddressForm: React.FC<Properties> = ({ formReturn, isCertificate }) => {
  const { control, setValue, getValues, watch } = formReturn;
  const [regions, setRegions] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);

  const selectedRegion = watch("region");
  const selectedCity = watch("city");
  const isAddressDelivery = watch("isAddressDelivery");
  const isDepartmentDelivery = watch("isDepartmentDelivery");
  const certificateType = watch("certificateType");

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
              apiKey: NOVA_POSHTA,
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
          if (selectedCity?.label) {
            const SettlementRef = selectedCity.id;
            const response = await fetch(
              "https://api.novaposhta.ua/v2.0/json/",
              {
                method: "POST",
                body: JSON.stringify({
                  apiKey: NOVA_POSHTA,
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
          apiKey: NOVA_POSHTA,
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

  return (
    <ContentCard className={cl.contactInfo}>
      {isCertificate && (
        <>
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
        </>
      )}

      <div>
        <Typography variant="body1" style={{ fontWeight: "700" }}>
          Місце доставки Новою Поштою:
        </Typography>
        <Typography variant="subtitle2">
          {isCertificate
            ? "Доставка - безкоштовно(включено у вартість)"
            : "Вартість доставки - за тарифами перевізника"}
        </Typography>
      </div>

      <div className={cl.selects}>
        <Controller
          name="region"
          control={control}
          rules={
            certificateType === "Друкований сертифікат" || !isCertificate
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
            certificateType === "Друкований сертифікат" || !isCertificate
              ? {
                  required: "Будь ласка, оберіть місто для доставки",
                  validate: (field) => {
                    if (!field.label.length) {
                      return "Будь ласка, оберіть місто для доставки";
                    }
                    return true;
                  },
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

      <Typography variant="h6" style={{ marginTop: "40px" }}>
        Варіант доставки:
      </Typography>
      <div className={cl.shipment}>
        <div className={cl.shipmentType}>
          <Controller
            name="isDepartmentDelivery"
            control={control}
            rules={{
              validate: (value) => {
                if (
                  (certificateType === "Друкований сертифікат" ||
                    !isCertificate) &&
                  !value &&
                  !getValues("isAddressDelivery")
                ) {
                  return "Оберіть тип доставки";
                }
                return true;
              },
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
              validate: (value) => {
                if (
                  (certificateType === "Друкований сертифікат" ||
                    !isCertificate) &&
                  !value &&
                  !getValues("isDepartmentDelivery")
                ) {
                  return "Оберіть тип доставки";
                }
                return true;
              },
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
              rules={{
                validate: (value) => {
                  if (
                    (certificateType === "Друкований сертифікат" ||
                      !isCertificate) &&
                    getValues("isAddressDelivery")
                  ) {
                    if (!value.length) {
                      return "Будь-ласка, вкажіть адресу для доставки";
                    }
                    if (value.length < 5) {
                      return "Вкажіть повну адресу";
                    }
                  }

                  return true;
                },
              }}
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
                (certificateType === "Друкований сертифікат" ||
                  !isCertificate) &&
                getValues("isDepartmentDelivery")
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
      {!isCertificate && (
        <div className={cl.payment}>
          <Typography variant="h6">Спосіб оплати:</Typography>

          <div className={cl.checkboxes}>
            <Controller
              name="payNow"
              control={control}
              rules={{
                validate: (value) => {
                  if (!isCertificate && !getValues("payAfter") && !value) {
                    return "Оберіть тип оплати";
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  className={cl.checkbox}
                  label={
                    <div className={cl.label}>
                      <Typography variant="body1">
                        <b>Швидка оплата по QR-коду</b>
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{ whiteSpace: "pre-line", lineHeight: "15px" }}
                      >
                        {
                          "(або оплата за реквізитами\nPrivatBank, MonoBank та інші)"
                        }
                      </Typography>
                    </div>
                  }
                  isChecked={field.value}
                  onChange={(e) => {
                    setValue("payAfter", false);
                    field.onChange(e.target.checked);
                  }}
                />
              )}
            />

            <Controller
              name="payAfter"
              control={control}
              rules={{
                validate: (value) => {
                  if (!isCertificate && !getValues("payNow") && !value) {
                    return "Оберіть тип оплати";
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  className={cl.checkbox}
                  label={
                    <div className={cl.label}>
                      <Typography variant="body1">
                        <b>Післяоплата на Новій Пошті</b>
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{ whiteSpace: "pre-line", lineHeight: "15px" }}
                      >
                        {
                          "(додатковий тариф Нової Пошти\nза переказ коштів: 20грн + 2%)"
                        }
                      </Typography>
                    </div>
                  }
                  isChecked={field.value}
                  onChange={(e) => {
                    setValue("payNow", false);
                    field.onChange(e.target.checked);
                  }}
                />
              )}
            />
          </div>
        </div>
      )}
    </ContentCard>
  );
};

export { AddressForm };
