class Productos {
    constructor(nombre,descripcion,precio,cantidad) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = parseInt(precio);
    this.cantidad = cantidad;
    }
}

let ingresados = [];

for (let index = 0; index < 3; index++) {
    let Producto =  new Productos(prompt("Ingresa el nombre del producto"), 
                             prompt("Ingresa una breve descripcion del producto"), 
                             prompt("Ingresa el precio del producto"),
                             prompt("ingresa la cantidad del producto"));

    ingresados.push(Producto);
}
console.log(ingresados);

let deseaBuscar = prompt("Desea buscar algun producto ingresado? (no/si)")

if ((deseaBuscar === "no") || (deseaBuscar === "No") || (deseaBuscar === "NO")) {
    alert("Nos vemos pronto")
}else {
  for (let index = 0; index < ingresados.length; index++) {
    let busqueda = ingresados.find((el) => el.nombre === prompt("Ingrese el nombre del producto"))
    
    if(busqueda != undefined){
        alert(`El Producto: ${busqueda.nombre}\nDescripcion: ${busqueda.descripcion}\nPrecio: ${busqueda.precio}\nCantidad: ${busqueda.cantidad}`);
    }else{
        alert('No existe un producto con ese nombre');}}  
}



