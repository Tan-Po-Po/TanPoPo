import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface IGalleryDialog {
  isOpen: boolean;
  type: "image" | "video";
  src: string;
}

const initialState: IGalleryDialog = {
  isOpen: false,
  type: "image",
  src: "",
};

export const galleryDialogSlice = createSlice({
  name: "galleryDialog",
  initialState,
  reducers: {
    openGalleryDialog: (
      state,
      action: PayloadAction<Omit<IGalleryDialog, "isOpen">>
    ) => {
      return { isOpen: true, ...action.payload };
    },
    closeGalleryDialog: (state) => {
      return { ...state, isOpen: false };
    },
  },
});

export const { openGalleryDialog, closeGalleryDialog } =
  galleryDialogSlice.actions;

export const selectGalleryDialog = (state: RootState): IGalleryDialog => {
  return state.galleryDialog;
};

export default galleryDialogSlice.reducer;
