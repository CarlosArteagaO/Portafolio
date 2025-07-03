/*let menu = document.getElementById("menu");
let toggle_open = document.getElementById("toggle_open");
let toggle_close = document.getElementById("toggle_close");

toggle_open.addEventListener("click", toggleMenu);
toggle_close.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show-menu");

  if (menu.classList.contains("show-menu")) {
    toggle_open.style.display = "none";
    toggle_close.style.display = "block";
  } else {
    toggle_open.style.display = "block";
    toggle_close.style.display = "none";
  }
}*/

let menu = document.getElementById("menu");
let toggle_open = document.getElementById("toggle_open");
let toggle_close = document.getElementById("toggle_close");

toggle_open.addEventListener("click", toggleMenu);
toggle_close.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show-menu");

  if (menu.classList.contains("show-menu")) {
    toggle_open.style.display = "none";
    toggle_close.style.display = "block";
  } else {
    toggle_open.style.display = "block";
    toggle_close.style.display = "none";
  }
}

// Nuevo código para cerrar el menú al hacer clic en un enlace
const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Quitar clase que muestra menú
    menu.classList.remove("show-menu");
    // Restaurar iconos toggle
    toggle_open.style.display = "block";
    toggle_close.style.display = "none";
  });
});

window.addEventListener("scroll", () => {
  const mainImg = document.querySelector(".main img");
  if (!mainImg) return;

  // Obtiene la posición del scroll vertical
  const scrollY = window.scrollY;

  // Modifica la posición vertical de la imagen (puedes ajustar el factor)
  // Aquí la imagen se mueve hacia arriba más lento que el scroll para efecto parallax
  const offset = scrollY * 0.3;

  mainImg.style.transform = `translateY(${offset}px)`;
});
