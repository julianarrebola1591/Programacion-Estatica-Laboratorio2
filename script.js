//Mostrar botón para volver arriba
  let btnArriba = document.getElementById("btnArriba");

  window.addEventListener("scroll", () => {
  console.log(window.scrollY);
        if (window.scrollY > 200) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

// Esperar que el DOM se cargue
document.addEventListener("DOMContentLoaded", (event) => {
  // Botón de leer más del CV
  const cv = document.getElementById("cv");
  const btnLeerMas = document.getElementById("btnLeerMas");

  btnLeerMas.addEventListener("click", () => {
      cv.classList.toggle("overflow");

      if (cv.classList.contains("overflow")) {
          btnLeerMas.textContent = "Leer menos";
      } else {
          btnLeerMas.textContent = "Leer más";
      }
  });
});


function limpearTelefono() {
  document.querySelector("#telefono").value = "";
}

document.querySelector("#telefono").addEventListener("click", limpearTelefono);

const formulario = document.getElementById("formulario");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const listaTr = document.querySelectorAll("#cuerpo-tabla tr");
const headTabla = document.querySelector("#head-tabla");

formulario.addEventListener('focusout', actualizarTabla);

function actualizarTabla() {
  cuerpoTabla.innerHTML = "";

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
    'input[name="subscripciones[]"]:checked'
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

  const elementos = formulario.querySelectorAll("input, select, textarea");
  elementos.forEach((elemento, index) => {
    valor = lista_campos[index]?.value || "";
    const campo = document.querySelector(`label[for="${lista_campos[index]?.id}"]`);
    const nuevaFila = document.createElement("tr");
    if (!valor) return;

    if (lista_campos[index]?.name === "subscripciones[]") {
      valor = Array.from(
        document.querySelectorAll('input[name="subscripciones[]"]:checked')
      ).map((checkbox) => checkbox.value).join(", ");
      const nuevaCelda = document.createElement("td");
      nuevaCelda.textContent = "Subscipciones";
      nuevaFila.appendChild(nuevaCelda);
    } else {
      const nuevaCelda = document.createElement("td");
      nuevaCelda.textContent = campo.textContent;
      nuevaFila.appendChild(nuevaCelda);
    }

    const nuevaCelda2 = document.createElement("td");
    nuevaCelda2.textContent = valor;
    nuevaFila.appendChild(nuevaCelda2);
    
    cuerpoTabla.appendChild(nuevaFila);
  });
};

