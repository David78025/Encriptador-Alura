const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnEscuchar = document.querySelector("#escuchar");

const tarjeta1 = document.querySelector(".num1");

function validarMensaje (){
    // bprrar errores previos
    let erroresPrevios = tarjeta1.querySelectorAll(".error");
    for (let err of erroresPrevios){
        console.log(err);
        tarjeta1.removeChild(err);
    }      
    var mensaje = inputMensaje.value;
    let letrasValidas = "abvdefghijklmnñoprstuvwxyz"
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement ("p");
            p.setAttribute("class", "error");
            p.textContent = 'El texto contiene un caracter no valido';
            mensajeError.appendChild(p);
        }
    }
    tarjeta1.appendChild(mensajeError);
    if (mensajeError.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar (){
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");

    inputResultado.value = mensajeEncriptado;
}

function desencriptar (){
    if (!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");

    inputResultado.value = mensaje;
}

function copiar (){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

function escuchar (){
    var mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance;
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnEscuchar.onclick = escuchar;