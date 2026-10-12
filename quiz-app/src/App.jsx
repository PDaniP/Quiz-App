import Header from "./components/Header";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Ranking from "./pages/Ranking";

import "./index.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function startQuiz() {
    setCurrentPage("quiz");
  }

  function showRanking() {
    setCurrentPage("ranking");
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

        {currentPage === "quiz" && <Quiz />}

        {currentPage === "result" && <Result />}

        {currentPage === "ranking" && <Ranking />}

      </div>
    </>
  );
}

export default App;
