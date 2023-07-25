import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LateralComponent from "./Headers/LateralComponent";
import Swal from "sweetalert2";
import "../styles/createQuest.css";
import DifficultyService from "../services/DifficultyService";
import UserService from "../services/UserService";
import QuestService from "../services/QuestService";

function CreateQuestComponent() {
    const initialState = {
        title: "",
        content: "",
        image: "",
        id_difficulty: "",
        answer: "",
    };

    const [user, setUser] = useState([]);
    const [difficultyEntity, setDifficulty] = useState([]);
    const navigate = useNavigate();
    const [input, setInput] = useState(initialState);
    useEffect(() => {
        UserService.getConnect().then((res) => {
            console.log("user -> ", res.data);
            setUser(res.data);
            setInput({ ...input, user: res.data });
        });
        DifficultyService.getDifficulty().then((res) => {
            console.log("difficulty -> ", res.data);
            setDifficulty(res.data);
            setInput({ ...input, difficultyEntity: res.data });
        });
    }, []);

    const changeTitleHandler = (event) => {
        setInput({ ...input, title: event.target.value });
    };

    const changeImageHandler = (event) => {
        setInput({ ...input, image: event.target.value });
    };

    const changeIdDifficultyHandler = (event) => {
        setInput({ ...input, id_difficulty: event.target.value });
    };

    const changeAnswerHandler = (event) => {
        setInput({ ...input, answer: event.target.value });
    };

    const navigateHome = () => {
        navigate("/home");
    };

    const ingresarQuest = (event) => {
        Swal.fire({
            title: "¿Desea registrar pregunta?",
            text: "No podra cambiar en caso de errores",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(input.title);
                let imageDiv = input.image.split("\\");
                let selectImage = imageDiv[imageDiv.length - 1];
                console.log(selectImage);
                console.log(input.id_difficulty);
                console.log(user[0].id, user[0].name);
                console.log(input.answer);
                let newQuest = {
                    title: input.title,
                    content: "",
                    image: selectImage,
                    id_difficulty: input.id_difficulty,
                    id_user: user[0].id,
                    answer: input.answer,
                };
                console.log(newQuest);
                QuestService.createQuest(newQuest);
                let timerInterval;
                Swal.fire({
                    title: "Enviado",
                    timer: 2000,
                    icon: "success",
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(100)
                      },
                    })
                navigateHome();
            }
        });
    };
    return (
        <div>
            <LateralComponent></LateralComponent>
            <div class="container-create">
                <div class="container">
                    <div class="titulo-crear">
                        <label class="label-create">Crear Pregunta</label>
                    </div>

                    <div class="separador">
                        <label class="label-create">Titulo: </label>
                        <input
                            controlId="title"
                            name="title"
                            type="text"
                            class="estilo-text"
                            value={input.title}
                            onChange={changeTitleHandler}
                            required
                        ></input>
                    </div>
                    <div class="separador">
                        <div class="div_file">
                            <label class="label-create">Imagen: </label>
                            <input
                                controlId="image"
                                name="image"
                                type="file"
                                class="estilo-file"
                                value={input.image}
                                onChange={changeImageHandler}
                                required
                            ></input>
                        </div>
                    </div>
                    <div class="separador">
                        <label class="label-create">Dificultad: </label>
                        <select
                            controlId="id_difficulty"
                            name="id_difficulty"
                            class="estilo-selected"
                            value={input.id_difficulty}
                            onChange={changeIdDifficultyHandler}
                            required
                        >
                            <option class="estilo-option" selected>
                                Seleccione Dificultad
                            </option>
                            {difficultyEntity.map((difficultyEntity) => (
                                <option class="estilo-option" value={difficultyEntity.score}>
                                    {difficultyEntity.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div class="separador-v2">
                        <label class="label-create">Respuesta: </label>
                        <input
                            controlId="answer"
                            name="answer"
                            type="text"
                            class="estilo-text"
                            value={input.answer}
                            onChange={changeAnswerHandler}
                            required
                        ></input>
                    </div>
                    <button class="btn-confirmar" onClick={ingresarQuest}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateQuestComponent;
