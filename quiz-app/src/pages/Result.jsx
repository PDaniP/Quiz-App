function Result({score, onHome, onRanking}) {
    return (
        <main className="page">
            <p className="home_eyebrow">Aventura completada</p>

            <h1>Fin de la aventura</h1>

            <p>
                Tu puntuacion provicional es:
            </p>

            <p className="result_score">
                {score}
            </p>

            <div className="home_actions">
                <button onClick={onRanking}>
                    Ver ranking
                </button>

                <button onClick={onHome}>
                    Volver al inicio
                </button>
            </div> 
        </main>
    );
}

export default Result;