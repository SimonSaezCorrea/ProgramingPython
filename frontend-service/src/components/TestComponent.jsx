import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LateralComponent from "./Headers/LateralComponent";
import Swal from "sweetalert2";
import persona from "../images/avatar.png";
import UserService from "../services/UserService";
import TestService from "../services/TestService";
import ImageDisplay from "./ImageDisplay";

function TestComponents() {
    const initialState = {
        answer: "",
    };

    const navigate = useNavigate();
    const [questEntity, setQuestEntity] = useState([]);
    const [userEntity, setUserEntity] = useState([]);
    const [input, setInput] = useState(initialState);
    const [answer_pregs, setAnswers] = useState({});
    const [selectedRadio, setSelectedRadio] = useState("preg-1");
    const preguntas = ["preg-1", "preg-2", "preg-3", "preg-4"];
    const [timer, setTimer] = useState(0);
    const [currentImage, setCurrentImage] = useState();

    const changeAnswerHandler = (event) => {
        setInput({ ...input, answer: event.target.value });
        setAnswers({ ...answer_pregs, [selectedRadio]: event.target.value });
    };

    const changeRadioNext = (event) => {
        setAnswers({ ...answer_pregs, [selectedRadio]: input.answer });
        const currentQuestion = selectedRadio;
        const currentIndex = preguntas.indexOf(currentQuestion);
        const nextIndex = (currentIndex + 1) % preguntas.length;
        const nextQuestion = preguntas[nextIndex];
        setSelectedRadio(nextQuestion);

        const nextAnswer = answer_pregs[nextQuestion] || "";
        setInput({ ...input, answer: nextAnswer });
    };

    const handleRadioChange = (event) => {
        setAnswers({ ...answer_pregs, [selectedRadio]: input.answer });
        setSelectedRadio(event.target.value);

        const nextAnswer = answer_pregs[event.target.value] || "";
        setInput({ ...input, answer: nextAnswer });
    };

    const startTimer = () => {
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000); // Intervalo de 1000 ms (1 segundo)

        // Almacenamos el ID del intervalo en el estado para poder limpiarlo más tarde
        return intervalId;
    };

    // Iniciamos el timer cuando el componente se monta
    useEffect(() => {
        UserService.getConnect().then((res) => {
            //console.log("Response data User:", res.data);
            setUserEntity(res.data);
            setInput({ ...input, userEntity: res.data });
        });
        TestService.getCantTestUser().then((res) => {
            //console.log("Response data Quest:", res.data);
            setQuestEntity(res.data);
            setInput({ ...input, questEntity: res.data });
        });
        const intervalId = startTimer();
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        const currentQuestionData = questEntity[preguntas.indexOf(selectedRadio)];
        if (currentQuestionData) {
            setCurrentImage(currentQuestionData.image);
        }
    }, [selectedRadio, questEntity]);

    // Función para formatear el tiempo en formato hh:mm:ss
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
            seconds
        ).padStart(2, "0")}`;
        return formattedTime;
    };

    const navigateHome = () => {
        navigate("/home");
    };

    const mostrarAlerta = () => {
        Swal.fire({
            title: "¿Desea enviar?",
            text: "No podra cambiar su resultado despues de ser enviado",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("test_easy -> ",userEntity[0].test_easy + 1);
                let test = {
                    title: "Test " + (userEntity[0].test_easy + 1),
                    id_difficulty: 1,
                    id_user: userEntity[0].id,
                    time: formatTime(timer),
                    id_quest1: questEntity[0].id,
                    id_quest2: questEntity[1].id,
                    id_quest3: questEntity[2].id,
                    id_quest4: questEntity[3].id,
                    qualification: 0,
                };
                let qualification1 = 10;
                let qualification2 = 10;
                let qualification3 = 10;
                let qualification4 = 10;
                console.group("-> ", questEntity[0].answer, "==", answer_pregs["preg-1"]);
                console.group("-> ", questEntity[1].answer, "==", answer_pregs["preg-2"]);
                console.group("-> ", questEntity[2].answer, "==", answer_pregs["preg-3"]);
                console.group("-> ", questEntity[3].answer, "==", answer_pregs["preg-4"]);
                if (questEntity[0].answer === answer_pregs["preg-1"]) {
                    qualification1 = 70;
                }
                if (questEntity[1].answer === answer_pregs["preg-2"]) {
                    qualification2 = 70;
                }
                if (questEntity[2].answer === answer_pregs["preg-3"]) {
                    qualification3 = 70;
                }
                if (questEntity[3].answer === answer_pregs["preg-4"]) {
                    qualification4 = 70;
                }
                test.qualification = (qualification1 + qualification2 + qualification3 + qualification4) / 4;

                console.log(formatTime(timer));
                console.log("TEST: ", test);
                TestService.createTest(test);
                navigateHome();
            }
        });
    };

    return (
        <div>
            <LateralComponent></LateralComponent>
            <div class="contenedor-horizontal-datos">
                <div class="contenedor-vertical-datos">
                    <div class="radius">
                        {preguntas.map((pregunta) => (
                            <div class="zona" key={pregunta}>
                                <input
                                    type="radio"
                                    id={pregunta}
                                    name="Pregunta"
                                    value={pregunta}
                                    checked={selectedRadio === pregunta}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor={pregunta}>{pregunta}</label>
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
                            value={input.answer}
                            onChange={changeAnswerHandler}
                        ></input>
                        <button onClick={changeRadioNext}>Siguiente</button>
                    </div>
                </div>
                <div class="perfil">
                    <div class="def-vertical">
                        <img class="imagen-persona" src={persona} alt="Ejemplo" />
                        {userEntity.map((userEntity) => (
                            <div key={userEntity.id}>
                                <label class="nombre_usuario">{userEntity.name}</label>
                            </div>
                        ))}

                        <button class="finalizar" onClick={mostrarAlerta}>
                            Finalizar
                        </button>
                        <button class="cancelar">Cancelar</button>
                        <label class="timer">{formatTime(timer)}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestComponents;
