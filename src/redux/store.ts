import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/course/courseSlice";
import galleryDialogReducer from "./slices/galleryDialog/galleryDialogSlice";
import shopCartReducer from "./slices/shopCart/shopCartSlice";
import cartDialogReducer from "./slices/cartDialog/cartDialogSlice";
import deliveryInfoReducer from "./slices/deliveryInfo/deliveryInfoSlice";
import notificationsReducer from "./slices/notifications/notificationsSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    galleryDialog: galleryDialogReducer,
    shopCart: shopCartReducer,
    cartDialog: cartDialogReducer,
    deliveryInfo: deliveryInfoReducer,
    notifications: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
