import React from "react";
import { useNavigate } from 'react-router-dom';
import LateralComponent from "./Headers/LateralComponent";
import "../styles/sidebar.css";
import "../styles/main.css";

function MainComponents() {
    const navigate = useNavigate();
    const handleClickTestSucefull = () => {
        navigate("/test-sucefull");
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
                            <div class="text">
                                <input type="text" readOnly></input>
                                <input type="text" readOnly></input>
                            </div>
                        </div>
                    </div>
                    <div class="izq-aba">
                            <div className="input-container">
                                <label>Fácil:</label>
                                <input class="text" type="text" readOnly/>
                                <button onClick={handleClickTestSucefull}>Ver</button>
                            </div>
                            <div className="input-container">
                                <label>Intermedio:</label>
                                <input class="text" type="text" readOnly/>
                                <button onClick={handleClickTestSucefull}>Ver</button>
                            </div>
                            <div className="input-container">
                                <label>Difícil:</label>
                                <input class="text" type="text" readOnly/>
                                <button onClick={handleClickTestSucefull}>Ver</button>
                            </div>
                    </div>
                </div>
                <div class="der">
                    <div class="bloque-imagen"></div>
                </div>
            </div>
        </div>
    );
}

export default MainComponents;
