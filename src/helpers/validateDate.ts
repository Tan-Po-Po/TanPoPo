export const validateDate = (date: string | undefined) => {
  if (!date) {
    return false;
  }
  const today = new Date();

  const endDate = new Date(date);

  return today <= endDate;
};
