import { type FormData } from "@/components/orderForm/formData";
import { CourseState } from "@/redux/slices/course/courseSlice";

export type Data = { courseName: string } & FormData & CourseState;
