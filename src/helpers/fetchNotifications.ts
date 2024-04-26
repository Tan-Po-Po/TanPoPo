"use server";

import dbConnect from "@/config/dbConnect";
import Notification, { INotification } from "@/models/Notification";

export const fetchNotifications = async () => {
  try {
    await dbConnect();
    const notificationsDB = await Notification.find({ isActive: true });
    console.log("notificationsDB");
    notificationsDB.forEach((item) => console.log(item));

    return notificationsDB.map((item) =>
      JSON.parse(JSON.stringify(item))
    ) as INotification[];
  } catch (err) {
    console.log(err);
    return [];
  }
};
