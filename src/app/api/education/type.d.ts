import { type FormData } from "@/app/education/start/schedule/_form/type";
import { CourseState } from "@/redux/slices/course/courseSlice";
import { ISchedule } from "@/app/education/start/schedule/_schedule/type";

export type Data = { courseName: string, comment: string, schedule: ISchedule } & FormData & CourseState;