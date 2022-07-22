let formulario = document.getElementById("formulario");

let clientes;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    // muesta por consola los datos ingresados
    console.log(nombre, edad);
});