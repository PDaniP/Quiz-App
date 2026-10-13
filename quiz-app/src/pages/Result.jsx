import { useState } from "react";

function Result({score, onHome, onRanking}) {
    const [playerName, setPlayerName] = useState("");

    function handleContinue() {
        const cleanName = playerName.trim();

        if (cleanName === "") {
            return;
        }

        const savedResults = localStorage.getItem("azerothQuizRanking");
        let ranking = [];

        if (savedResults) {
            try {
                ranking = JSON.parse(savedResults);

                if (!Array.isArray(ranking)) {
                    ranking = [];
                }
            } catch {
                ranking = [];
            }
        }

        const newResult = {
            id: `${Date.now()}-${Math.random()}`,
            name: cleanName,
            score: score,
            date: new Date().toISOString(),
        };

        ranking.push(newResult);

        ranking.sort((a, b) => b.score - a.score);

        const topTen = ranking.slice(0, 10);

        localStorage.setItem(
            "azerothQuizRanking",
            JSON.stringify(topTen)
        );

        onRanking();
    }
    
    return (
        <main className="page">
            <p className="home_eyebrow">Aventura completada</p>

            <h1>Fin de la aventura</h1>

            <p>Completaste las 10 preguntas del quiz.</p>

            <p>
                Tu puntuacion final es:
            </p>

            <p className="result_score">
                {score}
            </p>

            <p>Ingresa tu nombre para continuar</p>

            <form
                className="result_form"
                onSubmit={(event) => {
                    event.preventDefault();
                    handleContinue();
                }}
            >
                <input 
                    type="text" 
                    value={playerName}
                    onChange={(event) => setPlayerName(event.target.value)}
                    placeholder="Nombre del jugador"
                    maxLength={20}
                    required
                />

                <button type="submit">
                    Ir al ranking
                </button>
            </form>

            <div className="home_actions">
                <button onClick={onHome}>
                    Volver al inicio
                </button>
            </div> 
        </main>
    );
}

export default Result;