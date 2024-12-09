const burgerWrapper = document.querySelector(".burger-wrapper");

burgerWrapper.addEventListener("click", () => {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
});

const allNavLi = document.querySelectorAll("nav ul li");

allNavLi.forEach((elem) => {
  elem.addEventListener("click", () => {
    document.querySelector(".burger").classList.remove("active");
    document.querySelector("nav").classList.remove("active");
  });
});