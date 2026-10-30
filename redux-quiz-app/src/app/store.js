import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";

const STORAGE_KEY = "redux-quiz-state";

function loadState() {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) return undefined;

    const parsedState = JSON.parse(savedState);
    const quiz = parsedState?.quiz;

    if (
      quiz &&
      Array.isArray(quiz.questions) &&
      quiz.questions.length > 0 &&
      Number.isInteger(quiz.currentQuestionIndex) &&
      quiz.currentQuestionIndex >= 0 &&
      quiz.currentQuestionIndex < quiz.questions.length &&
      quiz.selectedAnswers &&
      typeof quiz.selectedAnswers === "object" &&
      !Array.isArray(quiz.selectedAnswers) &&
      Number.isFinite(quiz.score) &&
      typeof quiz.isFinished === "boolean"
    ) {
      return parsedState;
    }
  } catch (error) {
    console.error("Could not load saved quiz:", error);
  }

  return undefined;
}

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
  } catch (error) {
    console.error("Could not save quiz:", error);
  }
});
