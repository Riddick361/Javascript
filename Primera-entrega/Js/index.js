const suma = (a, b) => a + b;
const interes = x => x * 0.40;
const mensualidad = (a, b) => a / b;

let prestamoSolicitado = parseInt(prompt("ingrese monto a solicitar"));
let cuotas = parseInt(prompt("ingrese cantidad de cuotas"));

let devolucionTotal = suma(prestamoSolicitado, interes(prestamoSolicitado));
let porMes = mensualidad(devolucionTotal, cuotas);

alert(`EL total a devolver es ${devolucionTotal} en ${cuotas} cuotas de ${porMes} por mes`)