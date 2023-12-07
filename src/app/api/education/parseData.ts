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
    contactPhone
  } = data;

  const date = new Date();
  const dateFinish = new Date(date);
  if (format === 'Індивідуально') {
    dateFinish.setDate(date.getDate() + 7);
  } else {
    dateFinish.setDate(date.getDate() + 14);
  }

  return {
    date:  date.toLocaleDateString(),
    dateFinish: dateFinish.toLocaleDateString(),
    courseName: `${data.courseName}(${data.level})`,
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
    contactPhone
  };
};
