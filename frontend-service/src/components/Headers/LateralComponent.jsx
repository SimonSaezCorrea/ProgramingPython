import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import UserService from "../../services/UserService";


function HeaderComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const rutaActual = location.pathname;

    const compararSucceful = () => {
        let rutaDividida = rutaActual.split("/");

        let rutaJunta = "/" + rutaDividida[1] + "/" + rutaDividida[2];

        if ("/test/sucefull" === rutaJunta) {
            return true;
        }
        return false
    };
    const compararCancelar = () => {
        let rutaDividida = rutaActual.split("/");

        let rutaJunta = "/" + rutaDividida[1];

        if ("/test" === rutaJunta) {
            return true;
        }
        return false
    };

    const esTest = (direccion) => {
        let rutaDividida = rutaActual.split("/");
        let rutaJunta = "/" + rutaDividida[1];
        if ("/test" === rutaJunta) {
            return true;
        }
        return false
    }

    const mostrarAlertaSucceful = (direccion) => {
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
                navigate(direccion);
            }
        });
    };
    const mostrarAlertaCancelar = (direccion) => {
        Swal.fire({
            title: "¿Deseas cancelar el test?",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(direccion);
                if(esTest(direccion)){
                    handleReloadPage();
                }
            }
        });
    };

    const handleReloadPage = () => {
        window.location.reload();
    };

    const handleClickMain = () => {
        if (compararSucceful()) {
            mostrarAlertaSucceful("/home");
        } else if (compararCancelar()) {
            mostrarAlertaCancelar("/home");
        } else {
            navigate("/home");
        }
    };
    const handleClickTestFacil = () => {
        if (compararSucceful()) {
            mostrarAlertaSucceful("/test/1");
        } else if (compararCancelar()) {
            mostrarAlertaCancelar("/test/1");
        } else {
            navigate("/test/1");
            handleReloadPage();
        }
    };
    const handleClickTestIntermedio = () => {
        if (compararSucceful()) {
            mostrarAlertaSucceful("/test/2");
        } else if (compararCancelar()) {
            mostrarAlertaCancelar("/test/2");
        } else {
            navigate("/test/2");
            handleReloadPage();
        }
    };
    const handleClickTestDificil = () => {
        if (compararSucceful()) {
            mostrarAlertaSucceful("/test/3");
        } else if (compararCancelar()) {
            mostrarAlertaCancelar("/test/3");
        } else {
            navigate("/test/3");
            handleReloadPage();
        }
    };
    const handleClickCreateTest = () => {
        if (compararSucceful()) {
            mostrarAlertaSucceful("/create/test");
        } else if (compararCancelar()) {
            mostrarAlertaCancelar("/create/test");
        } else {
            navigate("/create/test");
        }
    };
    const handleClickLogout = () => {
        if(UserService.logout()){
            navigate("/");
        }
    };
    return (
        <div>
            <div class="sidebar">
                <div class="border">
                    <label class="titulo" onClick={handleClickMain}>
                        PP
                    </label>
                </div>
                <div class="border">
                    <div class="contenedores-test">
                        <div class="test">
                            <label> Test </label>
                            <button onClick={handleClickTestFacil}>Fácil</button>
                            <button onClick={handleClickTestIntermedio}>Intermedio</button>
                            <button onClick={handleClickTestDificil}>Difícil</button>
                        </div>
                    </div>
                </div>
                <div class="border">
                    <div class="test">
                        <label></label>
                        <button onClick={handleClickCreateTest}>Crear Test</button>
                    </div>
                </div>

                <div class="border-down">
                    <div class="test">
                        <label></label>
                        <button onClick={handleClickLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
