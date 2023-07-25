import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/imageDisplay.css"

const ImageDisplay = ({ imageName }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        // Realiza la solicitud GET al backend para obtener la imagen
        axios
            .get("http://localhost:8080/quest/images/" + imageName, { responseType: "arraybuffer" })
            .then((response) => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), "")
                );
                setImage(`data:image/jpeg;base64,${base64}`);
            })
            .catch((error) => {
                console.error("Error al obtener la imagen:", error);
            });
    }, [imageName]);

    return (
        <div class="blockWhite">
            {image ? (
                <img src={image} alt="Imagen" class="image_quest"/>
            ) : (
                <p>Imagen no encontrada</p>
            )}
        </div>
    );
};

export default ImageDisplay;
