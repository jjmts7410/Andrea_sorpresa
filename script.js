/* ==========================
   TELEGRAM
========================== */
alert("JS cargado");
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

  const url =
https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(mensaje)};

  // Enviar sin bloquear la página
  fetch(url).catch(() => {});
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

  const pantallaA =
  document.getElementById(a);

  const pantallaB =
  document.getElementById(b);

  if (pantallaA)
    pantallaA.classList.remove("activa");

  if (pantallaB)
    pantallaB.classList.add("activa");
}

/* ==========================
   ENTRAR
========================== */

if (btnEntrar) {

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

}

/* ==========================
   HORA
========================== */

if (btnHora) {

  btnHora.onclick = () => {

    const seleccion =
    document.querySelector(
      'input[name="hora"]:checked'
    );

    if (seleccion) {
      horaSeleccionada =
      seleccion.value;
    }

    cambiar(
      "pantalla2",
      "pantalla3"
    );

  };

}

/* ==========================
   CITA ESPECIAL
========================== */

if (btnGirar) {

  btnGirar.onclick = () => {

    const actividad =
    document.getElementById(
      "actividad"
    );

    if (!actividad) return;

    actividad.innerHTML =
    "🎡 Preparando una sorpresa...";

    setTimeout(() => {

      const cita =
      "🌳 Parque + 🍦 Helado + 🎁 Sorpresa de cumpleaños ❤️";

      actividad.innerHTML =
      "🌹 Cita especial: Parque + Helado + Sorpresa de cumpleaños ❤️";

      enviarTelegram(
        horaSeleccionada,
        cita
      );

      const horaFinal =
      document.getElementById(
        "horaFinal"
      );

      if (horaFinal) {
        horaFinal.innerHTML =
        horaSeleccionada;
      }

      setTimeout(() => {

        cambiar(
          "pantalla3",
          "pantalla4"
        );

        corazones();

      }, 2000);

    }, 1500);

  };

}

/* ==========================
   CORAZONES
========================== */

function corazones() {

  let contador = 0;

  const intervalo =
  setInterval(() => {

    const c =
    document.createElement(
      "div"
    );

    c.className =
    "corazon";

    c.innerHTML =
    "❤️";

    c.style.position =
    "fixed";

    c.style.left =
    Math.random() *
    window.innerWidth +
    "px";

    c.style.bottom =
    "-20px";

    c.style.fontSize =
    "30px";

    document.body
      .appendChild(c);

    setTimeout(() => {
      c.remove();
    }, 4000);

    contador++;

    if (contador >= 30) {
      clearInterval(
        intervalo
      );
    }

  }, 300);

}

/* ==========================
   MATRIX
========================== */

const canvas =
document.getElementById(
  "matrix"
);

if (canvas) {

  const ctx =
  canvas.getContext("2d");

  canvas.width =
  window.innerWidth;

  canvas.height =
  window.innerHeight;

  const letras =
  "01ANDREA❤️";

  const tamaño =
  18;

  const columnas =
  Math.floor(
    canvas.width /
    tamaño
  );

  const gotas =
  Array(columnas)
  .fill(1);

  function dibujar() {

    ctx.fillStyle =
    "rgba(0,0,0,0.15)";

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
        gotas[i] *
        tamaño
      );

      if (
        gotas[i] *
        tamaño >
        canvas.height &&
        Math.random() >
        0.98
      ) {
        gotas[i] = 0;
      }

      gotas[i]++;
    }

  }

  setInterval(
    dibujar,
    80
  );

}
