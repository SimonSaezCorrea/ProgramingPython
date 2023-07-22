import React from "react";
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
    const navigate = useNavigate();
    const handleClickMain = () => {
        navigate("/home");
    }
    const handleClickTestFacil = () => {
        navigate("/test");
    }
    const handleClickTestIntermedio = () => {
        navigate("/test");
    }
    const handleClickTestDificil = () => {
        navigate("/test");
    }
    return (
        <div>
            <div class="sidebar">
                <div class="border">
                    <label class="titulo" onClick={handleClickMain}>PP</label>
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
            </div>
        </div>
    );
}

export default HeaderComponent;
