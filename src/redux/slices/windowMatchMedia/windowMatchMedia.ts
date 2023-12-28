import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IWindowMatchMedia {
  isPc: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

const initialState: IWindowMatchMedia = {
  isPc: true,
  isTablet: false,
  isMobile: false,
};

export const windowMatchMediaSlice = createSlice({
  name: "windowMatchMedia",
  initialState,
  reducers: {
    setWindowMatchMedia: (state, action: PayloadAction<IWindowMatchMedia>) => {
      return action.payload;
    },
  },
});

export const { setWindowMatchMedia } = windowMatchMediaSlice.actions;

export const selectWindowMatchMedia = (state: RootState): IWindowMatchMedia => {
  return state.windowMatchMedia;
};

export default windowMatchMediaSlice.reducer;
