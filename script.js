// Set tanggal target (contoh: 12 Mei 2025 pukul 21:00 WITA)
const targetDate = new Date("2025-05-13T16:00:00+08:00").getTime();

// Elemen yang akan dipakai
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const infoText = document.getElementById("infoText");
const countdown = document.querySelector(".countdown");
const greeting = document.querySelector(".greeting");

// Update countdown setiap detik
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    showGreeting();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerText = String(days).padStart(2, '0');
  hoursEl.innerText = String(hours).padStart(2, '0');
  minutesEl.innerText = String(minutes).padStart(2, '0');
  secondsEl.innerText = String(seconds).padStart(2, '0');
}

function showGreeting() {
  countdown.style.display = "none";
  infoText.style.display = "none";
  greeting.style.display = "block";

  // Play music romantis
  const audio = new Audio("romantis.mp3"); // ganti dengan nama file kamu
  audio.play();
}

// Event tombol selengkapnya
document.getElementById("nextPage").addEventListener("click", () => {
  window.location.href = "halaman2.html";
});
