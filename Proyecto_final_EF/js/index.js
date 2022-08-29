//declaracion de variables
let tarjetaMostrada = 0;
let tarjeta1 = 0;
let tarjeta2 = 0;
let primerResultado = 0;
let segundoResultado = 0;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let cronometro = 35;
let cronometroInicial = cronometro;
let tiempoRestante = 0;
let winAudio = new Audio ("./sound/win.wav");
let perderAudio = new Audio("./sound/perder.wav");
let selectAudio = new Audio ("./sound/selec.wav");
let errorAudio = new Audio ("./sound/error.wav");
let bienAudio = new Audio ("./sound/bien.wav");



//conectando con el HTML
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTemporizador = document.getElementById("tRestante");
let reseteo = document.getElementById("reseteo");
let nombre = localStorage.getItem('nombre');
let titulo = document.getElementById("titulo");

//si utilizo la funcion traer me crea el arreglo pero no me permite desordenarlo sino que me los muestra en orden
/*let numero =[];
const traer = async() => {
    const rsp = await fetch("./json/main.json");
    const solucion = await rsp.json();

    solucion.forEach(carta => {
        numero.push(carta)        
    });    
}
traer();*/

//configuro el localstore para que me muerte el nombre del jugador
if (localStorage.length == "" || localStorage.length == null || localStorage.length == undefined){
swal("Ingresa tu nombre aqui:", {
    content: "input",
  })
  .then((value) => {
    localStorage.setItem('nombre', value);
    swal(`Bienvenido ${value} comenzemos a jugar`);
  });
} else {
    swal(`Bienvenido ${nombre} comenzamos a jugar`);
    titulo.innerHTML = `${nombre} disfrutemos jugando`
}


//mezclar los numeros a mostrar
let numero = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numero = numero.sort(() => {return Math.random()-0.5});

//temporizador
function contador(){
    tiempoRestante = setInterval(() => {
        cronometro--;
        mostrarTemporizador.innerHTML = `Tiempo restante:<br>${cronometro} segundos`;
        if (cronometro == 0){            
            clearInterval(tiempoRestante);
            finDelJuego();
            swal ( "Oops" ,  "Se acabo el tiempo, vuelve a intentarlo" ,  "error" );
        }        
    }, 1000);    
}

//tiempo terminado
function finDelJuego(){
    for (let i=0; i<16; i++){
        let bloquearTarjetas = document.getElementById(i);
        bloquearTarjetas.innerHTML = `<img src="./img/${numero[i]}.png" alt="">`;
        bloquearTarjetas.disabled = true;
        perderAudio.play();
    }
}

//volver a voltear todos los botones y comenzar a jugar de nuevo
function comenzarJuego(){
    
    //volver a poner los botones en blanco para un nuevo juego
    for (let i=0; i<16; i++){
        let voltearTarjetas = document.getElementById(i);
        voltearTarjetas.innerHTML = "";
        voltearTarjetas.disabled = false;
        
    }
    //vuelta a valores iniciales del los contadores
    if (aciertos!=0 && movimientos!=0 && cronometro!=35){
        aciertos = 0;
        mostrarAciertos.innerHTML = `Aciertos:<br>${aciertos}`;
        movimientos = 0;
        mostrarMovimientos.innerHTML = `Movimientos:<br>${movimientos}`;
        tiempoRestante = 0;
        temporizador = false;
        cronometro = 35;
        mostrarTemporizador.innerHTML = `Tiempo restante:<br>${cronometro} segundos`;
        numero = numero.sort(() => {return Math.random()-0.5});      
    }     
}

//click del boton juego nuevo para comenzar a ejecutar el juego de nuevo
reseteo.addEventListener("click", () => comenzarJuego());


//funcion para mostrar las tarjetas generadas y comenzar cuenta atras y contador de aciertos
function mostrar(id){
    if (temporizador == false){
        contador();
        temporizador = true;
    }

    tarjetaMostrada++;
    if (tarjetaMostrada == 1){
        
        //mostrar primer numero
        selectAudio.play();
        tarjeta1 = document.getElementById(id);
        primerResultado = numero[id];
        tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;
        
        //desabilitar el boton ya elejido
        tarjeta1.disabled = true;

    } else if (tarjetaMostrada == 2){
        
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numero[id];
        tarjeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;
        
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
            bienAudio.play()
            if (aciertos == 8) {
                winAudio.play();
                clearInterval(tiempoRestante);
                swal("Buen trabajo!", `${nombre} te demoraste ${cronometroInicial - cronometro} segundos en resolverlo`, "success");                
            }
        }else
            //mostrar momentaneamente y ocultarlos de nuevo si no son iguales            
            setTimeout(() => {
                tarjeta1.innerHTML = "";
                tarjeta2.innerHTML = "";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetaMostrada = 0;
                errorAudio.play()
            }, 700);            
    }
}

