const toggleButton = document.getElementById('toggle-contrast');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('high-contrast-theme');
});