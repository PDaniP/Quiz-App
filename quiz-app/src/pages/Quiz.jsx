import { useState } from "react";

function Quiz({ questions, onFinish }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentIndex];

    function handleAnswer(answerIndex) {
        if (selectedAnswer !== null) {
            return;
        }

        setSelectedAnswer(answerIndex);

        const isCorrect =
            answerIndex === currentQuestion.correctAnswer;
        
        const updatedScore = score + (isCorrect ? 1 : 0);

        setTimeout(() => {
            if (currentIndex === questions.length - 1) {
                onFinish(updatedScore);
            } else {
                setScore(updatedScore);
                setCurrentIndex(currentIndex + 1);
                setSelectedAnswer(null);
            }
        }, 3500);
    }

    if (!currentQuestion) {
        return <p>No hay preguntas disponibles.</p>;
    }

    const isCorrect = 
        selectedAnswer === currentQuestion.correctAnswer;

    return (
        <main className="quiz">
            <section className="quiz_card">
                <div className="quiz_header">
                    <span>
                        Pregunta {currentIndex + 1} de {questions.length}
                    </span>

                    <span>
                        Aciertos: {score}
                    </span>
                </div>

                <div className="quiz_progress">
                    <div 
                        className="quiz_progress_fill"
                        style={{
                            width: `${((currentIndex + 1) / questions.length) * 100}%`,
                        }}
                    />    
                </div>

                <h1>{currentQuestion.question}</h1>

                <div className="quiz_answers">
                    {currentQuestion.answers.map((answer, index) =>{
                        let answerClass = "quiz_answer";

                        if (selectedAnswer !== null) {
                            if (index === currentQuestion.correctAnswer) {
                                answerClass += " correct";
                            } else if (index === selectedAnswer) {
                                answerClass += " incorrect";
                            }
                        }

                        return (
                            <button
                                key={index}
                                className={answerClass}
                                onClick={() => handleAnswer(index)}
                                disabled={selectedAnswer !== null}
                            >
                                <span className="answer_letter">
                                    {String.fromCharCode(65 + index)}
                                </span>

                                {answer}
                            </button>
                        );
                    })}
                </div>

                {selectedAnswer !== null && (
                    <div
                        className={`quiz_feedback ${
                            isCorrect ? "feedback_correct" : "feedback_incorrect"
                        }`}
                        role="status"
                    >
                        <strong>
                            {isCorrect ? "¡Respuesta correcta!" : "Respuesta incorrecta"}
                        </strong>

                        <p>
                            La respuesta correcta es:{" "}
                            {currentQuestion.answers[currentQuestion.correctAnswer]}
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Quiz;