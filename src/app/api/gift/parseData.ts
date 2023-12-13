import { Data } from "./type";

export const parseData = (data: Data) => {
  const {
    name,
    surname,
    phone,
    email,
    lessons,
    format,
    price,
    certificateType,
    comment,
    studentName,
    studentSurname,
    region,
    city: { label },
    department,
    address,
  } = data;

  const whereToSend = `${data.telegram ? "Телеграм, " : ""}${
    data.viber ? "Вайбер, " : ""
  }${data.onlyEmail ? "Email" : "Email"}`;
  // const deliveryType = data.isDepartmentDelivery ? "На відділення" : "Адресна";

  const date = new Date();
  const dateFinish = new Date(date);
  if (certificateType === "Друкований сертифікат") {
    dateFinish.setDate(date.getDate() + 4);
  } else {
    dateFinish.setDate(date.getDate() + 1);
  }

  return {
    date: date.toLocaleDateString(),
    dateFinish: dateFinish.toLocaleDateString(),
    certificateType: certificateType?.split(" ")[0],
    name,
    surname,
    phone,
    email,
    courseName: `${data.courseName}(${data.level})`,
    lessons,
    format,
    price,
    whereToSend,
    studentName,
    studentSurname,
    address: label && region ? `${label} / ${region} ` : "",
    delivery: department || address,
    comment,
  };
};
