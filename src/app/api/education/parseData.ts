import { generateUrl } from "./generateUrl";
import { Data } from "./type";

export const parseData = (data: Data) => {
  const {
    lessons,
    price,
    format,
    lessonsPerWeek,
    schedule,
    comment,
    name,
    surname,
    age,
    phone,
    email,
    contactRole,
    contactName,
    contactSurname,
    contactEmail,
    contactPhone,
  } = data;

  const courseName = `${data.courseName}(${data.level})`;
  const dataForUrl = {
    name,
    surname,
    age,
    courseName,
    format,
    lessonsPerWeek: format === "Індивідуально" ? lessonsPerWeek : 2,
    schedule,
    comment,
    phone,
    email,
    price,
    lessons,
  };

  const date = new Date();
  const dateFinish = new Date(date);
  if (format === "Індивідуально") {
    dateFinish.setDate(date.getDate() + 7);
  } else {
    dateFinish.setDate(date.getDate() + 14);
  }

  return {
    price: Number(price?.slice(0, -3)),
    date:
      date.toLocaleDateString("uk", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        timeZone: 'Europe/Kiev'
      }) +
      ` (${date.toLocaleTimeString("uk", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: 'Europe/Kiev'
      })})`,
    dateFinish:
      dateFinish.toLocaleDateString("uk", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        timeZone: 'Europe/Kiev'
      }) +
      ` (${dateFinish.toLocaleTimeString("uk", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: 'Europe/Kiev'
      })})`,
    status: "Початковий",
    notes: "",

    courseName,
    lessons,
    format,
    lessonsPerWeek,
    schedule: generateUrl(dataForUrl as Data),
    comment,

    name,
    surname,
    age,
    phone,
    email,

    contactRole,
    contactName,
    contactSurname,
    contactEmail,
    contactPhone,
  };
};
