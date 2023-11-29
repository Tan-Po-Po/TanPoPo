import { convertToDate } from "./converToDate";

const months = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

export const getTextForSaleLabel = (date: string) => {
  const newDate = convertToDate(date);

  return `до ${newDate.getDate()} ${months[newDate.getMonth()]}!`;
};
