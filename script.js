const song = document.getElementById("song");

const screenStart = document.getElementById("screenStart");
const screenQuestion = document.getElementById("screenQuestion");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const result = document.getElementById("result");
const moodImg = document.getElementById("moodImg");

const noImages = [
  "img/no1.jpg",
  "img/no2.jpg",
  "img/no3.jpg",
  "img/no4.jpg",
  "img/no5.jpg"
];

const yesImage = "img/si.jpg";

let noCount = 0;
let noScale = 1;

// Iniciar música y pasar a la pregunta
startBtn.addEventListener("click", async () => {
  song.volume = 0.6;
  try { await song.play(); } catch(e) {}

  screenStart.classList.add("hidden");
  screenQuestion.classList.remove("hidden");
});

// Botón SÍ
yesBtn.addEventListener("click", () => {
  moodImg.src = yesImage;
  result.classList.remove("hidden");
  noBtn.style.display = "none";
  yesBtn.textContent = "SÍ 💖";
  confettiBurst();
});

// Botón NO (máx 5)
noBtn.addEventListener("click", () => {
  if (noCount >= 5) return;

  noCount++;
  moodImg.src = noImages[noCount - 1];

  noScale *= 0.78;
  noBtn.style.transform = `scale(${noScale})`;

  if (noCount === 5) {
    noBtn.style.opacity = "0";
    setTimeout(() => noBtn.style.display = "none", 120);
  }
});

// Confeti
function confettiBurst(){
  for (let i=0; i<26; i++){
    const s = document.createElement("span");
    s.textContent = ["💖","💘","✨","😍","💞"][Math.floor(Math.random()*5)];
    s.style.position = "fixed";
    s.style.left = (window.innerWidth/2 + Math.random()*120-60) + "px";
    s.style.top  = (window.innerHeight/2 + Math.random()*60-30) + "px";
    s.style.fontSize = (16 + Math.random()*18) + "px";
    s.style.transition = "transform 1.2s ease, opacity 1.2s ease";
    s.style.zIndex = 9999;
    document.body.appendChild(s);

    requestAnimationFrame(() => {
      s.style.transform = `translate(${Math.random()*300-150}px, ${Math.random()*-400}px) rotate(${Math.random()*360}deg)`;
      s.style.opacity = 0;
    });

    setTimeout(()=>s.remove(), 1300);
  }
}
