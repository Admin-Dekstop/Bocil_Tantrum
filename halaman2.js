const fotoEls = document.querySelectorAll(".foto");
const kataEl = document.getElementById("kataRomantis");

fotoEls.forEach(foto => {
  foto.addEventListener("click", () => {
    const pesan = foto.getAttribute("data-kata");
    kataEl.textContent = pesan;
  });
});
