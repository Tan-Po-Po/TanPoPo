import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/course/courseSlice";
import galleryDialogReducer from "./slices/galleryDialog/galleryDialogSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    galleryDialog: galleryDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
