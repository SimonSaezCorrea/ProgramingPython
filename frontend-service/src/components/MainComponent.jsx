import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LateralComponent from "./Headers/LateralComponent";
import "../styles/sidebar.css";
import "../styles/main.css";
import "../styles/test.css";
import UserService from "../services/UserService";
import persona from "../images/avatar.png";
import Swal from "sweetalert2";

function MainComponents() {
    const initialState = {

    }
    const [userEntity, setUserEntity] = useState([]);
    const [input, setInput] = useState(initialState);
    useEffect(() => {
        UserService.getConnect().then((res) => {
            setUserEntity(res.data);
        });
    }, []);

    const navigate = useNavigate();
    const handleClickTestSucefull = () => {
        Swal.fire({
            title: "En Camino",
            text: "Estamos trabajando para crear la función",
            icon: "info",
            confirmButtonText: "Ok"
        });
        //navigate("/test/sucefull");
    };

    if(userEntity[0] === undefined){
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <LateralComponent></LateralComponent>
            <div class="contenedor-datos">
                <div class="izq">
                    <div class="izq-arr">
                        <div class="izq-arr-izq">
                            <div class="dato">
                                <label>Nombre:</label>
                                <label>Correo:</label>
                                <label>Cantidad de Test: </label>
                            </div>
                        </div>
                        <div class="izq-arr-der">
                            {userEntity.map((userEntity) => (
                                <div class="text" key={userEntity.id}>
                                    <input type="text" readOnly value={userEntity.name}></input>
                                    <input type="text" readOnly value={userEntity.correo}></input>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="izq-aba">
                        {userEntity.map((userEntity) => (
                            <div class="text" key={userEntity.id}>
                                <div className="input-container">
                                    <label>Fácil:</label>
                                    <input class="text" type="text" readOnly value={userEntity.test_easy} />
                                    <button onClick={handleClickTestSucefull}>Ver</button>
                                </div>
                                <div className="input-container">
                                    <label>Intermedio:</label>
                                    <input class="text" type="text" readOnly value={userEntity.test_medium} />
                                    <button onClick={handleClickTestSucefull}>Ver</button>
                                </div>
                                <div className="input-container">
                                    <label>Difícil:</label>
                                    <input class="text" type="text" readOnly value={userEntity.test_hard} />
                                    <button onClick={handleClickTestSucefull}>Ver</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="der">
                    <img class="imagen-persona-perfil" src={persona} alt="Ejemplo" />
                </div>
            </div>
        </div>
    );
}

export default MainComponents;
