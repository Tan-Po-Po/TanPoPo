export interface IFormInputs {
  name: string;
  surname: string;
  patronymic: string;
  birthDate: Date | string;
  email: string;
  phone: string;
  telegram: boolean;
  viber: boolean;
  livingPlace: string;
  n4: boolean;
  n3: boolean;
  n2: boolean;
  n1: boolean;
  dateOfExam: string;
  education: string;
  visitedJpAsStudent: boolean;
  visitedJpAsTourist: boolean;
  visitedJpOther: boolean;
  didNotVisitJp: boolean;
  visitedJpAdditional: string;
  speakingExpYes: boolean;
  speakingExpNo: boolean;
  speakingExpAdditional: string;
  teachingExp: string;
  workExp: string;
  notebookInternetIsAvailable: string;
  d34: boolean;
  d45: boolean;
  d56: boolean;
  d67: boolean;
  weekDaysAvailableYesAlmostAnytime: boolean;
  weekDaysAvailableNoNotAnyDay: boolean;
  weekDaysAvailableYseAnyDayNotAnyHour: boolean;
  weekDaysAvailableAdditional: string;
  vacancyInterest: string;
  workComfort: string;
  skills: string;
  expectations: string;
  motivation: string;
  agreement: boolean;
}

export const defaultValues: IFormInputs = {
  name: "",
  surname: "",
  patronymic: "",
  birthDate: null,
  email: "",
  phone: "",
  telegram: false,
  viber: false,
  livingPlace: "",
  n4: false,
  n3: false,
  n2: false,
  n1: false,
  dateOfExam: "",
  education: "",
  visitedJpAsStudent: false,
  visitedJpAsTourist: false,
  visitedJpOther: false,
  didNotVisitJp: false,
  visitedJpAdditional: "",
  speakingExpYes: false,
  speakingExpNo: false,
  speakingExpAdditional: "",
  teachingExp: "",
  workExp: "",
  notebookInternetIsAvailable: "",
  d34: false,
  d45: false,
  d56: false,
  d67: false,
  weekDaysAvailableYesAlmostAnytime: false,
  weekDaysAvailableNoNotAnyDay: false,
  weekDaysAvailableYseAnyDayNotAnyHour: false,
  weekDaysAvailableAdditional: "",
  vacancyInterest: "",
  workComfort: "",
  skills: "",
  expectations: "",
  motivation: "",
  agreement: false,
};
