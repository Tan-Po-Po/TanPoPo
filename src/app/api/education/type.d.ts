import { type FormData } from "@/components/schedule/_form/type";
import { CourseState } from "@/redux/slices/course/courseSlice";
import { ISchedule } from "@/components/schedule/_schedule/type";

export type Data = { courseName: string, comment: string, schedule: ISchedule } & FormData & CourseState;