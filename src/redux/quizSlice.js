import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    results: null,
    resultText: "",
  },
  reducers: {
    setQuizResults: (state, action) => {
      state.results = action.payload;
    },
    setResultText: (state, action) => {
      state.resultText = action.payload;
    },
  },
});

export const { setQuizResults, setResultText } = quizSlice.actions;

export const selectQuizResults = (state) => state.quiz.results;
export const selectResultText = (state) => state.quiz.resultText;

export default quizSlice.reducer;
