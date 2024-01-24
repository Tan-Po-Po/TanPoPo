import { convertToDate } from "./convertToDate";

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

export const getTextForSaleLabel = (date: Date) => {
  return `до ${date.getDate()} ${months[date.getMonth()]}!`;
};
