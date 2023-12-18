export const days = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя",
];

export const time = [
  "8:00\n-\n10:00",
  "10:00\n-\n13:00",
  "13:00\n-\n16:00",
  "16:00\n-\n19:00",
  "19:00\n-\n21:00",
];

export type ScheduleForm = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  age: string;
  contact: boolean;
  contactName: string;
  contactSurname: string;
  contactPhone: string;
  contactEmail: string;
  contactRole: string;
  comment: string;
  schedule: [["inappropriate" | "maybe" | "perfect"]]
};
