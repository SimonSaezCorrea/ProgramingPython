import React from "react";
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
    const navigate = useNavigate();
    const handleClickMain = () => {
        navigate("/home");
    }
    const handleClickTest = () => {
        navigate("/test");
    }
    return (
        <div>
            <div class="sidebar">
                <div class="border">
                    <div class="titulo" onClick={handleClickMain}>PP</div>
                </div>
                <div class="border">
                    <div class="contenedores-test">
                        <div class="test">
                            <label> Test </label>
                            <button onClick={handleClickTest}>Fácil</button>
                            <button onClick={handleClickTest}>Intermedio</button>
                            <button onClick={handleClickTest}>Difícil</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
