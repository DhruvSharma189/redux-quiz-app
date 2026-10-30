import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Which language runs in the browser?",
      options: ["Java", "C++", "JavaScript", "Python"],
      correctAnswer: "JavaScript",
    },
    {
      id: 2,
      question: "Which hook is used to manage local React state?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      correctAnswer: "useState",
    },
    {
      id: 3,
      question: "What does Redux Toolkit help manage?",
      options: [
        "CSS styles",
        "Database tables",
        "Application state",
        "HTML elements",
      ],
      correctAnswer: "Application state",
    },
    {
      id: 4,
      question: "Which method converts a JavaScript object to JSON text?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.object()",
      ],
      correctAnswer: "JSON.stringify()",
    },
    {
      id: 5,
      question: "Which hook reads data from the Redux store?",
      options: [
        "useDispatch",
        "useEffect",
        "useSelector",
        "useContext",
      ],
      correctAnswer: "useSelector",
    },
  ],
  currentQuestionIndex: 0,
  selectedAnswers: {},
  score: 0,
  isFinished: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionIndex, answer } = action.payload;

      if (
        state.isFinished ||
        questionIndex !== state.currentQuestionIndex ||
        state.selectedAnswers[questionIndex] !== undefined
      ) {
        return;
      }

      state.selectedAnswers[questionIndex] = answer;

      const currentQuestion = state.questions[questionIndex];
      if (answer === currentQuestion.correctAnswer) {
        state.score += 1;
      }
    },

    nextQuestion: (state) => {
      if (state.selectedAnswers[state.currentQuestionIndex] === undefined) {
        return;
      }

      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isFinished = true;
      }
    },

    resetQuiz: () => initialState,
  },
});

export const { answerQuestion, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
