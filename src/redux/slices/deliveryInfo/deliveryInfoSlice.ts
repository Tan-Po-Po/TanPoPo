import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface IDeliveryInfo {
  name: string;
  surname: string;
  phone: string;
  email: string;
  telegram: boolean;
  viber: boolean;
  sms: boolean;
  onlyEmail: boolean;
  certificateType: null;
  studentName: "";
  studentSurname: "";
  region: "";
  city: { label: ""; id: "" };
  department: "";
  address: "";
  comment: "";
  isDepartmentDelivery: boolean;
  isAddressDelivery: boolean;
  payNow: boolean;
  payAfter: boolean;
}

const deliveryInfoLS =
  typeof window !== "undefined" && localStorage.getItem("deliveryInfo");

const initialState: IDeliveryInfo = deliveryInfoLS
  ? (() => {
      const cart = JSON.parse(deliveryInfoLS);
      cart.loading = false;
      return cart;
    })()
  : {
      name: "",
      surname: "",
      phone: "",
      email: "",
      telegram: false,
      viber: false,
      sms: false,
      onlyEmail: true,
      certificateType: null,
      studentName: "",
      studentSurname: "",
      region: "",
      city: { label: "", id: "" },
      department: "",
      address: "",
      comment: "",
      isDepartmentDelivery: true,
      isAddressDelivery: false,
      payNow: false,
      payAfter: false,
    };

export const deliveryInfoSlice = createSlice({
  name: "deliveryInfo",
  initialState,
  reducers: {
    setDeliveryInfo: (state, action: PayloadAction<Partial<IDeliveryInfo>>) => {
      state = { ...state, ...action.payload };
      localStorage.setItem("deliveryInfo", JSON.stringify(state));
      return state;
    },
    clearDeliveryInfo: (state) => {
      localStorage.removeItem("deliveryInfo");
      return state;
    },
  },
});

export const { setDeliveryInfo, clearDeliveryInfo } = deliveryInfoSlice.actions;

export const selectDeliveryInfo = (sate: RootState): IDeliveryInfo => {
  return sate.deliveryInfo;
};

export default deliveryInfoSlice.reducer;
