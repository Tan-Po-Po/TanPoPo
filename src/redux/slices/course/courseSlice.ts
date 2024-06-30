import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ISchedule } from "@/components/schedule/_schedule/type";

export interface CourseState {
  id: string | null;
  type: "teacher" | "video" | "audio" | "book" | "mega" | null;
  name: string | null;
  japanName: string | null;
  format: "Міні-група" | "Індивідуально" | null;
  lessons: number | null;
  lessonsPerWeek: number | null;
  price: string | null;
  level: string | null;
  isGift: boolean;
  certificateType: "Електронний сертифікат" | "Друкований сертифікат" | null;
  backgroundColor: string | null;
  monopayLink: string | null;
  schedule?: ISchedule;
  accessDuration?: number | null;
  lessonDuration?: string | null;
  invoiceId: string | null;
}

const courseLS =
  typeof window !== "undefined" ? localStorage.getItem("course") : null;

const initialState: CourseState = courseLS
  ? (JSON.parse(courseLS) as CourseState)
  : {
      id: null,
      type: null,
      name: null,
      japanName: null,
      format: null,
      lessons: null,
      lessonsPerWeek: null,
      price: null,
      level: null,
      isGift: false,
      certificateType: null,
      backgroundColor: null,
      monopayLink: null,
      accessDuration: null,
      lessonDuration: null,
      invoiceId: null,
    };

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action: PayloadAction<Partial<CourseState>>) => {
      localStorage.setItem(
        "course",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    },
    clearCourse: () => {
      localStorage.removeItem("course");
      return { ...initialState };
    },
  },
});

export const { setCourse, clearCourse } = courseSlice.actions;

export const selectCourse = (state: RootState): CourseState => {
  if (state.course.name !== null) {
    return state.course;
  }

  if (typeof window !== "undefined") {
    const localStorageCourse = localStorage.getItem("course");

    if (localStorageCourse) {
      return JSON.parse(localStorageCourse);
    }
  }

  return state.course;
};

export default courseSlice.reducer;
