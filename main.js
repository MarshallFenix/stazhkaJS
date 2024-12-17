



// Бургер-меню
const hamburgerMenu = document.querySelector('.hamburger-menu');

if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  });
}

const allNavLi = document.querySelectorAll("nav ul li");

allNavLi.forEach((elem) => {
  elem.addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
  });
});
