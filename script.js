// Seleccionamos el párrafo
const parrafo = document.querySelector("#parrafo");

// Modificamos el contenido del párrafo
parrafo.textContent = "El contenido ha sido modificado automáticamente.";

// Creamos un nuevo párrafo y lo añadimos al cuerpo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo añadido automáticamente.";
document.body.appendChild(nuevoParrafo);

// Eliminamos el párrafo original
parrafo.remove();
