function limpearTelefono() {
  document.querySelector("#telefono").value = "";
}

document.querySelector("#telefono").addEventListener("click", limpearTelefono);

const formulario = document.getElementById("formulario");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const listaTr = document.querySelectorAll("#cuerpo-tabla tr");

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
  const metodo = document.querySelector("#correo-electronico");
  const subcripcion = document.querySelector("#subcripcion");

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

  for (let i = 0; i < listaTr.length; i++) {
    console.log("Iterando fila:", i);
    for (let campo of lista_campos) {
      console.log("  Campo:", campo.value);
      const nuevoTd = document.createElement("td");
      nuevoTd.textContent = campo.value;
      listaTr[i].appendChild(nuevoTd);
    }
  }
});
