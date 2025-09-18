// Array para almacenar los nombres
const listaAmigos = [];

// Elementos del DOM
const inputNombre = document.getElementById('amigo');
const listaElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');
const botonAgregar = document.getElementById('btnAgregar');
const botonSortear = document.getElementById('btnSortear');
const botonReiniciar = document.getElementById('btnReiniciar');

// Función para agregar amigo
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    listaAmigos.push(nombre);
    inputNombre.value = '';
    actualizarLista();

    botonReiniciar.disabled = false; // Activar botón reiniciar
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaElement.innerHTML = '';
    listaAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    resultadoElement.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    listaAmigos.length = 0;
    listaElement.innerHTML = '';
    resultadoElement.innerHTML = '';
    inputNombre.value = '';
    botonReiniciar.disabled = true;
}

// Eventos
botonAgregar.addEventListener('click', agregarAmigo);
botonSortear.addEventListener('click', sortearAmigo);
botonReiniciar.addEventListener('click', reiniciarJuego);


inputNombre.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});