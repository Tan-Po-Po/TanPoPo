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
    isDepartmentDelivery,
  } = data;

  const whereToSend = `${data.telegram ? "Телеграм, " : ""}${
    data.viber ? "Вайбер, " : ""
  }${data.onlyEmail ? "Email" : "Email"}`;

  const date = new Date();
  const dateFinish = new Date(date);
  if (certificateType === "Друкований сертифікат") {
    dateFinish.setDate(date.getDate() + 4);
  } else {
    dateFinish.setDate(date.getDate() + 1);
  }

  return {
    price: Number(price?.slice(0, -3)),
    date:
      date.toLocaleDateString("uk", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        timeZone: "Europe/Kiev",
      }) +
      ` (${date.toLocaleTimeString("uk", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Kiev",
      })})`,
    dateFinish:
      dateFinish.toLocaleDateString("uk", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        timeZone: "Europe/Kiev",
      }) +
      ` (${dateFinish.toLocaleTimeString("uk", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Kiev",
      })})`,
    status: "Початковий",

    certificateType: certificateType?.split(" ")[0],
    name,
    surname,
    phone,
    email,
    courseName: `${data.courseName}(${data.level})`,
    lessons,

    format,
    whereToSend,

    studentName,
    studentSurname,
    address: label && region ? `${label} / ${region} ` : "",
    delivery: isDepartmentDelivery ? department : address,
    comment,
  };
};
