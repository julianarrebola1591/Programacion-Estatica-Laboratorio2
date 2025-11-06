function limpearTelefono() {
  document.querySelector("#telefono").value = "";
}

document.querySelector("#telefono").addEventListener("click", limpearTelefono);

const formulario = document.getElementById("formulario");
const cuerpoTabla = document.getElementById("cuerpo-tabla");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#nombre");
});
