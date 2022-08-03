//declaracion de variables
let tarjetaMostrada = 0;
let tarjeta1;
let tarjeta2;
let primerResultado;
let segundoResultado;
let movimientos = 0;
let aciertos = 0
let temporizador = false;
let cronometro = 30;
let cronometroInicial = cronometro
let tiempoRestante;

//conectando con el HTML
let mostrarMovimientos = document.getElementById("movimientos")
let mostrarAciertos = document.getElementById("aciertos")
let mostrarTemporizador = document.getElementById("tRestante")

//mezclar los numeros a mostrar
let numero = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numero = numero.sort(() => {return Math.random()-0.5});
console.log(numero);

//temporizador
function contador(){
    tiempoRestante = setInterval(() => {
        cronometro--;
        mostrarTemporizador.innerHTML = `Tiempo restante:<br>${cronometro} segundos`;
        if (cronometro == 0){
            clearInterval(tiempoRestante);
            finDelJuego()
            swal("lo siento se termino el tiempo")
        }
    }, 1000);
}

//tiempo terminado
function finDelJuego(){
    for (let i=0; i<16; i++){
        let bloquearTarjetas = document.getElementById(i);
        bloquearTarjetas.innerHTML = numero[i];
        bloquearTarjetas.disabled = true;

    }
}

//funcion para mostrar las tarjetas generadas
function mostrar(id){
    if (temporizador == false){
        contador();
        temporizador = true;
    }

    tarjetaMostrada++;
    if (tarjetaMostrada == 1){
        
        //mostrar primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numero[id];
        tarjeta1.innerHTML = primerResultado;
        
        //desabilitar el boton ya elejido
        tarjeta1.disabled = true;
    } else if (tarjetaMostrada == 2){
        
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numero[id];
        tarjeta2.innerHTML = segundoResultado;
        
        //desabilitar segundo boton
        tarjeta2.disabled = true;
        
        //incrementa los movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos:<br>${movimientos}`;

        //comparando igualdad
        if (primerResultado == segundoResultado) {

            //volver a 0 el tarjetasmostradas
            tarjetaMostrada = 0;

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos:<br>${aciertos}`;

            if (aciertos == 8) {
                clearInterval(tiempoRestante);
                swal("Buen trabajo!", `Te demoraste ${cronometroInicial - cronometro} segndos en resolverlo`, "success");
            }
        }else
            //mostrar momentaneamente y ocultarlos de nuevo si no son iguales
            setTimeout(() => {
                tarjeta1.innerHTML = "";
                tarjeta2.innerHTML = "";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetaMostrada = 0;
            }, 700);
    }
}