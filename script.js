
/*
  CONFIGURACIÓN DE CANCIONES
  Guarda tus archivos MP3 en una carpeta llamada "musica"
  junto a index.html, style.css y script.js.
*/


const songs = [
  {
    title: "Bailando Bachata",
    artist: "Chayanne",
    src: "musica/M1.mp3"
  },
  {
    title: "Humanos a Marte",
    artist: "Chayanne",
    src: "musica/M2.mp3"
  },
  {
    title: "Madre Tierra",
    artist: "Chayanne",
    src: "musica/M3.mp3"
  },
  {
    title: "Dejaría Todo",
    artist: "Chayanne",
    src: "musica/M4.mp3"
  },
  {
    title: "Amor Eterno",
    artist: "Juan Gabriel",
    src: "musica/M5.mp3"
  },
  {
    title: "Un Siglo Sin Ti ",
    artist: "Chayanne",
    src: "musica/M6.mp3"
  },
  {
    title: "COLOR ESPERANZA",
    artist: "JAVI PALMA",
    src: "musica/M7.mp3"
  }
];

// ======================================
// NAVEGACIÓN ENTRE PANTALLAS
// ======================================

const screens = [...document.querySelectorAll(".screen[data-screen]")];
const navLinks = [...document.querySelectorAll(".nav-link[data-go]")];
const progressBar = document.getElementById("progressBar");
const screenCounter = document.getElementById("screenCounter");

let currentScreen = 0;

function showScreen(index) {
  const target = Math.max(
    0,
    Math.min(screens.length - 1, Number(index))
  );

  currentScreen = target;

  screens.forEach((screen, i) => {
    screen.classList.toggle("active", i === target);
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      Number(link.dataset.go) === target
    );
  });

  if (progressBar) {
    progressBar.style.width =
      `${((target + 1) / screens.length) * 100}%`;
  }

  if (screenCounter) {
    screenCounter.textContent =
      `Pantalla ${target + 1} de ${screens.length}`;
  }

  document.getElementById("mainNav")?.classList.remove("open");

  document.getElementById("menuButton")
    ?.setAttribute("aria-expanded", "false");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(currentScreen + 1);
  });
});

document.querySelectorAll("[data-prev]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(currentScreen - 1);
  });
});

// Menú para celular
document.getElementById("menuButton")?.addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const button = document.getElementById("menuButton");

  const opened = nav.classList.toggle("open");

  button.setAttribute("aria-expanded", String(opened));
});

// Volver al principio
document.getElementById("restartButton")?.addEventListener("click", () => {
  showScreen(0);
});

// Sorpresa final
document.getElementById("finalSurprise")?.addEventListener("click", () => {
  const box = document.getElementById("surpriseBox");

  if (!box) return;

  box.hidden = !box.hidden;

  document.getElementById("finalSurprise").textContent =
    box.hidden
      ? "Abrir una última sorpresa ♡"
      : "Cerrar la sorpresa ♡";
});

// ======================================
// CARTAS ESPECIALES
// ======================================

