const countdownDate = new Date("2025-05-15T00:00:00+08:00").getTime(); // ganti sesuai tanggalmu
const countdownEl = document.getElementById("countdown");
const ucapanEl = document.getElementById("ucapan");
const musik = document.getElementById("musikRomantis");
const btnSelengkapnya = document.getElementById("btnSelengkapnya");

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const selisih = countdownDate - now;

  if (selisih <= 0) {
    clearInterval(countdownInterval);
    countdownEl.style.display = "none";
    ucapanEl.classList.remove("hidden");
    musik.play();
    return;
  }

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(hari).padStart(2, "0");
  document.getElementById("hours").textContent = String(jam).padStart(2, "0");
  document.getElementById("minutes").textContent = String(menit).padStart(2, "0");
  document.getElementById("seconds").textContent = String(detik).padStart(2, "0");
}, 1000);

btnSelengkapnya.addEventListener("click", () => {
  window.location.href = "halaman2.html";
});
