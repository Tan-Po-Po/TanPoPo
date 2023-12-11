import { Data } from "./type";
const url = "http://localhost:3000";

export const generateUrl = (data: Data) => {
  let scheduleUrl = `${url}/studentInfo?`;
  console.log(typeof data.comment)
  console.log(data.comment)
  console.log(data.comment.replace(/ |\n/g, "+"))
  for (const [key, value] of Object.entries(data)) {
    let formattedValue;
    if (key === "schedule") {
      formattedValue = value.map((day: string[]) => day.join("-")).join("/");
    } else if (typeof value === "string") {
      formattedValue = value.replace(/ |\n/g, "+");
    } else {
      formattedValue = value
    }
    scheduleUrl += key + "=" + formattedValue + "&";
  }

  return scheduleUrl
};