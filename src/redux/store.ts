import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/course/courseSlice";
import galleryDialogReducer from "./slices/galleryDialog/galleryDialogSlice";
import shopCartReducer from "./slices/shopCart/shopCartSlice";
import cartDialogReducer from "./slices/cartDialog/cartDialogSlice";
import windowMatchMediaReducer from "./slices/windowMatchMedia/windowMatchMedia";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    galleryDialog: galleryDialogReducer,
    shopCart: shopCartReducer,
    cartDialog: cartDialogReducer,
    windowMatchMedia: windowMatchMediaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
