//ejercicio 1

/*let nombre = "Homero";
let apellido = "Simpson";
let edad = 34;

console.log(nombre);
console.log(apellido);
console.log(edad);*/

//---------------------------------------
//ejercicio 2

/*const ciudad1 ="Berazategui";
const ciudad2 ="Quilmes";
const ciudad3 ="Capital Federal";
const ciudad4 ="Pilar";
const ciudad5 ="Tigre";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);*/

//---------------------------------------
//ejercicio 3

/*let codigo = "B47U89RE243"
let nombre = "Bart Simpson";
let direccion = "742 Evergreen";
let ciudad = "Springfield, USA";
let nacimiento = "02-11-70";

let carnet = `Springfield\nDriver License\n${codigo}\nNombre: ${nombre}\nDireccion: ${direccion}\nCiudad: ${ciudad}\nFecha de nacimiento:\n\t${nacimiento}`

console.log(carnet);*/

//---------------------------------------
//ejercicio 4

/*alert("A continuacion ingresa 5 nombres por favor")
let nombres ="";

for (let i=0 ; i<5 ; i++) {
    nombres += prompt("Ingrea un nombre?")+"\n"
}

alert(nombres);*/

//-----------------------------------------
//ejercicion 5

/*let precio = Number(prompt("Ingrese un precio"));
let desc20 = precio - (precio * 0.2);
let desc30 = precio - (precio * 0.3);

alert(`Precio de lista: ${precio}\nDescuento del 20%: ${desc20}\nDescuento del 30%: ${desc30}`)*/

//==========================================

//ejercicio 1

/*let solNombre = prompt("Ingrese un nombre? (Ricardo)")
let nombre = "Ricardo"

if (solNombre === nombre) {
    alert("Fui yo");
} else {
    alert("Yo no fui");
};*/

//-------------------------------------------
//ejercicio 2

/*let entrada = prompt("Ingresa una letra? (Y/y)");

if (entrada == "y" || entrada == "Y"){
    alert("Correcto");
}else {
    alert(`${entrada} es Incorrecta`);
};*/

//---------------------------------------------
//ejercicio 3

/*let entrada = (prompt("elige el numero de un personaje:\n1- Homero\n2- Marge\n3- Bart\n4- Lisa\nEsc para finalizar"));

while (entrada != "Esc" ) {
    switch (entrada) {
        case "1":
            alert("Elejiste a Homero");
            break;
        case "2":
            alert("Elejiste a Marge");
            break;
        case "3":
            alert("Elejiste a Bart");
            break;
        case "4":
            alert("Elejiste a Lisa");
            break;
        default:
            alert("No elejiste a nadie");
            break;

    }
    entrada = (prompt("elige el numero de un personaje:\n1- Homero\n2- Marge\n3- Bart\n4- Lisa"));
};*/

//--------------------------------------------------
//ejercicio 4

/*let entrada = parseInt(prompt("Ingrese su presupuesto:"));

if (entrada<=1000){
    alert("Presupuesto Bajo.");
}else if (entrada>1000 && entrada<=3000) {
    alert("Presupuesto Medio.");
}else if (entrada>3000) {
    alert("Presupuesto Alto.");
};*/

//------------------------------------------------------
//ejercicio 5

/*let item1 = prompt("Ingrese un producto de Almacen");
let item2 = prompt("Ingrese un producto de Almacen");
let item3 = prompt("Ingrese un producto de Almacen");
let item4 = prompt("Ingrese un producto de Almacen");

if ((item1!="") && (item2!="") && (item3!="") && (item4!="")) {
    let alacena = `1) ${item1}\n2) ${item2}\n3) ${item3}\n4) ${item4}`;
    alert(alacena);
} else {
    alert("Error: Es necesario cargar todos los productos");
};*/

//===================================================

//ejercicio 1

/*let numero = parseInt(prompt("Ingresa un numero:"));
let texto = prompt("Ingresa un texto:");
let alerta = ""

for (let i=0; i<numero; i++) {
    alerta += texto + `\n`;
}
alert(alerta);*/

//-------------------------------------------------
//ejercicio 2

/*let numero = parseInt(prompt("Ingrese un numero:"));
let lados ="";

for (let i=0; i<numero; i++){
    if (i===4){
        break;
    }
     lados += `lado numero ${i}\n`;
     
}
alert(lados);*/

//--------------------------------------------------
//ejercicio 3

/*let alumnos = '';
for (let i = 0; i < 10; i++) {
    alumnos += prompt("Ingresar los alumnos Presentes")+"\n";
}
alert(alumnos);*/

//-------------------------------------------------
//ejercicio 4

/*let nombre = prompt("Ingrea nombres al azar: (`Voldemort` termina el ciclo)");
let ingresados =""
while (nombre != "Voldemort") {
    ingresados += `${nombre}\n`
    nombre = prompt("Ingrea nombres al azar: (`Voldemort` termina el ciclo)");
}
alert(ingresados);*/

//--------------------------------------------------
//ejercicio 5

