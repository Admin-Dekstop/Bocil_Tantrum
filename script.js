const countdownDate = new Date("2025-05-12T19:00:00+08:00").getTime();

const countdownEl = document.getElementById("countdown");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const birthdayMsg = document.getElementById("birthdayMessage");
const btnSelengkapnya = document.getElementById("selengkapnyaBtn");
const galleryPage = document.getElementById("galleryPage");
const romanticText = document.getElementById("romanticText");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    countdownEl.style.display = "none";
    birthdayMsg.classList.remove("hidden");
    document.getElementById("romanticMusic").play();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}, 1000);

btnSelengkapnya.addEventListener("click", () => {
  birthdayMsg.style.display = "none";
  galleryPage.classList.remove("hidden");
});

document.querySelectorAll(".photo").forEach(photo => {
  photo.addEventListener("click", () => {
    romanticText.textContent = photo.dataset.message;
  });
});
