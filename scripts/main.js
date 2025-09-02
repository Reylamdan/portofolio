document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
  
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  });
  

document.querySelector("form").addEventListener("submit", function(event) {
  setTimeout(() => {
    location.reload();
  },500);
  });