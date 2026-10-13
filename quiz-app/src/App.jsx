import Header from "./components/Header";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Ranking from "./pages/Ranking";

import "./index.css";
import { useState } from "react";

import questions from "./data/questions";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState(0);

  function startQuiz() {
    const shuffleQuestions = [...questions].sort(
      () => Math.random() - 0.5
    );

    const randomQuestions = shuffleQuestions.slice(0, 10);

    setSelectedQuestions(randomQuestions);
    setFinalScore(0);
    setCurrentPage("quiz");
  }

  function finishQuiz(score) {
    setFinalScore(score);
    setCurrentPage("result");
  }

  function showRanking() {
    setCurrentPage("ranking");
  }

  function goHome() {
    setCurrentPage("home");
  }

  return (
    <>
      <div className="app">
        <Header />

        {currentPage === "home" && (
          <Home 
            onStart={startQuiz}
            onRanking={showRanking}
          />
        )}

        {currentPage === "quiz" && (
          <Quiz 
            questions={selectedQuestions}
            onFinish={finishQuiz}
          />
        )}

        {currentPage === "result" && (
          <Result 
            score={finalScore}
            onHome={goHome}
            onRanking={showRanking}
          />
        )}

        {currentPage === "ranking" && <Ranking onHome={goHome} />}

      </div>
    </>
  );
}

export default App;
