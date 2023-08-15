import Swal from "sweetalert2";
import "../styles/login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

function LoginComponents() {
    const initialState = {
        user: "",
        pass: "",
    };
    const navigate = useNavigate();
    const [input, setInput] = useState(initialState);

    const changeUserHandler = (event) => {
        setInput({ ...input, user: event.target.value });
    };
    const changePassHandler = (event) => {
        setInput({ ...input, pass: event.target.value });
    };

    const comprobar = async (test) => {
        if(input.user==""){
            Swal.fire({
                title: "ERROR",
                text: "No colocó su usuario",
                icon: "warning",
                confirmButtonText: "Confirmar",
                confirmButtonColor: "rgb(68, 194, 68)",
            });
        }
        else if(input.pass==""){
            Swal.fire({
                title: "ERROR",
                text: "No colocó su contraseña",
                icon: "warning",
                confirmButtonText: "Confirmar",
                confirmButtonColor: "rgb(68, 194, 68)",
            });
        }
        else{
            let verificador;
            try {
                const res = await UserService.getConfirmationUser(input.user, input.pass);
                verificador = res.data;
                console.log(verificador);
                if (verificador) {
                    navigateMain();
                } else {
                Swal.fire({
                    title: "ERROR",
                    text: "Inicio de sesión fallido. Usuario o contraseña erroneo.",
                    icon: "warning",
                    confirmButtonText: "Confirmar",
                    confirmButtonColor: "rgb(68, 194, 68)",
                });
            }
        } catch (error) {
            console.error("Error al obtener confirmación del usuario:", error);
            // Manejar el error, mostrar un mensaje, etc.
        }
            
        }
    };

    const navigateMain = (test) => {
        console.log(test);
        navigate(`/home`);
    };
    const navigateRegister = (test) => {
        console.log(test);
        navigate(`/create_account`);
    };
    return (
        <div>
            <div class="back-login">
                <div class="center-login">
                    <label class="label-login">Iniciar Sesión</label>
                    <input class="input-login" type="text" placeholder="Usuario" value={input.user} onChange={changeUserHandler}></input>
                    <input class="input-login" type="password" placeholder="Contraseña" value={input.pass} onChange={changePassHandler}></input>
                    <button class="button-login" onClick={comprobar}>Iniciar Sesión</button>
                    <button class="button-login" onClick={navigateRegister}>Crear Cuenta</button>
                </div>
            </div>
        </div>
    );
}

export default LoginComponents;
