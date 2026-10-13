import { useState } from "react";

function Ranking({ onHome }) {
  const [ranking] = useState(() => {
    const savedResults = localStorage.getItem("azerothQuizRanking");

    if (!savedResults) {
        return [];
    }

    try {
        const results = JSON.parse(savedResults);

        if (!Array.isArray(results)) {
            return [];
        }

        return results.sort((a, b) => b.score - a.score);
    } catch {
        return [];
    }
  });

  return (
    <main className="page ranking_page">
        <p className="home_eyebrow">Heroes de Azeroth</p>
        <h1>Salon de los campeones</h1>

        {ranking.length === 0 ? (
            <div className="ranking_empty">
                <p>Todavia no hay registros.</p>
                <p>¡Completa un Quiz para ingresar al ranking!</p>
            </div>
        ) : (
            <div className="ranking_table_wrapper">
                <table className="ranking_table">
                    <thead>
                        <tr>
                            <th>Puesto</th>
                            <th>jugador</th>
                            <th>Puntos</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ranking.map((result, index) => (
                            <tr key={result.id ?? `${result.name}-${index}`}>
                                <td>{index + 1}</td>
                                <td>{result.name}</td>
                                <td>{result.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}

        <div className="home_actions">
            <button onClick={onHome}>
                Volver al inicio
            </button>
        </div>
    </main>
  );
}

export default Ranking;