const letters = [
  {
    title: "Gracias por existir",
    body: [
      "Mamá, hoy quiero recordarte lo importante que eres y lo agradecida que estoy por tenerte en mi vida. A veces las palabras se quedan pequeñas para explicar todo el cariño que siento, pero aun así quiero intentarlo.",
      "Gracias por tu presencia, por tus enseñanzas y por tantas cosas que quizá haces sin darte cuenta de cuánto significan. Deseo que hoy te sientas querida, celebrada y acompañada."
    ],
    sign: "Con todo mi cariño, siempre. ♡"
  },
  {
    title: "Mi ejemplo de vida",
    body: [
      "Admiro la fuerza con la que enfrentas los días y la manera en que sigues adelante aun cuando las cosas no son sencillas. De ti he aprendido que el amor también se demuestra en los detalles y en estar presente.",
      "Ojalá puedas reconocer en ti todo lo bueno que los demás vemos. No tienes que poder con todo para ser increíble."
    ],
    sign: "Gracias por enseñarme tanto. ♡"
  },
  {
    title: "Mi lugar seguro",
    body: [
      "Hay personas que hacen que el mundo se sienta un poquito más amable, y tú eres una de ellas. Tu cariño forma parte de esos recuerdos que acompañan incluso cuando estamos lejos.",
      "Deseo que también tengas un lugar donde descansar, hablar con confianza y sentirte cuidada. Mereces recibir la misma ternura que tantas veces das."
    ],
    sign: "Con mucho amor. ♡"
  },
  {
    title: "Mírate con mis ojos",
    body: [
      "Si pudieras verte por un momento desde los ojos de quienes te queremos, quizá notarías todo lo valiosa que eres. Eres mucho más que las tareas que haces o las responsabilidades que llevas.",
      "Eres una persona con sueños, sentimientos, una historia propia y una luz que merece ser celebrada. Nunca olvides que tu bienestar también importa."
    ],
    sign: "Nunca lo olvides. ♡"
  },
  {
    title: "Para tus días difíciles",
    body: [
      "Cuando tengas un día pesado, deseo que recuerdes que no necesitas resolverlo todo de una vez. Puedes detenerte, respirar, pedir ayuda y darte tiempo.",
      "Ojalá siempre encuentres palabras amables, compañía sincera y motivos para confiar en que después de los días difíciles también llegan momentos tranquilos."
    ],
    sign: "Te mereces paz y cariño. ♡"
  },
  {
    title: "Tus enseñanzas",
    body: [
      "Muchas de las cosas que aprendemos de alguien se quedan en nosotros sin hacer ruido: una frase, una costumbre, una forma de cuidar o una lección que entendemos con el tiempo.",
      "Gracias por cada enseñanza y por todo lo que has aportado a mi vida. Espero que el cariño que has sembrado regrese a ti de muchas maneras."
    ],
    sign: "Gracias por tanto. ♡"
  },
  {
    title: "Tus sueños también",
    body: [
      "Hoy deseo que este nuevo año no solo esté lleno de responsabilidades, sino también de oportunidades para hacer aquello que te emociona. Que haya tiempo para tus planes, tus gustos y tus pequeñas aventuras.",
      "Nunca es tarde para ilusionarte con algo nuevo. Ojalá la vida te sorprenda con caminos bonitos y momentos que te hagan sentir orgullosa de tu historia."
    ],
    sign: "Que florezca todo lo bonito. ♡"
  },
  {
    title: "Pequeños tesoros",
    body: [
      "A veces los momentos más valiosos parecen sencillos: una conversación sin prisa, una comida compartida, una risa inesperada o una tarde tranquila. Esos detalles también hacen una vida hermosa.",
      "Deseo que este año te regale muchos de esos pequeños tesoros y que puedas disfrutarlos sin tener que esperar una ocasión especial."
    ],
    sign: "Por muchos momentos bonitos. ♡"
  },
  {
    title: "Palabras que guardo",
    body: [
      "Hay agradecimientos que no siempre decimos en voz alta, aunque los llevemos dentro. Hoy quiero abrir un pequeño espacio para decirte que tu presencia importa y que muchas cosas bonitas de mi historia también están relacionadas contigo.",
      "Gracias por formar parte de mi vida. Ojalá estas palabras te acompañen y te recuerden que eres muy querida."
    ],
    sign: "Con cariño sincero. ♡"
  },
  {
    title: "Mi deseo para ti",
    body: [
      "Mi deseo para ti es sencillo y enorme a la vez: que tengas salud, tranquilidad, amor sincero y motivos para sonreír. Que las preocupaciones pesen menos y que los días buenos sean abundantes.",
      "Que nunca te falte la oportunidad de empezar de nuevo, aprender algo bonito y sentirte orgullosa de la persona que eres. Feliz cumpleaños, mamá."
    ],
    sign: "Te quiero muchísimo. ♡"
  }
];

const letterButtons = [
  ...document.querySelectorAll("[data-letter]")
];

function openLetter(index) {
  const letter = letters[index];

  if (!letter) return;

  letterButtons.forEach((button, i) => {
    button.classList.toggle("active", i === index);
  });

  const title = document.getElementById("letterTitle");
  const body = document.getElementById("letterBody");
  const signature = document.getElementById("letterSignature");

  if (title) title.textContent = letter.title;

  if (body) {
    body.replaceChildren(
      ...letter.body.map((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        return p;
      })
    );
  }

  if (signature) signature.textContent = letter.sign;
}

letterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openLetter(Number(button.dataset.letter));
  });
});

openLetter(0);

// ======================================
// REPRODUCTOR DE MÚSICA
// ======================================

const audio = document.getElementById("audioPlayer");
const playPause = document.getElementById("playPause");
const previousTrack = document.getElementById("previousTrack");
const nextTrack = document.getElementById("nextTrack");

const playlist = document.getElementById("playlist");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");

const seekBar = document.getElementById("seekBar");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const volumeBar = document.getElementById("volumeBar");
const volumeValue = document.getElementById("volumeValue");

const trackCount = document.getElementById("trackCount");
const albumArt = document.getElementById("albumArt");

let activeSong = 0;

function timeLabel(value) {
  if (!Number.isFinite(value)) return "0:00";

  const mins = Math.floor(value / 60);
  const secs = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");

  return `${mins}:${secs}`;
}

