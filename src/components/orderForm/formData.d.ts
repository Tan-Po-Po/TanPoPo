type FormData = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  telegram: boolean;
  viber: boolean;
  sms: boolean;
  onlyEmail: boolean;
  certificateType: "Електронний сертифікат" | "Друкований сертифікат" | null;
  studentName: string;
  studentSurname: string;
  region: string;
  city: { label: string; id: string };
  department: string;
  address: string;
  comment: string;
  isDepartmentDelivery: boolean;
  isAddressDelivery: boolean;
  agreement: boolean;
  payNow: boolean;
  payAfter: boolean;
};

export { type FormData };
