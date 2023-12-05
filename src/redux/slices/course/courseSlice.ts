import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface CourseState {
  name: string | null;
  japanName: string | null;
  format: "Міні-група" | "Індивідуально" | null;
  lessons: number | null;
  lessonsPerWeek: number | null;
  price: string | number | null;
  level: string | null;
  isGift: boolean;
  certificateType: "Електронний сертифікат" | "Друкований сертифікат" | null;
}

const courseLS =
  typeof window !== "undefined" ? localStorage.getItem("course") : null;

const initialState: CourseState = courseLS
  ? (JSON.parse(courseLS) as CourseState)
  : {
      name: null,
      japanName: null,
      format: null,
      lessons: null,
      lessonsPerWeek: null,
      price: null,
      level: null,
      isGift: false,
      certificateType: null,
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
  },
});

export const { setCourse } = courseSlice.actions;

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
