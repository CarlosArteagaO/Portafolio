document.addEventListener("DOMContentLoaded", () => {
  const toggleOpen = document.getElementById("toggle_open");
  const toggleClose = document.getElementById("toggle_close");
  const menu = document.getElementById("menu");

  if (toggleOpen && toggleClose && menu) {
    function openMenu() {
      menu.classList.add("show-menu");
      toggleOpen.style.display = "none";
      toggleClose.style.display = "block";
    }

    function closeMenu() {
      menu.classList.remove("show-menu");
      toggleOpen.style.display = "block";
      toggleClose.style.display = "none";
    }

    toggleOpen.addEventListener("click", openMenu);
    toggleClose.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    toggleOpen.style.display = "block";
    toggleClose.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typing-text");
  if (textElement) {
    const texts = ["QA Engineer", "QA Automation", "API Testing", "Data & ETL Testing"];
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const currentText = texts[textIndex];

      if (!deleting) {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
          setTimeout(() => { deleting = true; type(); }, 1800);
          return;
        }
        setTimeout(type, 100);
      } else {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, 60);
      }
    }
    type();
  }
});

// ========================================
// GHERKIN PLAYGROUND
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("gp-scenario");
  const code = document.getElementById("gp-code");
  const title = document.getElementById("gp-code-title");
  const copyButton = document.getElementById("gp-copy");

  if (!selector || !code || !title || !copyButton) return;

  const scenarios = {
    "pims-endosos": {
      title: "PIMS Loader · Carga de endosos",
      code: `<span class="gp-feature">Feature:</span> Carga de endosos en PIMS Loader

<span class="gp-tag">@PIMS @CargaNomina</span>
<span class="gp-scenario">Scenario:</span> Procesar correctamente un archivo de endosos
  <span class="gp-given">Given</span> que el archivo de endosos está disponible en la ruta definida
  <span class="gp-when">When</span> ingreso a PIMS Loader y selecciono "Carga Nómina"
  <span class="gp-and">And</span> selecciono el archivo y presiono "Cargar"
  <span class="gp-then">Then</span> el sistema procesa correctamente el archivo
  <span class="gp-and">And</span> la carga finaliza sin errores`
    },
    "pims-emisiones": {
      title: "PIMS Loader · Carga de emisiones",
      code: `<span class="gp-feature">Feature:</span> Carga de emisiones posterior a endosos

<span class="gp-tag">@PIMS @Emisiones @ReglasNegocio</span>
<span class="gp-scenario">Scenario:</span> Procesar emisiones sin error de regla de negocio
  <span class="gp-given">Given</span> que la carga previa de endosos finalizó correctamente
  <span class="gp-and">And</span> el archivo de emisiones está disponible en la ruta definida
  <span class="gp-when">When</span> ingreso a PIMS Loader y selecciono "Carga Nómina"
  <span class="gp-and">And</span> selecciono el archivo y presiono "Cargar"
  <span class="gp-then">Then</span> el sistema procesa correctamente las emisiones
  <span class="gp-and">And</span> la carga finaliza sin errores
  <span class="gp-and">And</span> no se presenta el error 27 de regla de negocios`
    },
    "login": {
      title: "Login · Autenticación exitosa",
      code: `<span class="gp-feature">Feature:</span> Autenticación de usuarios

<span class="gp-tag">@Login @Funcional</span>
<span class="gp-scenario">Scenario:</span> Inicio de sesión con credenciales válidas
  <span class="gp-given">Given</span> que el usuario registrado está en la página de login
  <span class="gp-when">When</span> ingresa sus credenciales válidas
  <span class="gp-and">And</span> presiona el botón "Login"
  <span class="gp-then">Then</span> el sistema permite el acceso al área segura`
    },
    "api": {
      title: "API · Consulta de recurso",
      code: `<span class="gp-feature">Feature:</span> Consulta de recursos mediante API REST

<span class="gp-tag">@API @GET @REST</span>
<span class="gp-scenario">Scenario:</span> Consultar un recurso existente
  <span class="gp-given">Given</span> que el servicio API se encuentra disponible
  <span class="gp-when">When</span> envío una solicitud GET a un recurso existente
  <span class="gp-then">Then</span> el servicio responde con código HTTP 200
  <span class="gp-and">And</span> entrega una estructura JSON válida
  <span class="gp-and">And</span> los campos cumplen el contrato definido`
    }
  };

  selector.addEventListener("change", () => {
    const scenario = scenarios[selector.value];
    if (!scenario) return;
    title.textContent = scenario.title;
    code.innerHTML = scenario.code;
    copyButton.innerHTML = '<i class="far fa-copy"></i> Copiar código';
    copyButton.classList.remove("copied");
  });

  copyButton.addEventListener("click", async () => {
    const plainCode = code.innerText;
    try {
      await navigator.clipboard.writeText(plainCode);
      copyButton.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
      copyButton.classList.add("copied");
    } catch (error) {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyButton.innerHTML = '<i class="fas fa-check"></i> Código seleccionado';
    }
  });
});

// ========================================
// QA TEST LAB - FILTROS (compatibilidad)
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".qa-filter");
  const caseCards = document.querySelectorAll(".qa-case-card");

  if (!filterButtons.length || !caseCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      caseCards.forEach((card) => {
        const visible = selectedFilter === "all" || selectedFilter === card.dataset.category;
        card.classList.toggle("qa-hidden", !visible);
      });
    });
  });
});
