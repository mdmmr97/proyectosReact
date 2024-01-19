import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

const MouseApp = () => {

    const posts = useMousePosition();

    // Función encargada de recuperar la posición del ratón y actualizar
    // el estado del componente

    return (
        <div>
            <h1>Mouse App</h1>
            <pre>{JSON.stringify(posts.position, null, 2)}</pre>
        </div>

    );
}
export default MouseApp;