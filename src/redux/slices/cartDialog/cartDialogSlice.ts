import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface ICartDialog {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

export const cartDialogSlice = createSlice({
  name: "cartDialog",
  initialState,
  reducers: {
    openCartDialog: () => {
      return { isOpen: true };
    },
    closeCartDialog: () => {
      return { isOpen: false };
    },
  },
});

export const { openCartDialog, closeCartDialog } = cartDialogSlice.actions;

export const selectCartDialog = (state: RootState): ICartDialog => {
  return state.cartDialog;
};

export default cartDialogSlice.reducer;
