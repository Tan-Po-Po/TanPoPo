import { convertToDate } from "./convertToDate";

export const validateDate = (date: string | undefined) => {
  if (!date) {
    return false;
  }
  const today = new Date();

  const endDate = convertToDate(date);

  return today <= endDate;
};
