const photos = document.querySelectorAll('.photo');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close');

// Kata-kata romantis sesuai urutan foto (bisa kamu ganti sesuka hati)
const romanticTexts = [
  "Tatapanmu lebih hangat dari matahari pagi.",
  "Kamu adalah alasan senyumku setiap hari.",
  "Aku bersyukur kamu hadir dalam hidupku.",
  "Dunia terasa sempurna saat bersamamu.",
  "Kamu adalah definisi dari cinta sejati.",
  "Dalam pelukanmu, aku menemukan rumah.",
  "Setiap momen denganmu adalah kenangan indah.",
  "Cintaku padamu tumbuh setiap hari, tanpa jeda."
];

// Event: klik pada foto
photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    popupText.textContent = romanticTexts[index];
    popup.style.display = 'flex';
  });
});

// Event: klik tombol close
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Tutup popup jika klik di luar konten
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
