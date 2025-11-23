function limpearTelefono() {
  document.querySelector("#telefono").value = "";
}

document.querySelector("#telefono").addEventListener("click", limpearTelefono);

const formulario = document.getElementById("formulario");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const listaTr = document.querySelectorAll("#cuerpo-tabla tr");
const headTabla = document.querySelector("#head-tabla");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#email");
  const telefono = document.querySelector("#telefono");
  const edad = document.querySelector("#edad");
  const direccion = document.querySelector("#direccion");
  const provincia = document.querySelector("#provincia");
  const codPostal = document.querySelector("#cod-postal");
  const metodo = document.querySelector('input[name="metodo"]:checked');

  const subcripcion = document.querySelector(
    'input[name="subcripcion"]:checked'
  );

  const lista_campos = [
    nombre,
    apellido,
    email,
    telefono,
    edad,
    direccion,
    provincia,
    codPostal,
    metodo,
    subcripcion,
  ];

  console.log("Cantidad de filas:", listaTr.length);
  console.log("Cantidad de campos:", lista_campos.length);

  let contador = 0;

  const nuevoTh = document.createElement("th");
  nuevoTh.textContent = "Valor";
  console.log(nuevoTh.textContent);
  headTabla.appendChild(nuevoTh);

  for (let campo of lista_campos) {
    console.log(" Campo:", campo.value);
    const nuevoTd = document.createElement("td");
    nuevoTd.textContent = campo.value;
    console.log("Iterando fila:", contador);
    listaTr[contador].appendChild(nuevoTd);
    contador = contador + 1;
  }
});


let btn = document.getElementById("btnArriba");

window.onscroll = function () {
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

