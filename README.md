# 🧠 Redux Quiz App

A responsive and interactive Quiz Application built using **React.js, JavaScript, Redux Toolkit, and Vite**. This project demonstrates how Redux Toolkit can be used to manage application state efficiently while providing a smooth quiz experience.

## 🚀 Features

- Interactive multiple-choice questions (MCQs).
- Select answers and navigate between questions.
- Real-time score tracking.
- Quiz completion and result calculation.
- Reset and restart quiz functionality.
- Centralized state management using Redux Toolkit.
- Persistent quiz state using LocalStorage.
- Responsive user interface.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI development |
| JavaScript | Application logic |
| Redux Toolkit | State management |
| React Redux | Redux integration |
| Vite | Development and build tool |
| CSS3 | Styling |
| LocalStorage | Data persistence |

## 📁 Project Structure

```text
redux-quiz-app/
│
├── public/
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── features/
│   │   └── quiz/
│   │       └── quizSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd redux-quiz-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Visit the local URL provided by Vite, usually:

```text
http://localhost:5173
```

## 🧠 Redux Toolkit Implementation

This project uses Redux Toolkit to manage quiz-related application state.

**Key Redux concepts used:**

- `configureStore()` – Creates the Redux store.
- `createSlice()` – Defines quiz state and reducer logic.
- `useSelector()` – Accesses Redux state inside React components.
- `useDispatch()` – Dispatches actions to update the state.
- LocalStorage – Persists quiz progress across page reloads.

## 🎯 Learning Objectives

Through this project, I explored:

- Understanding Redux and centralized state management.
- Implementing Redux Toolkit in React.
- Managing complex component states.
- Working with reducers and actions.
- Integrating LocalStorage with Redux.
- Building reusable React components.

## 🔮 Future Enhancements

- Timer for each question.
- Difficulty levels (Easy, Medium, Hard).
- Multiple quiz categories.
- Leaderboard and ranking system.
- Quiz history and performance analytics.
- Dark and light themes.

## 👨‍💻 Author

**Dhruv Sharma**

Frontend Developer | Java Developer

---

⭐ If you find this project useful, consider giving it a star!
