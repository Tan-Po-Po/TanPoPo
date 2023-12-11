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
    date: date.toLocaleDateString(),
    dateFinish: dateFinish.toLocaleDateString(),
    courseName,
    lessons,
    price,
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
