import { convertToDate } from "./converToDate";

export const checkIfItemOnSale = (date: string | undefined) => {
  if (!date) {
    return false;
  }
  const today = new Date();

  const endOfSale = convertToDate(date);

  return today <= endOfSale;
};
