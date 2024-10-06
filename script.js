// Seleccionamos el párrafo y el botón
const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#boton");

// Función que se ejecuta al hacer clic en el botón
boton.addEventListener("click", () => {
    // Modificamos el contenido del párrafo
    parrafo.textContent = "El contenido ha sido modificado.";

    // Creamos un nuevo párrafo y lo añadimos al cuerpo
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo.";
    document.body.appendChild(nuevoParrafo);

    // Eliminamos el párrafo original
    parrafo.remove();
});
