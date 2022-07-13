let contenedor = document.getElementById("contenedor");
let productos = [
    {id: 1,nombre: "Buzo", precio: 1500},
    {id: 2,nombre: "Pantalon", precio: 2100},
    {id: 3,nombre: "Bufanda", precio: 700},
    {id: 4,nombre: "Guantes", precio: 800},
]

for (item of productos) {
    let li = document.createElement("li")
    li.innerHTML = `<h2>ID ${item.id}</h2>
                    <strong>Nombre: ${item.nombre}
                    <p>Precio: ${item.precio}`;
    contenedor.append(li)
}