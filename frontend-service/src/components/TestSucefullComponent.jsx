import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LateralComponent from "./Headers/LateralComponent";
import Swal from "sweetalert2";
import persona from "../images/avatar.png";
import ImageDisplay from "./ImageDisplay";

function TestSucefullComponent() {
    const { testComoTexto } = useParams();
    const test = JSON.parse(decodeURIComponent(testComoTexto));
    console.log("TEEEEEEXTO: ", test);

    const answer_correct = [test.quest1.answer, test.quest2.answer, test.quest3.answer, test.quest4.answer];
    const answer = [test.answer1, test.answer2, test.answer3, test.answer4];
    const preguntas = [test.quest1.image, test.quest2.image, test.quest3.image, test.quest4.image];
    const preguntas_mostrar = ["preg 1", "preg 2", "preg 3", "preg 4"];

    const navigate = useNavigate();
    const [selectedRadio, setSelectedRadio] = useState(0);

    const [currentImage, setCurrentImage] = useState();
    const [currentAnswerCorrect, setCurrentAnswerCorrect] = useState();
    const [currentAnswer, setCurrentAnswer] = useState();

    const handleRadioChange = (event) => {
        console.log(event.target.value);
        let seleccion = event.target.value.split(" ")[1] - 1;
        setSelectedRadio(seleccion);

        let nextAnswerCorrect = answer_correct[seleccion].answer;
        setCurrentAnswerCorrect(nextAnswerCorrect);
        let nextAnswer = answer[seleccion];
        setCurrentAnswer(nextAnswer);
    };

    const changeRadioNext = (event) => {
        let nextSelectedRadio = (selectedRadio + 1) % preguntas_mostrar.length;
        setSelectedRadio(nextSelectedRadio);

        let nextAnswerCorrect = answer_correct[nextSelectedRadio].answer;
        setCurrentAnswerCorrect(nextAnswerCorrect);
        let nextAnswer = answer[nextSelectedRadio];
        setCurrentAnswer(nextAnswer);
    };

    useEffect(() => {
        setCurrentImage(preguntas[selectedRadio]);
        setCurrentAnswerCorrect(answer_correct[selectedRadio]);
        setCurrentAnswer(answer[selectedRadio]);
    });

    const navigateHome = () => {
        navigate("/home");
    };

    const mostrarAlerta = () => {
        Swal.fire({
            title: "¿Revisión Lista?",
            text: "Podrá volver a revisarlo",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                navigateHome();
            }
        });
    };

    const compararRespuestas = () => {
        // Aquí implementa la lógica para comparar las respuestas
        // Si son iguales, devuelve "same-answer", de lo contrario, devuelve "different-answer"
        return currentAnswer === currentAnswerCorrect ? "same-answer" : "different-answer";
    };

    return (
        <div>
            <LateralComponent></LateralComponent>
            <div class="contenedor-horizontal-datos">
                <div class="contenedor-vertical-datos">
                    <div class="radius">
                        {preguntas_mostrar.map((pregunta, index) => (
                            <div class="zona" key={pregunta}>
                                <input
                                    type="radio"
                                    id={pregunta}
                                    name="Pregunta"
                                    value={pregunta}
                                    checked={selectedRadio === index}
                                    onChange={handleRadioChange}
                                />
                                <label
                                    htmlFor={pregunta}
                                    className={selectedRadio === index ? compararRespuestas() : ""}
                                >
                                    {pregunta}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div class="quest">
                        <ImageDisplay imageName={currentImage + ".png"} />
                        {/*<textarea readOnly class="question"></textarea>*/}
                    </div>
                    <div class="answer">
                        <label>Respuesta</label>
                        <input
                            type="text"
                            placeholder="Respuesta"
                            value={currentAnswer}
                            disabled
                            style={{
                                width: "200px",
                                color:
                                    currentAnswer !== currentAnswerCorrect ? "rgb(255, 128, 128)" : "rgb(95, 255, 95)",
                            }}
                        ></input>
                        <input
                            type="text"
                            placeholder="Respuesta"
                            value={currentAnswerCorrect}
                            disabled
                            style={{ width: "200px" }}
                        ></input>
                        <button onClick={changeRadioNext}>Siguiente</button>
                        <label style={{ marginLeft: "20px" }}>Puntaje: </label>
                        <label
                            style={{
                                color: currentAnswer !== currentAnswerCorrect ? "red" : "blue",
                            }}
                        >
                            {currentAnswer !== currentAnswerCorrect ? 10 : 70}
                        </label>
                    </div>
                </div>
                <div class="perfil">
                    <div class="def-vertical">
                        <img class="imagen-persona" src={persona} alt="Ejemplo" />
                        <label class="nombre_usuario">{test.user.name}</label>

                        <button
                            style={{
                                background: "rgb(8, 30, 53)",
                                color: "rgb(185, 185, 185)",
                                borderColor: "rgb(8, 30, 53)",
                            }}
                            class="finalizar"
                            onClick={mostrarAlerta}
                        >
                            Finalizar
                        </button>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <label class="timer" style={{ fontSize: "20px" }}>
                                Puntaje:{" "}
                            </label>
                            <label
                                class="timer"
                                style={{
                                    color: test.qualification < 40 ? "red" : "blue",
                                    fontSize: "20px",
                                }}
                            >
                                {test.qualification}
                            </label>
                        </div>
                        <label class="timer">{test.time}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestSucefullComponent;
