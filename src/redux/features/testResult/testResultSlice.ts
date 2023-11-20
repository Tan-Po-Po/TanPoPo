import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TestResult {
  level: string;
}

const initialState: TestResult = {
  level: "",
};

export const testResultSlice = createSlice({
  name: "testResult",
  initialState,
  reducers: {
    setTestResult: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
  },
});

export const { setTestResult } = testResultSlice.actions;

export const selectTestResult = (state: RootState) => state.testResult.level;

export default testResultSlice.reducer;
