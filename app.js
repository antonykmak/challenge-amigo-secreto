// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = buscarID('amigo').value;
    if (input != '') {
        amigos.push(input);
        mostrarNombres();
        limpiarCaja();
    } else {
        alert('Por favor, inserte un nombre.');
    }
    return;
}

function limpiarCaja(){
    buscarID('amigo').value = '';
}

function mostrarNombres() {
    let amigo = buscarID('listaAmigos');
    let tamañoDeLista = amigos.length;
    amigo.innerHTML = '';
    for (let i = 0; i < tamañoDeLista; i++) {
        amigo.innerHTML +='<li>'+amigos[i]+'</li>';
    }
    return;
}

function sortearAmigo() {   
    if (amigos.length>0) {
        let resultado = buscarID('resultado');
        let indice = Math.floor(Math.random()*amigos.length-1)+1;
        buscarID('listaAmigos').innerHTML = '';
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indice]}`;
    } else {
        alert('No ha ingresado ningún nombre');
    }
}

function buscarID(id) {
    return document.getElementById(id);
}