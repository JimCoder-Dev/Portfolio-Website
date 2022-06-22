const btn = document.getElementById('menu-btn');
//HAMBURGER BUTTON
btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
}
