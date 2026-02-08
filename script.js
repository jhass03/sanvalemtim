const song = document.getElementById("song");

const screenStart = document.getElementById("screenStart");
const screenDedication = document.getElementById("screenDedication");
const screenQuestion = document.getElementById("screenQuestion");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const result = document.getElementById("result");

const moodImg = document.getElementById("moodImg");

// Tus imágenes .jpg (tal como las subiste)
const noImages = [
  "img/no1.jpg",
  "img/no2.jpg",
  "img/no3.jpg",
  "img/no4.jpg",
];

let noCount = 0;
let noScale = 1;

function show(fromEl, toEl){
  fromEl.classList.add("hidden");
  toEl.classList.remove("hidden");
}

// Pantalla 1 -> 2 (inicia canción)
startBtn.addEventListener("click", async () => {
  song.volume = 0.6;
  try { await song.play(); } catch (e) {}
  show(screenStart, screenDedication);
});

// Pantalla 2 -> 3
nextBtn.addEventListener("click", () => {
  show(screenDedication, screenQuestion);
});

// Botón Sí
yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  noBtn.disabled = true;
  noBtn.style.opacity = 0.6;
  yesBtn.textContent = "SÍ 💖 (ya eres)";
  confettiBurst();
});

// Botón No: se hace chiquito + cambia imagen
noBtn.addEventListener("click", () => {
  noCount++;

  // Cambiar imagen (llega hasta la última y se queda ahí)
  const idx = Math.min(noCount, noImages.length - 1);
  moodImg.src = noImages[idx];

  // Hacer el botón "No" más pequeño
  noScale *= 0.82;
  noScale = Math.max(noScale, 0.35);
  noBtn.style.transform = `scale(${noScale})`;

  // Hacer el "Sí" más grande
  const yesScale = 1 + Math.min(noCount * 0.08, 0.6);
  yesBtn.style.transform = `scale(${yesScale})`;

  // Textos graciosos
  if (noCount === 1) noBtn.textContent = "¿Segura? 🙈";
  if (noCount === 2) noBtn.textContent = "Piénsalo 😳";
  if (noCount === 3) noBtn.textContent = "Última 😭";
  if (noCount >= 4) noBtn.textContent = "ya no puedo 😵";
});

// Confeti simple con emojis
function confettiBurst(){
  const n = 26;
  for (let i=0; i<n; i++){
    const s = document.createElement("span");
    s.textContent = ["💖","💘","✨","😍","💞"][Math.floor(Math.random()*5)];
    s.style.position = "fixed";
    s.style.left = (window.innerWidth/2 + (Math.random()*140-70)) + "px";
    s.style.top  = (window.innerHeight/2 + (Math.random()*60-30)) + "px";
    s.style.fontSize = (16 + Math.random()*18) + "px";
    s.style.transition = "transform 1.2s ease, opacity 1.2s ease";
    s.style.zIndex = 9999;
    document.body.appendChild(s);

    requestAnimationFrame(() => {
      s.style.transform = `translate(${Math.random()*400-200}px, ${Math.random()*-500-120}px) rotate(${Math.random()*360}deg)`;
      s.style.opacity = 0;
    });

    setTimeout(()=>s.remove(), 1300);
  }
}
