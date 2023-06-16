document.querySelector("button.button-menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});

window.addEventListener('load', function () {
  setTimeout(function () {
    shootConfetti();
  }, 3000); // Disparar confeti después de 2 segundos (2000 milisegundos)
});

function shootConfetti() {
  var duration = 5000; // Duración del efecto de confeti (5000 milisegundos)

  confetti({
    particleCount: 500, // Número de confetis
    spread: 160, // Distribución horizontal
    origin: { y: 0.6 }, // Origen vertical (desde arriba)
    colors: ['#ff69b4', '#dc2760', '#f8b43b', '#00a8e8'], // Colores de los confetis
    disableForReducedMotion: true // Desactivar para usuarios con preferencias de reducción de movimiento
  });

  setTimeout(function () {
    stopConfetti();
  }, duration);
}

function stopConfetti() {
  confetti.reset();
}

document.addEventListener('mousemove', function (event) {
  createHeart(event.clientX, event.clientY);
});

document.addEventListener('click', function (event) {
  createHeart(event.clientX, event.clientY);
});

function createHeart(x, y) {
  const heart = document.createElement('i');
  heart.classList.add('fas', 'fa-heart', 'heart');
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  document.body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 2000);
}
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    createBalloons();
  }, 2000);
});

function createBalloons() {
  const balloonContainer = document.getElementById('balloon-container');

  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${getRandomPosition()}%`;
    balloon.style.animationDelay = `${getRandomDelay()}s`;

    balloon.addEventListener('animationend', function () {
      balloonContainer.removeChild(balloon);
    });

    balloonContainer.appendChild(balloon);
  }
}

function getRandomPosition() {
  return Math.random() * 80 + 10;
}

function getRandomDelay() {
  return Math.random() * 5;
}

// Función para mostrar u ocultar el footer al hacer clic en el botón
function toggleFooter() {
  var footer = document.querySelector(".movie-ending");
  if (footer.style.display === "none" || footer.style.display === "") {
      footer.style.display = "block";
  } else {
      footer.style.display = "none";
  }
}
const frases = [
  "Eres la persona más especial en mi vida.",
  "Tu amor ilumina mi mundo.",
  "Siempre estás en mis pensamientos y en mi corazón.",
  "Tu sonrisa me alegra el día.",
  "Gracias por ser mi apoyo incondicional.",
  "No puedo imaginar mi vida sin ti.",
  "Eres mi razón de ser y mi inspiración.",
  "Cada día a tu lado es un regalo.",
  "Te amo más de lo que las palabras pueden expresar.",
  "Tus abrazos son mi refugio seguro.",
  "Eres la melodía que alegra mi corazón.",
  "Contigo cada momento es mágico y especial.",
  "Tu presencia llena de alegría mi existencia.",
  "Cada vez que te miro me hace sentir como si tuviera mariposas en el estómago.",
  "Eres mi confidente y compañero de vida.",
  "El amor que siento por ti crece cada día más.",
  "Eres mi sueño hecho realidad.",
  "Gracias por hacerme sentir amado en todo momento.",
  "Eres la respuesta a todas mis oraciones.",
  "No hay distancia que pueda separarnos, porque siempre estás en mi corazón.",
  "Tus palabras dulces son como miel para mi alma.",
  "Eres la razón por la que sonrío sin razón aparente.",
  "Tu sonrisa es el mejor regalo que puedo recibir.",
  "Eres mi inspiración para ser una mejor persona cada día.",
  "Cada instante a tu lado es un tesoro que atesoro en mi corazón.",
  "Eres el amor de mi vida y siempre lo serás.",
  "Eres el complemento perfecto en mi vida.",
  "Tus gestos de cariño me llenan de felicidad absoluta.",
  "Eres mi refugio en los días difíciles.",
  "Eres la pieza que faltaba en mi rompecabezas.",
  "Cuando te vi, tuve miedo de mirarte, cuando te mire, tuve miedo de quererte, y ahora que te quiero, tengo miedo de perderte. "

];

const boton = document.getElementById('mostrar-frases');
const fraseContainer = document.getElementById('frase-container');
const fraseActual = document.getElementById('frase-actual');

let indiceFrase = 0;

boton.addEventListener('click', mostrarSiguienteFrase);

function mostrarSiguienteFrase() {
  if (indiceFrase < frases.length) {
    fraseActual.textContent = frases[indiceFrase];
    indiceFrase++;
  } else {
    indiceFrase = 0;
    fraseActual.textContent = '';
  }
}
