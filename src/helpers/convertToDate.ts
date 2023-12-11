export const convertToDate = (date: string) => {
  const values = date.split(".");

  const utcDate = new Date(
    Number(values[2]),
    Number(values[1]) - 1,
    Number(values[0]),
    23,
    59,
    59
  );

  return utcDate;
};
