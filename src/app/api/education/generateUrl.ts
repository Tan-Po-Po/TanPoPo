import { SERVER_URL } from "@/config/config";
import { Data } from "./type";

export const generateUrl = (data: Data) => {
  let scheduleUrl = `${SERVER_URL}/studentInfo?`;

  for (const [key, value] of Object.entries(data)) {
    let formattedValue;
    if (key === "schedule") {
      formattedValue = value.map((day: string[]) => day.join("-")).join("/");
    } else if (typeof value === "string") {
      formattedValue = value.replace(/ |\n/g, "+");
    } else {
      formattedValue = value;
    }
    scheduleUrl += key + "=" + formattedValue + "&";
  }

  return scheduleUrl;
};
