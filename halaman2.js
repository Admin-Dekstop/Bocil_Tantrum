// Function to show popup message when photo is clicked
const photos = document.querySelectorAll('.photo');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');

photos.forEach(photo => {
  photo.addEventListener('click', function () {
    const message = photo.getAttribute('data-message');
    popupText.textContent = message;
    popup.classList.remove('hidden');
  });
});

// Function to close the popup
function closePopup() {
  popup.classList.add('hidden');
}
