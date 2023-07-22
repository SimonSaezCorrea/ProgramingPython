import React, { useState, useEffect } from "react";
import LateralComponent from "./Headers/LateralComponent";
import swal from "sweetalert";
import persona from "../images/avatar.png";
import UserService from "../services/UserService";
import TestService from "../services/TestService";

function TestComponents() {
    const initialState = {
        userEntity: [],
        questEntity: [],
    };

    const [input, setInput] = useState(initialState);
    const [answer_pregs, setAnswers] = useState({});
    const [pregs, setPregs] = useState({});
    const [selectedRadio, setSelectedRadio] = useState("pregunta-1");
    const preguntas = ["pregunta-1", "pregunta-2", "pregunta-3", "pregunta-4"];
    const [timer, setTimer] = useState(0);


    const changeAnswerHandler = (event) => {
        setInput({ ...input, answer: event.target.value });
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

        const nextPreg = pregs[nextQuestion];
        setInput({ ...input, preg: nextPreg });
    };

    const handleRadioChange = (event) => {
        setAnswers({ ...answer_pregs, [selectedRadio]: input.answer });
        setSelectedRadio(event.target.value);

        const nextAnswer = answer_pregs[event.target.value] || "";
        setInput({ ...input, answer: nextAnswer });

        const nextPreg = pregs[event.target.value];
        setInput({ ...input, preg: nextPreg });
    };

    const EnterAnswer = (e) => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea enviar este proveedor?",
            text: "Una vez enviado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true,
        }).then((respuesta) => {
            if (respuesta) {
                swal("Proveedor registrado correctamente!", { icon: "success", timer: "3000" });
            } else {
                swal({ text: "Proveedor no registrado.", icon: "error" });
            }
        });
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
            setInput({ ...input, userEntity: res.data });
        });
        TestService.getCantTestUser().then((res) => {
            setInput({ ...input, questEntity: res.data });
        });
        console.log(input.userEntity);
        console.log(input.questEntity);
        let i = 0;
        input.questEntity.map((questEntity) => (
            pregs[i] = questEntity,
            i += 1));
        const intervalId = startTimer();
        return () => {
            clearInterval(intervalId);
        };
    }, []);

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
                        <img class="image-preg" src={input.preg.image}></img>
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
                        {input.userEntity.map((userEntity) => (
                            <div key={userEntity.id}>
                                <label class="nombre_usuario">{userEntity.name}</label>
                            </div>
                        ))}

                        <button class="finalizar">Finalizar</button>
                        <button class="cancelar">Cancelar</button>
                        <label class="timer">{formatTime(timer)}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestComponents;
