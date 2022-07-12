let array = [];
let inicio = prompt("Ingresa un dato al arreglo:");

while (inicio!="Esc") {
    array.push(inicio);
    inicio = prompt("Ingresa un dato al arreglo: (ingresa Esc para romper el ciclo)");
}

alert(array)
   
