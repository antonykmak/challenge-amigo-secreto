// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo').value;
    if (input != '') {
        amigos.push(input);
        console.log(amigos.length);
        mostrarNombres();
        limpiarCaja();
    } else {
        alert('Por favor, inserte un nombre.');
    }
    return;
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function mostrarNombres() {
    let amigo = document.getElementById('listaAmigos');
    let tamañoDeLista = amigos.length;
    console.log(tamañoDeLista);
    amigo.innerHTML = '';
    for (let i = 0; i < tamañoDeLista; i++) {
        amigo.innerHTML +='<li>'+amigos[i]+'</li>';
    }
    return;
}

function sortearAmigo() {   
}