// Crear la lista de reproducción
function renderPlaylist() {
  if (!playlist) return;

  playlist.replaceChildren();

  if (trackCount) {
    trackCount.textContent =
      `${songs.length} ${
        songs.length === 1 ? "canción" : "canciones"
      }`;
  }

  if (!songs.length) {
    const message = document.createElement("p");

    message.className = "empty-playlist";
    message.textContent =
      "Todavía no hay canciones. Agrega tus archivos MP3 en la lista songs de script.js.";

    playlist.append(message);

    if (trackTitle) {
      trackTitle.textContent = "Añade tu primera canción";
    }

    if (trackArtist) {
      trackArtist.textContent = "Música para este momento";
    }

    return;
  }

  songs.forEach((song, index) => {
    const button = document.createElement("button");

    button.className =
      `playlist-item${index === activeSong ? " active" : ""}`;

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const details = document.createElement("span");
    details.textContent =
      `${song.title} — ${song.artist || "Artista desconocido"}`;

    button.append(number, details);

    button.addEventListener("click", () => {
      loadSong(index, true);
    });

    playlist.append(button);
  });
}

// Cargar una canción
function loadSong(index, autoplay = false) {
  if (!songs.length || !audio) return;

  activeSong = (index + songs.length) % songs.length;

  const song = songs[activeSong];

  audio.src = song.src;

  if (trackTitle) trackTitle.textContent = song.title;

  if (trackArtist) {
    trackArtist.textContent =
      song.artist || "Una canción para mamá ♡";
  }

  if (seekBar) seekBar.value = 0;
  if (currentTime) currentTime.textContent = "0:00";
  if (duration) duration.textContent = "0:00";

  renderPlaylist();

  if (autoplay) {
    audio.play()
      .then(updatePlayButton)
      .catch(updatePlayButton);
  } else {
    updatePlayButton();
  }
}

// Actualizar botón de reproducción
function updatePlayButton() {
  if (!audio || !playPause) return;

  const playing = !audio.paused;

  playPause.textContent = playing ? "Ⅱ" : "▶";

  playPause.setAttribute(
    "aria-label",
    playing ? "Pausar" : "Reproducir"
  );

  albumArt?.classList.toggle("playing", playing);
}

// Reproducir o pausar
playPause?.addEventListener("click", () => {
  if (!audio) return;

  if (!songs.length) {
    if (trackTitle) {
      trackTitle.textContent =
        "Agrega tus canciones en script.js";
    }

    if (trackArtist) {
      trackArtist.textContent =
        "Guarda tus MP3 en la carpeta musica";
    }

    return;
  }

  if (audio.paused) {
    if (!audio.src) loadSong(activeSong);

    audio.play()
      .then(updatePlayButton)
      .catch(() => {
        updatePlayButton();
        console.warn(
          "No se pudo reproducir la canción. Comprueba la ruta del MP3."
        );
      });
  } else {
    audio.pause();
  }
});

// Canción anterior
previousTrack?.addEventListener("click", () => {
  loadSong(activeSong - 1, true);
});

// Canción siguiente
nextTrack?.addEventListener("click", () => {
  loadSong(activeSong + 1, true);
});

// Eventos del audio
audio?.addEventListener("play", updatePlayButton);
audio?.addEventListener("pause", updatePlayButton);

audio?.addEventListener("ended", () => {
  loadSong(activeSong + 1, true);
});

audio?.addEventListener("loadedmetadata", () => {
  if (duration) {
    duration.textContent = timeLabel(audio.duration);
  }
});

audio?.addEventListener("timeupdate", () => {
  if (currentTime) {
    currentTime.textContent = timeLabel(audio.currentTime);
  }

  if (
    seekBar &&
    Number.isFinite(audio.duration) &&
    audio.duration > 0
  ) {
    seekBar.value = String(
      (audio.currentTime / audio.duration) * 100
    );
  }
});

// Barra para avanzar o retroceder en la canción
seekBar?.addEventListener("input", () => {
  if (
    audio &&
    Number.isFinite(audio.duration) &&
    audio.duration > 0
  ) {
    audio.currentTime =
      (Number(seekBar.value) / 100) * audio.duration;
  }
});

// Control del volumen
volumeBar?.addEventListener("input", () => {
  if (!audio) return;

  audio.volume = Number(volumeBar.value);

  if (volumeValue) {
    volumeValue.textContent =
      `${Math.round(audio.volume * 100)}%`;
  }
});

// Volumen inicial
if (audio) {
  audio.volume = Number(volumeBar?.value || 0.75);
}

// ======================================
// INICIAR PÁGINA
// ======================================

renderPlaylist();
showScreen(0);
