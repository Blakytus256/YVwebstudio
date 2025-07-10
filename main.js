// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Modo oscuro con emoji animado
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('modo-oscuro-toggle');
  const body = document.body;

  // Cargar preferencia guardada
  if (localStorage.getItem("modo-oscuro") === "true") {
    body.classList.add("oscuro");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('oscuro');
    const esOscuro = body.classList.contains('oscuro');
    toggle.textContent = esOscuro ? "☀️" : "🌙";
    localStorage.setItem("modo-oscuro", esOscuro);

    toggle.classList.add("animando");
    setTimeout(() => {
      toggle.classList.remove("animando");
    }, 300);
  });
});

// Envío del formulario con validación personalizada
const form = document.getElementById('formulario-contacto');
const mensaje = document.getElementById('mensaje-enviado');
const erroresDiv = document.getElementById('errores-formulario');

// Función de validación
function validarFormulario() {
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensajeTexto = form.mensaje.value.trim();
  let errores = [];

  if (nombre.length === 0) {
    errores.push("El nombre no puede estar vacío.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errores.push("El correo no es válido.");
  }

  if (mensajeTexto.length < 10) {
    errores.push("El mensaje debe tener al menos 10 caracteres.");
  }

  if (errores.length > 0) {
    erroresDiv.innerHTML = errores.map(e => `<p>⚠️ ${e}</p>`).join("");
    erroresDiv.classList.add("mostrar");
    return false;
  }

  erroresDiv.innerHTML = "";
  erroresDiv.classList.remove("mostrar");
  return true;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!validarFormulario()) return;

  const datos = new FormData(form);
  const url = form.action;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: datos,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      mensaje.classList.add('mostrar');
      setTimeout(() => {
        mensaje.classList.remove('mostrar');
      }, 5000);
    } else {
      alert("Hubo un error al enviar tu mensaje.");
    }
  } catch (error) {
    alert("No se pudo enviar. Verifica tu conexión.");
  }
});

// Scroll activo + animación por secciones
const secciones = document.querySelectorAll('section');
const observer = new IntersectionObserver((entradas) => {
  const enlacesMenu = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let desdeArriba = window.scrollY + 120;

    secciones.forEach(seccion => {
      if (seccion.offsetTop <= desdeArriba && (seccion.offsetTop + seccion.offsetHeight) > desdeArriba) {
        enlacesMenu.forEach(enlace => {
          enlace.classList.remove("activo");
          if (enlace.getAttribute("href") === `#${seccion.id}`) {
            enlace.classList.add("activo");
          }
        });
      }
    });
  });

  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

secciones.forEach(seccion => {
  seccion.classList.add('aparecer');
  observer.observe(seccion);
});

const titulos = document.querySelectorAll('section h2');
titulos.forEach(titulo => {
  titulo.classList.add('aparecer');
  observer.observe(titulo);
});

// Botón subir arriba
const botonArriba = document.getElementById('boton-arriba');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    botonArriba.classList.add('visible');
  } else {
    botonArriba.classList.remove('visible');
  }
});
botonArriba.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// GSAP animaciones de entrada
gsap.from("header h1", {
  duration: 1,
  opacity: 0,
  y: -30,
  ease: "power2.out"
});
gsap.from(".slogan", {
  duration: 1,
  opacity: 0,
  y: -10,
  delay: 0.3,
  ease: "power2.out"
});
// Activar efecto 3D hover en tarjetas de precios
VanillaTilt.init(document.querySelectorAll(".plan"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
// Generador de cotización
const checkboxes = document.querySelectorAll('#form-cotizador input[type="checkbox"]');
const totalSpan = document.getElementById('total');

checkboxes.forEach(chk => {
  chk.addEventListener('change', () => {
    let total = 0;
    checkboxes.forEach(c => {
      if (c.checked) {
        total += parseFloat(c.value);
      }
    });
    totalSpan.textContent = total;
  });
});
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('oscuro');
}
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("header nav ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const enlacesMenu = document.querySelectorAll("nav a");
  const menu = document.querySelector("header nav ul");

  enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
  });
});
