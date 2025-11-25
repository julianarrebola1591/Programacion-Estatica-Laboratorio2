const figuras = ["🍎","🍌","🍇","🍒","⭐","🔥","💧","⚡"];

// Duplicamos y mezclamos
let cartas = [...figuras, ...figuras].sort(() => Math.random() - 0.5);

const tablero = document.getElementById("tablero");

let carta1 = null;
let carta2 = null;
let bloqueo = false; // evita clics durante la comparación


// Crear las cartas en el tablero
cartas.forEach((figura, index) => {
    const div = document.createElement("div");
    div.classList.add("carta");
    div.dataset.figura = figura;
    div.dataset.id = index;
    div.innerText = figura;

    div.addEventListener("click", mostrarCarta);

    tablero.appendChild(div);
});

function mostrarCarta() {
    if (bloqueo) return;
    if (this.classList.contains("revelada") || this.classList.contains("acertada")) return;

    this.classList.add("revelada");

    if (!carta1) {
        carta1 = this;
    } else {
        carta2 = this;
        comparar();
    }
}

function comparar() {
    bloqueo = true;

    if (carta1.dataset.figura === carta2.dataset.figura) {
        // Coinciden
        carta1.classList.add("acertada");
        carta2.classList.add("acertada");
    } else {
        // No coinciden → ocultar después de 1 segundo
        setTimeout(() => {
            carta1.classList.remove("revelada");
            carta2.classList.remove("revelada");
        }, 1000);
    }

    // Reiniciar selección
    setTimeout(() => {
        carta1 = null;
        carta2 = null;
        bloqueo = false;
        revisarVictoria();
    }, 1000);
}

function revisarVictoria() {
    const acertadas = document.querySelectorAll(".acertada").length;
    if (acertadas === cartas.length) {
        setTimeout(() => {
            document.getElementById("ganador").classList.remove("oculto");
            document.getElementById("ganador").classList.add("flex");
        }, 300);
    }
}

document.getElementById("btnReiniciar").addEventListener("click", () => {
    location.reload();
});