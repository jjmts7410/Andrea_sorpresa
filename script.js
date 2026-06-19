/* ==========================
   TELEGRAM
========================== */

const TOKEN =
"8874726500:AAEdZUIso8i5FxuGHvB3c69HqG81Tv-ufRg";

const CHAT_ID =
"8764670174";

function enviarTelegram(hora, cita) {

  const mensaje =
`❤️ Andrea abrió la sorpresa

⏰ Hora elegida: ${hora}

🌹 Cita:
${cita}

📅 Fecha:
20/06/2006`;

  fetch(
    https://api.telegram.org/bot${TOKEN}/sendMessage,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: mensaje
      })
    }
  );
}

/* ==========================
   BOTONES
========================== */

const btnEntrar =
document.getElementById("btnEntrar");

const btnHora =
document.getElementById("btnHora");

const btnGirar =
document.getElementById("btnGirar");

let horaSeleccionada = "7 PM";

/* ==========================
   CAMBIAR PANTALLAS
========================== */

function cambiar(a, b) {

  document
    .getElementById(a)
    .classList.remove("activa");

  document
    .getElementById(b)
    .classList.add("activa");
}

/* ==========================
   ENTRAR
========================== */

btnEntrar.onclick = () => {

  const nombre =
  document
    .getElementById("nombre")
    .value
    .trim()
    .toLowerCase();

  if (nombre === "andrea") {

    cambiar(
      "pantalla1",
      "pantalla2"
    );

  } else {

    alert(
      "Este mensaje no es para ti ❤️"
    );

  }

};

/* ==========================
   ELEGIR HORA
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
   CITA ESPECIAL
========================== */

btnGirar.onclick = () => {

  const actividad =
  document.getElementById(
    "actividad"
  );

  actividad.innerHTML =
  "🎡 Preparando una sorpresa para ti...";

  setTimeout(() => {

    const cita =
    "🌹 Parque + Helado + Sorpresa de cumpleaños ❤️";

    actividad.innerHTML =
    "🌹 Cita especial: Iremos al parque, comeremos un helado y terminaremos la noche con una sorpresa de cumpleaños preparada solo para ti, Andrea ❤️";

    enviarTelegram(
      horaSeleccionada,
      cita
    );

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

    }, 4000);

  }, 2500);

};

/* ==========================
   CORAZONES
========================== */

function corazones() {

  setInterval(() => {

    const c =
    document.createElement(
      "div"
    );

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
    20 +
    "px";

    document.body
      .appendChild(c);

    setTimeout(() => {
      c.remove();
    }, 4000);

  }, 300);

}

/* ==========================
   EFECTO MATRIX
========================== */

const canvas =
document.getElementById(
  "matrix"
);

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letras =
"01ANDREA❤️";

const tamaño =
16;

const columnas =
canvas.width /
tamaño;

const gotas =
Array(
  Math.floor(columnas)
).fill(1);

function dibujar() {

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

  for (
    let i = 0;
    i < gotas.length;
    i++
  ) {

    const texto =
    letras[
      Math.floor(
        Math.random() *
        letras.length
      )
    ];

    ctx.fillText(
      texto,
      i * tamaño,
      gotas[i] * tamaño
    );

    if (
      gotas[i] *
      tamaño >
      canvas.height &&
      Math.random() >
      0.975
    ) {
      gotas[i] = 0;
    }

    gotas[i]++;

  }

}

setInterval(
  dibujar,
  40
);
