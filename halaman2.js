const photos = document.querySelectorAll('.photo');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close');

// Kata-kata romantis sesuai urutan foto (bisa kamu ganti sesuka hati)
const romanticTexts = [
  "Tatapanmu lebih hangat dari matahari pagi.",
  " alasan senyumku setiap hari😊.",
  " bersyukur kamu hadir dalam hidupku.",
  "si bocil kuat makan pedis 🙄.",
  "si bocil kuat bobo🤣.",
  "kapan ini dspa jawab aku cil 🥺🥺.",
  "Setiap momen denganmu adalah kenangan indah.",
  "si tantrum yang bikin rindu anjay😆😆😆."
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

// ---------------------------
// Fungsi Tambahan: Musik Otomatis
// ---------------------------
const music = document.getElementById('bgMusic');

window.addEventListener('click', () => {
  if (music && music.paused) {
    music.play().catch(err => {
      console.warn('Pemutaran musik dicegah oleh browser:', err);
    });
  }
});
