const btnEntrar =
document.getElementById("btnEntrar");

const btnHora =
document.getElementById("btnHora");

const btnGirar =
document.getElementById("btnGirar");

let horaSeleccionada = "7 PM";

function cambiar(a,b){

  document
    .getElementById(a)
    .classList.remove("activa");

  document
    .getElementById(b)
    .classList.add("activa");

}

/* ==========================
   PANTALLA 1
========================== */

btnEntrar.onclick = () => {

  const nombre =
  document
    .getElementById("nombre")
    .value
    .trim()
    .toLowerCase();

  if(nombre === "andrea"){

    cambiar(
      "pantalla1",
      "pantalla2"
    );

  }else{

    alert(
      "Este mensaje no es para ti ❤️"
    );

  }

};

/* ==========================
   PANTALLA 2
========================== */

btnHora.onclick = () => {

  horaSeleccionada =
  document.querySelector(
    'input[name="hora"]:checked'
  ).value;

  cambiar(
    "pantalla2",
    "pantalla3"
  );

};

/* ==========================
   PANTALLA 3
========================== */

btnGirar.onclick = () => {

  const actividad =
  document.getElementById(
    "actividad"
  );

  actividad.innerHTML =
  "🎡 Preparando una sorpresa...";

  setTimeout(() => {

    actividad.innerHTML =
    "🌳 Parque + 🍦 Helado + 🎁 Sorpresa ❤️";

    document.getElementById(
      "horaFinal"
    ).innerHTML =
    horaSeleccionada;

    setTimeout(() => {

      cambiar(
        "pantalla3",
        "pantalla4"
      );

      corazones();

    },1500);

  },1500);

};

/* ==========================
   CORAZONES
========================== */

function corazones(){

  let contador = 0;

  const intervalo =
  setInterval(() => {

    const c =
    document.createElement("div");

    c.className =
    "corazon";

    c.innerHTML =
    "❤️";

    c.style.left =
      Math.random() *
      window.innerWidth +
      "px";

    c.style.bottom =
      "-20px";

    c.style.fontSize =
      Math.random() * 30 +
      20 + "px";

    document.body
      .appendChild(c);

    setTimeout(() => {

      c.remove();

    },4000);

    contador++;

    if(contador >= 30){

      clearInterval(
        intervalo
      );

    }

  },250);

}

/* ==========================
   MATRIX
========================== */

const canvas =
document.getElementById(
  "matrix"
);

const ctx =
canvas.getContext(
  "2d"
);

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letras =
"01ANDREA❤️";

const tamaño = 16;

const columnas =
Math.floor(
  canvas.width /
  tamaño
);

const gotas =
Array(columnas).fill(1);

function dibujar(){

  ctx.fillStyle =
  "rgba(0,0,0,.08)";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle =
  "#ff0044";

  ctx.font =
  tamaño +
  "px monospace";

  for(
    let i=0;
    i<gotas.length;
    i++
  ){

    const texto =
    letras[
      Math.floor(
        Math.random() *
        letras.length
      )
    ];

    ctx.fillText(
      texto,
      i*tamaño,
      gotas[i]*tamaño
    );

    if(
      gotas[i]*tamaño >
      canvas.height &&
      Math.random() > .975
    ){

      gotas[i]=0;

    }

    gotas[i]++;

  }

}

setInterval(
  dibujar,
  60
);

window.onresize = () => {

  canvas.width =
  window.innerWidth;

  canvas.height =
  window.innerHeight;

};
