function Home({ onStart, onRanking }) {
    return (
        <main className="home">
            <section className="home_content">
                <p className="home_ejebrow">
                    Cronicas de Azeroth
                </p>

                <h1>¿Cuanto sabes de World of Warcraft?</h1>

                <p className="home_description">
                    Pone a prueba tus conocimientos sobre Azeroth, sus heroes, sus enemigos y sus historias.
                </p>

                <div className="home_actions">
                    <button onClick={onStart}>Comenzar quiz</button>

                    <button onClick={onRanking}>Ver ranking</button>
                </div>

                <p className="home_note">
                    10 preguntas - 30 segundos por preguntas
                </p>
            </section>
        </main>
    );
}

export default Home;