const song = document.getElementById("song");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const screenStart = document.getElementById("screenStart");
const screenDedication = document.getElementById("screenDedication");
const screenQuestion = document.getElementById("screenQuestion");
const result = document.getElementById("result");
const moodImg = document.getElementById("moodImg");

const noImages = [
  "img/no1.gif",
  "img/no2.gif",
  "img/no3.gif",
  "img/no4.gif"
];

let noCount = 0;

startBtn.onclick = () => {
  song.play();
  screenStart.classList.add("hidden");
  screenDedication.classList.remove("hidden");
};

nextBtn.onclick = () => {
  screenDedication.classList.add("hidden");
  screenQuestion.classList.remove("hidden");
};

yesBtn.onclick = () => {
  result.classList.remove("hidden");
};

noBtn.onclick = () => {
  noCount++;
  moodImg.src = noImages[Math.min(noCount, noImages.length - 1)];
  noBtn.style.transform = `scale(${1 - noCount * 0.2})`;
};
