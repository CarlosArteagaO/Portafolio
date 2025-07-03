document.addEventListener("DOMContentLoaded", () => {
  const toggleOpen = document.getElementById("toggle_open");
  const toggleClose = document.getElementById("toggle_close");
  const menu = document.getElementById("menu");

  if (!toggleOpen || !toggleClose || !menu) {
    console.error("No se encontraron los elementos del menú.");
    return;
  }

  // Función para abrir menú
  function openMenu() {
    menu.classList.add("show-menu");
    toggleOpen.style.display = "none";
    toggleClose.style.display = "block";
  }

  // Función para cerrar menú
  function closeMenu() {
    menu.classList.remove("show-menu");
    toggleOpen.style.display = "block";
    toggleClose.style.display = "none";
  }

  // Eventos para abrir y cerrar menú
  toggleOpen.addEventListener("click", openMenu);
  toggleClose.addEventListener("click", closeMenu);

  // Cerrar menú cuando se hace clic en un enlace del menú
  const menuLinks = document.querySelectorAll("#menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Inicialmente mostrar solo el toggleOpen y ocultar toggleClose
  toggleOpen.style.display = "block";
  toggleClose.style.display = "none";
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typing-text");
  const fullText = textElement.textContent;
  textElement.textContent = ""; // limpiar texto

  let index = 0;

  textElement.classList.add("typing");

  function type() {
    if (index < fullText.length) {
      textElement.textContent += fullText.charAt(index);
      index++;
      setTimeout(type, 120); // velocidad de escritura
    } else {
      textElement.classList.remove("typing"); // quitar cursor al terminar
    }
  }

  type();
});
