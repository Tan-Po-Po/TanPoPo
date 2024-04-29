"use client";
import React from "react";
import { CustomToast } from "./customToast/customToast";
import { fetchNotifications } from "@/helpers/fetchNotifications";
import { INotification } from "@/models/Notification";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  INotificationsState,
  selectNotifications,
  updateLastTimeShown,
  updateNotifications,
} from "@/redux/slices/notifications/notificationsSlice";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

const THREE_HOURS = 3 * 60 * 60 * 1000;
const ONE_MINUTE = 60 * 1000;
const NOTIFICATION_PAGES = [
  "all",
  "/",
  "/about",
  "/courses",
  "/prices",
  "/shop",
  "/test-intro",
  "/library",
  "/contacts",
  "/join",
  "/gift-education",
  "/education",
  "/education/sensei",
  "/education/self",
  "/education/start",
  "/education/start/schedule",
  "/education/payment",
  "/education/gift",
  "/education/payment",
  "/shop/checkout",
  "/contacts/confidentialityPolicy",
  "/contacts/oferta",
  "/bonus-benefits",
  "/self-education",
  "/teacher-survey-letter",
  "/contacts/requisites",
  "/contacts/developers",
];

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { notifications, updatedAt } = useAppSelector(selectNotifications);

  const fetchAndUpdateNotifications = useCallback(
    async (notificationState: INotificationsState) => {
      const { notifications, updatedAt } = notificationState;
      const currentTime = new Date();
      let notificationsToShow = [...notifications];

      if (
        !updatedAt ||
        currentTime.getTime() - new Date(updatedAt).getTime() > ONE_MINUTE
      ) {
        const newNotifications = await fetchNotifications();
        const newNotificationState = [] as {
          notification: INotification;
          lastTimeShown: null | string;
        }[];

        newNotifications.forEach((item) => {
          const oldNotificationData = notifications.find((oldItem) => {
            return oldItem.notification._id === item._id;
          });

          newNotificationState.push({
            notification: item,
            lastTimeShown: oldNotificationData?.lastTimeShown || null,
          });
        });
        dispatch(updateNotifications(newNotificationState));
        notificationsToShow = [...newNotificationState];
      }

      return notificationsToShow;
    },
    [dispatch]
  );

  useEffect(() => {
    const notificationTimeouts = [] as NodeJS.Timeout[];

    fetchAndUpdateNotifications({ notifications, updatedAt }).then(
      (actualNotification) => {
        // Check if user is still on the same page
        if (pathName !== location.pathname) {
          return;
        }

        const currentTime = new Date();

        actualNotification.forEach(({ notification, lastTimeShown }) => {
          const matchPages = notification.pages.some(
            ({ page }) =>
              (page === "/library" && pathName.includes("library")) ||
              (page === "all" && NOTIFICATION_PAGES.includes(pathName)) ||
              page === pathName
          );
          if (!matchPages) return;

          if (
            lastTimeShown !== null &&
            currentTime.getTime() - new Date(lastTimeShown).getTime() <
              ONE_MINUTE * 5
          ) {
            return;
          }

          const timeout = setTimeout(() => {
            if (notification.closeTime) {
              const closeTimeout = setTimeout(() => {
                dispatch(updateLastTimeShown(notification));
              }, notification.closeTime * 1000);
              notificationTimeouts.push(closeTimeout);
            }

            return CustomToast(notification, () =>
              dispatch(updateLastTimeShown(notification))
            );
          }, notification.appearTime * 1000);

          return notificationTimeouts.push(timeout);
        });
      }
    );

    return () => {
      notificationTimeouts.forEach((timeout) => clearTimeout(timeout));

      toast.dismiss();
    };
  }, [pathName]);

  return <>{children}</>;
};

export { NotificationProvider };
