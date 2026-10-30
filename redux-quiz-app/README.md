# QuizMaster — React + Redux Toolkit Quiz App

A beginner-friendly multiple-choice quiz application built with React, Vite, Redux Toolkit, React Redux, and localStorage.

## Features

- Five JavaScript/React/Redux questions
- One question at a time
- Immediate answer feedback
- Prevents changing an answer after submission
- Score and progress bar
- Final score and percentage
- Play Again button
- Persists quiz progress in localStorage
- Responsive layout

## Requirements

Install a current Node.js LTS version from https://nodejs.org/. npm is included with Node.js.

## Run in VS Code

1. Extract `redux-quiz-app.zip`.
2. Open the extracted `redux-quiz-app` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal, usually `http://localhost:5173`.

Keep the terminal running while you use the app. Press `Ctrl+C` to stop the development server.

## Other commands

```bash
npm run build
npm run preview
```

## Reset saved progress

The app stores its state in the browser under the key `redux-quiz-state`. To clear it, open browser DevTools → Application → Local Storage → your localhost origin, and delete that key. Alternatively, use the browser console:

```js
localStorage.removeItem("redux-quiz-state");
location.reload();
```

## Project structure

```text
redux-quiz-app/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── app/
    │   └── store.js
    └── features/
        └── quiz/
            └── quizSlice.js
```

Note: This is a client-side learning project. The correct answers are included in the frontend code, so it is not suitable for secure exams or assessments.
