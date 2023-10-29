//Selecciona numero al azar para adivinar (incluye 1 y 100)
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//Se ejecuta cuando se presione Chequear
function chequearResultado (){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor ingresa un número entre 1 y 100'
        mensaje.style.color = 'black';
        return
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Felicitaciones!! Haz adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto! El número es mayor al ingresado';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Mas bajo! El número es menor al ingresado';
        mensaje.style.color = 'red';
    }
}