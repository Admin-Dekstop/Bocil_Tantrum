const countdown = document.getElementById('countdown');
const birthdayMessage = document.getElementById('birthdayMessage');
const romanticMusic = document.getElementById('romanticMusic');
const lihatBtn = document.getElementById('lihatBtn');

const targetDate = new Date("2025-05-10T00:00:00").getTime(); // Ganti tanggal sesuai momenmu

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days < 10 ? '0' + days : days;
  document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

  if (distance <= 0) {
    clearInterval(interval);
    countdown.style.display = 'none';
    birthdayMessage.classList.remove('hidden');
    romanticMusic.removeAttribute('hidden');
    romanticMusic.play();
  }
}, 1000);

lihatBtn.addEventListener('click', () => {
  window.location.href = "halaman2.html";
});
