import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  answerQuestion,
  nextQuestion,
  resetQuiz,
} from "./features/quiz/quizSlice";

function App() {
  const dispatch = useDispatch();
  const {
    questions,
    currentQuestionIndex,
    selectedAnswers,
    score,
    isFinished,
  } = useSelector((state) => state.quiz);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = isFinished
    ? 100
    : ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const percentage = Math.round((score / totalQuestions) * 100);

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionIndex: currentQuestionIndex, answer }));
  };

  if (isFinished) {
    return (
      <main className="page">
        <section className="quiz-card result-card">
          <div className="result-icon" aria-hidden="true">🏆</div>
          <p className="eyebrow">QUIZ COMPLETED</p>
          <h1>Your Results</h1>
          <p className="muted">Great job! Here is how you performed.</p>

          <div className="score-circle">
            <strong>{percentage}%</strong>
            <span>Score</span>
          </div>

          <div className="result-stats">
            <div><strong>{score}</strong><span>Correct</span></div>
            <div><strong>{totalQuestions - score}</strong><span>Incorrect</span></div>
            <div><strong>{totalQuestions}</strong><span>Total</span></div>
          </div>

          <p className="result-message">
            {percentage >= 80
              ? "Excellent work! You know your basics."
              : percentage >= 50
              ? "Good effort! Keep practicing."
              : "Keep learning. You will improve with practice!"}
          </p>

          <button className="primary-button full-width" onClick={() => dispatch(resetQuiz())}>
            Play Again
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">Q</span>
          <span>QuizMaster</span>
        </div>
        <span className="level-tag">Beginner Quiz</span>
      </header>

      <section className="quiz-card">
        <div className="quiz-heading">
          <div>
            <p className="eyebrow">TEST YOUR KNOWLEDGE</p>
            <h1>Quick Quiz</h1>
          </div>
          <div className="question-count">
            <strong>{currentQuestionIndex + 1}</strong>
            <span> / {totalQuestions}</span>
          </div>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuenow={currentQuestionIndex + 1}
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
        >
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="question-area">
          <span className="question-label">QUESTION {currentQuestionIndex + 1}</span>
          <h2>{currentQuestion.question}</h2>
          <p className="muted">Choose the best answer from the options below.</p>
        </div>

        <div className="options-list">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            let optionClass = "option-button";

            if (selectedAnswer !== undefined && isCorrect) {
              optionClass += " correct";
            } else if (isSelected && !isCorrect) {
              optionClass += " incorrect";
            }

            return (
              <button
                key={option}
                className={optionClass}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== undefined}
                aria-pressed={isSelected}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span>{option}</span>
                {selectedAnswer !== undefined && isCorrect && (
                  <span className="option-status" aria-label="Correct answer">✓</span>
                )}
                {isSelected && !isCorrect && (
                  <span className="option-status" aria-label="Your answer was incorrect">✕</span>
                )}
              </button>
            );
          })}
        </div>

        {selectedAnswer !== undefined && (
          <div
            className={selectedAnswer === currentQuestion.correctAnswer ? "feedback success" : "feedback error"}
            role="status"
          >
            {selectedAnswer === currentQuestion.correctAnswer
              ? "Correct! Well done."
              : `Not quite. Correct answer: ${currentQuestion.correctAnswer}`}
          </div>
        )}

        <div className="quiz-footer">
          <span className="score-label">Score: <strong>{score}</strong></span>
          <button
            className="primary-button"
            onClick={() => dispatch(nextQuestion())}
            disabled={selectedAnswer === undefined}
          >
            {currentQuestionIndex === totalQuestions - 1 ? "See Results" : "Next Question"}
            <span aria-hidden="true"> →</span>
          </button>
        </div>
      </section>

      <p className="page-footer">Take your time. Learn something new every day.</p>
    </main>
  );
}

export default App;
