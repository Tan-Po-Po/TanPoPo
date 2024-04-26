import { createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { INotification } from "@/models/Notification";

export interface INotificationsState {
  notifications: {
    notification: INotification;
    lastTimeShown: null | string;
  }[];
  updatedAt: null | string;
}

const notificationsLS =
  typeof window !== "undefined" && localStorage.getItem("notifications");

const initialState: INotificationsState = notificationsLS
  ? (() => {
      const state = JSON.parse(notificationsLS);
      return state;
    })()
  : {
      notifications: [],
      updatedAt: null,
    };

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    updateLastTimeShown: (
      state,
      action: PayloadAction<Partial<INotification>>
    ) => {
      state.notifications.find(
        (item) => item.notification._id === action.payload._id
      )!.lastTimeShown = new Date().toISOString();
      localStorage.setItem("notifications", JSON.stringify(state));
      return state;
    },
    updateNotifications: (
      state,
      action: PayloadAction<
        {
          notification: INotification;
          lastTimeShown: null | string;
        }[]
      >
    ) => {
      state.notifications = action.payload;
      state.updatedAt = new Date().toISOString();

      localStorage.setItem("notifications", JSON.stringify(state));
      return state;
    },
  },
});

export const { updateLastTimeShown, updateNotifications } =
  notificationsSlice.actions;

export const selectNotifications = (sate: RootState): INotificationsState => {
  return sate.notifications;
};

export default notificationsSlice.reducer;
