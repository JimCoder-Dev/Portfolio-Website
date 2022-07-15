const year = document.getElementById('year')
const date = new Date()
year.innerHTML = date.getFullYear()

const btn = document.getElementById('menu-btn');
//HAMBURGER BUTTON
btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  if (btn.classList.contains('open')) {
    mobileMenu.style.display = 'block'
  } else {
    mobileMenu.style.display = 'none'
  }
}


const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.style.display = 'none'
