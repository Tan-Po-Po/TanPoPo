import { ICourse } from "@/models/Course";

type CourseType = "teacher" | "video" | "book" | "audio";

export const getCoursesByType = (
  courseType: CourseType,
  courses: ICourse[]
) => {
  return courses.filter((course) => course.type === courseType);
};
