const locations =
 {/*entrada: {
    title: "Entrada principal",
    eyebrow: "ESTÁS EN",
    description: "El acceso principal y punto de encuentro de la comunidad educativa.",
    text: "La tercera panorámica corresponde a la entrada. Desde este sector se puede recorrer el interior y continuar hacia los patios y otros espacios.",
    space: "Acceso principal",
    image: "PROYECTO ESCUELA CLIC/Entrada Principal.jpeg",
    hotspots: [
      { x: 52, y: 47, target: "pasillo", label: "Recorrer pasillo" },
      { x: 67, y: 47, target: "entrada2", label: "Ir a la entrada2" }
    ]
  },*/

   entrada: {
    title: "Entrada principal",
    eyebrow: "ESTÁS EN",
    description: "El acceso principal y punto de encuentro de la comunidad educativa.",
    text: "La tercera panorámica corresponde a la entrada. Desde este sector se puede recorrer el interior y continuar hacia los patios y otros espacios.",
    space: "Acceso principal",
    image: "PROYECTO ESCUELA CLIC/Entrada Principal.jpeg",
    hotspots: [
      { x: 15, y: 47, target: "pasillo", label: "Recorrer pasillo" },
      { x: 80, y: 50, target: "entrada2", label: "Ir a la entrada2" }
    ]
  },

  entrada2: {
    title: "Segunda entrada",
    eyebrow: "ESTÁS EN",
    description: "Conecta la entrada principal con el SUM, permitiendo un acceso directo a este espacio",
    image: "PROYECTO ESCUELA CLIC/2da entrada.jpeg",
    hotspots: [
      { x: 38, y: 50, target: "entrada", label: "Volver a la entrada" },
      { x: 90, y: 50, target: "sum", label: "Ir al sum" },
      { x: 81, y: 50, target: "escalera1", label: "Subir al primer piso" }
    ]

  },

escalera1: {
    title: "Escalera N° 1",
    eyebrow: "ESTÁS EN",
    description: "Conecta los distintos niveles de la insitutución, facilitando la circulacion interna y el acceso rapido entre las plantas del edificio.",
    image: "PROYECTO ESCUELA CLIC/Escalera 1.jpeg",
    hotspots: [
      { x: 18, y: 45, target: "entrada2", label: "Volver a la segunda entrada" },
      { x: 9, y: 35, target: "pasilloescalera1", label: "Subir" }
    ]

  },

  pasilloescalera1: {
    title: "Primer piso",
    eyebrow: "ESTÁS EN",
    description: "Area de distribuion de la planta alta que conecta los distintos sectores y la circulacion hacia aulas y baños.",
    image: "PROYECTO ESCUELA CLIC/1° piso- Escalera 1- salones-baño damas.jpeg",
    hotspots: [
      { x: 10, y: 45, target: "escalera1", label: "Ir a planta baja" },
      { x: 18, y: 40, target: "preceptoria2dopiso", label: "Ir a Sector adiministrativo y aulas" },
      { x: 35, y: 45, target: "escalera2", label: "Bajar a planta baja" },
      { x: 40, y: 45, target: "pasilloescalera3", label: "ir" }

    ]
  },

  pasilloescalera3: {
    title: "Primer piso",
    eyebrow: "ESTÁS EN",
    description: "",
    image: "PROYECTO ESCUELA CLIC/Pasillo 1°piso- escalera 3.jpeg",
    hotspots: [
      { x: 85, y: 45, target: "pasilloescalera1", label: "Volver al area de distribución" },
      { x: 10, y: 45, target: "escalera3", label: "Ir a la escalera3" }

    ]
  },

  escalera3: {
    title: "Escalera N°3",
    eyebrow: "ESTÁS EN",
    description: "Acceso de salida/conexión desde el primer piso hacia el pasilllo exterior.",
    image: "PROYECTO ESCUELA CLIC/Escalera 3.jpeg",
    hotspots: [
      { x: 14, y: 50, target: "pasillo", label: "Bajar al pasillo exterior" },
      { x: 10, y: 35, target: "pasilloescalera3", label: "volver" },
      { x: 80, y: 35, target: "pasillocomedor", label: "Ir al pasillo " }

    ]
  },

  pasillocomedor: {
    title: "Pasillo Comedor/Aulas",
    eyebrow: "ESTÁS EN",
    description: "Pasillo largo ubicado al subir por la Escalera N°3, que conduce hacia el comedor de la escuela y da acceso a cuatro salones de clase.",
    image: "PROYECTO ESCUELA CLIC/Pasillo Comedor.jpeg",
    hotspots: [
      { x: 58, y: 40, target: "escalera3", label: "Volver a la Escalera N°3" }
    ]
  },
  
  escalera2: {
    title: "Escalera N°2",
    eyebrow: "ESTÁS EN",
    description: "Acceso que vincula la entrada principal de planta baja con el primer piso.",
    image: "PROYECTO ESCUELA CLIC/Escalera 2.jpeg",
    hotspots: [
      { x: 14, y: 65, target: "entrada", label: "Ir a entrada" },
      { x: 70, y: 35, target: "pasilloescalera1", label: "Subir al 1er piso" }

    ]
  },

  preceptoria2dopiso: {
    title: "Pimer piso - Sector administrativo y aulas",
    eyebrow: "ESTÁS EN",
    description: "Pasillo del nivel superior del edificio que da acceso a la preceptoria, la sala de computación, salones de clases y los sanitarios para docentes y personal.",
    image: "PROYECTO ESCUELA CLIC/1°piso- preceptoria-sala de Computacion-Baños.jpeg",
    hotspots: [
      { x: 20, y: 45, target: "pasilloescalera1", label: "Volver" },
      { x: 35, y: 45, target: "saladecomputación", label: "Ir a la sala de computacion de ciclo básico" }
    ]
  },

  saladecomputación: {
    title: "Sala de computacion - Ciclo Básico",
    eyebrow: "ESTÁS EN",
    description: "Esta es la sala de computación para los cursos de ciclo básico, donde los alumnos realizan sus practicas de informatica y proyectos digitales",
    image: "PROYECTO ESCUELA CLIC/Sala de Computacion-1° piso.jpeg",
    hotspots: [
      { x: 88, y: 45, target: "preceptoria2dopiso", label: "Volver" }
    ]
  },

  sum: {
    title: "Salón de usos múltiples",
    eyebrow: "ESTÁS EN",
    description: "Un espacio amplio para encuentros, actividades y celebraciones.",
    text: "Este gran espacio cubierto funciona como salón de usos múltiples. Desde aquí se puede acceder al patio exterior que aparece en la cuarta panorámica.",
    space: "SUM / Salón de usos múltiples",
    image: "PROYECTO ESCUELA CLIC/SUM.jpeg",
    hotspots: [
      { x: 77, y: 47, target: "patio1", label: "Salir al patio" },
      { x: 50, y: 47, target: "entrada2", label: "Volver a la segunda entrada" }
    ]
  },

  pasillo: {
    title: "Pasillo exterior",
    eyebrow: "ESTÁS EN",
    description: "Un recorrido abierto que conecta distintos sectores de la escuela.",
    text: "Esta panorámica muestra uno de los recorridos exteriores de la escuela y conecta con el patio que vemos en la quinta imagen.",
    space: "Circulación exterior",
    image: "PROYECTO ESCUELA CLIC/Pasillo kiosco.jpeg",
    hotspots: [
      { x: 78, y: 48, target: "preceptoriadetaller", label: "Ir al anexo entre preceptoria y box" },
      { x: 8, y: 48, target: "entrada", label: "Volver a entrada" },
      { x: 53, y: 45, target: "galeria", label: "Ir a galeria" }
    ]
  },

  galeria: {
    title: "Galeria",
    eyebrow: "ESTÁS EN",
    description: "Area de descanso donde los alumnos se reúnen y comen en los recreos o fuera del horario escolar.",
    text: "Esta panorámica muestra uno de los recorridos exteriores de la escuela y conecta con el patio que vemos en la quinta imagen.",
    image: "PROYECTO ESCUELA CLIC/Galeria- Kiosco-Cocina.jpeg",
    hotspots: [
      { x: 82, y: 48, target: "pasillo", label: "Volver" }
    ]
  },
  
preceptoriadetaller: {
    title: "Anexo entre preceptoria de taller y box",
    eyebrow: "ESTÁS EN",
    description: "Anexo entre Preceptoria de Taller y los boxes: conecta la administración de taller son la sala dividida en boxes donde se dictan clases practicas y de formacion rpofesional.",
    space: "Anexo",
    image: "PROYECTO ESCUELA CLIC/Preceptoria de taller.jpeg",
    hotspots: [
      { x: 45, y: 42, target: "pasillo", label: "Volver al pasillo externo" }
    ]
  },
 

  patio1: {
    title: "Patio junto al SUM",
    eyebrow: "ESTÁS EN",
    description: "El patio exterior al que se accede directamente desde el salón.",
    text: "Esta es la cuarta panorámica. Es el patio que se encuentra conectado con la primera imagen, el salón de usos múltiples.",
    space: "Patio exterior · sector SUM",
    image: "PROYECTO ESCUELA CLIC/Patio.jpeg",
    hotspots: [
      { x: 19, y: 50, target: "sum", label: "Volver al SUM" },
      { x: 76, y: 48, target: "entrada", label: "Ir a entrada" }
    ]
  },

  patio2: {
    title: "Patio central",
    eyebrow: "ESTÁS EN",
    description: "Un espacio abierto de circulación, encuentro y actividades.",
    text: "Esta es la quinta panorámica, vinculada con el recorrido exterior de la segunda imagen. Es un sector amplio del patio central.",
    space: "Patio central",
    image: "assets/05-patio-desde-pasillo.jpg",
    hotspots: [
      { x: 24, y: 48, target: "pasillo", label: "Volver al pasillo" },
      { x: 58, y: 48, target: "entrada", label: "Ir a entrada" }
    ]
  }
};

const route = ["pasillocomedor","galeria","sum", "patio1", "entrada", "patio2", "pasillo", "entrada2", "escalera1", "preceptoriadetaller", "pasilloescalera1", "preceptoria2dopiso", "saladecomputación", "escalera2", "pasilloescalera3", "escalera3"];
let current = 0;

const viewer = document.getElementById("viewer");
const world = document.getElementById("world");
const panorama = document.getElementById("panorama");
const hotspots = document.getElementById("hotspots");
const welcome = document.getElementById("welcome");
const tour = document.getElementById("tour");

const placeIndex = document.getElementById("placeIndex");
const placeTitle = document.getElementById("placeTitle");
const placeDescription = document.getElementById("placeDescription");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const dragHint = document.getElementById("dragHint");

let worldWidth = 0;
let x = 0;
let dragging = false;
let lastX = 0;
let moved = false;
let dragStartX = 0;
let targetX = 0;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getMaxPan() {
  return Math.max(0, worldWidth - viewer.clientWidth);
}

function renderX() {
  x = clamp(x, 0, getMaxPan());
  world.style.transform = `translate3d(${-x}px,0,0)`;
}

function setPanoramaPosition(percent) {
  const max = getMaxPan();
  x = clamp((percent / 100) * max, 0, max);
  renderX();
}

// script.js - CÓDIGO MODIFICADO

function buildHotspots(location) {
  hotspots.innerHTML = "";

  location.hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.className = "hotspot";
    button.style.left = `${spot.x}%`;
    button.style.top = `${spot.y}%`;
    button.dataset.target = spot.target;
    button.title = spot.label;
    
    // AHORA REEMPLAZAMOS EL signo más <SPAN>+</SPAN> POR UNA IMAGEN <IMG>
    // Asegúrate de que la ruta 'PROYECTO ESCUELA CLIC/flecha-adelante.png' sea correcta.
    button.innerHTML = `<img src="PROYECTO ESCUELA CLIC/hotpos.jfif" alt="Avanzar"><small>${spot.label}</small>`;
    
    button.addEventListener("pointerdown", e => e.stopPropagation());
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!moved) goTo(spot.target);
    });
    hotspots.appendChild(button);
  });
}


function updateUI(location) {
  placeIndex.textContent = String(current + 1).padStart(2, "0");
  placeTitle.textContent = location.title;
  placeDescription.textContent = location.description;
  progressText.textContent = `${current + 1} / ${route.length}`;
  progressBar.style.width = `${((current + 1) / route.length) * 100}%`;

  document.querySelectorAll(".map-node").forEach(node => {
    node.classList.toggle("active", node.dataset.location === route[current]);
  });

  document.getElementById("panelTitle").textContent = location.title;
  document.getElementById("panelText").textContent = location.text;
  document.getElementById("panelSpace").textContent = location.space;
  document.getElementById("panelRoute").textContent =
    `${String(current + 1).padStart(2, "0")} / ${String(route.length).padStart(2, "0")}`;
}

function loadLocation(id, initialPan = 50) {
  const location = locations[id];
  if (!location) return;

  current = route.indexOf(id);

  panorama.style.opacity = "0";
  setTimeout(() => {
    panorama.src = location.image;
    panorama.alt = `Panorámica 360°: ${location.title}`;
    panorama.onload = () => {
      worldWidth = panorama.naturalWidth * (viewer.clientHeight / panorama.naturalHeight);
      world.style.width = `${worldWidth}px`;
      hotspots.style.width = `${worldWidth}px`;
      hotspots.style.height = `${viewer.clientHeight}px`;

      setPanoramaPosition(initialPan);
      buildHotspots(location);
      updateUI(location);

      requestAnimationFrame(() => panorama.style.opacity = "1");
    };
  }, 140);
}

function goTo(id) {
  const destination = route.includes(id) ? id : "entrada";
  loadLocation(destination, 50);
}


function next() {
  current = (current + 1) % route.length;
  loadLocation(route[current], 50);
}

function previous() {
  current = (current - 1 + route.length) % route.length;
  loadLocation(route[current], 50);
}

document.getElementById("startTour").addEventListener("click", () => {
  welcome.classList.add("leave");
  setTimeout(() => {
    welcome.remove();
    tour.classList.remove("is-hidden");
    loadLocation("entrada", 50);
    setTimeout(() => dragHint.classList.add("show"), 600);
    setTimeout(() => dragHint.classList.remove("show"), 3200);
  }, 700);
});

viewer.addEventListener("pointerdown", e => {
  dragging = true;
  moved = false;
  dragStartX = e.clientX;
  lastX = e.clientX;
  viewer.classList.add("dragging");
  viewer.setPointerCapture(e.pointerId);
});

viewer.addEventListener("pointermove", e => {
  if (!dragging) return;
  const dx = e.clientX - lastX;
  if (Math.abs(e.clientX - dragStartX) > 5) moved = true;
  x -= dx;
  lastX = e.clientX;
  renderX();
});


function endDrag() {
  dragging = false;
  viewer.classList.remove("dragging");
}
viewer.addEventListener("pointerup", endDrag);
viewer.addEventListener("pointercancel", endDrag);
viewer.addEventListener("pointerleave", () => { if (dragging) endDrag(); });

viewer.addEventListener("wheel", e => {
  e.preventDefault();
  x += e.deltaY * 0.6 + e.deltaX * 0.6;
  renderX();
}, { passive: false });

document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("prevBtn").addEventListener("click", previous);

document.getElementById("infoBtn").addEventListener("click", () => {
  document.getElementById("infoPanel").classList.add("open");
});
document.getElementById("closeInfo").addEventListener("click", () => {
  document.getElementById("infoPanel").classList.remove("open");
});

document.getElementById("mapBtn").addEventListener("click", () => {
  document.getElementById("mapModal").classList.add("open");
});
document.getElementById("closeMap").addEventListener("click", () => {
  document.getElementById("mapModal").classList.remove("open");
});

document.querySelectorAll(".map-node").forEach(node => {
  node.addEventListener("click", () => {
    document.getElementById("mapModal").classList.remove("open");
    goTo(node.dataset.location);
  });
});

document.getElementById("helpBtn").addEventListener("click", () => {
  document.getElementById("helpModal").classList.add("open");
});
document.getElementById("closeHelp").addEventListener("click", () => {
  document.getElementById("helpModal").classList.remove("open");
});

document.getElementById("fullscreenBtn").addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.();
  } else {
    await document.exitFullscreen?.();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") previous();
  if (e.key === "Escape") {
    document.getElementById("infoPanel").classList.remove("open");
    document.getElementById("mapModal").classList.remove("open");
    document.getElementById("helpModal").classList.remove("open");
  }
});

window.addEventListener("resize", () => {
  if (!panorama.naturalWidth) return;
  const oldMax = Math.max(1, worldWidth - viewer.clientWidth);
  const ratio = x / oldMax;

  worldWidth = panorama.naturalWidth * (viewer.clientHeight / panorama.naturalHeight);
  world.style.width = `${worldWidth}px`;
  hotspots.style.width = `${worldWidth}px`;
  hotspots.style.height = `${viewer.clientHeight}px`;

  x = ratio * getMaxPan();
  renderX();
});

panorama.style.transition = "opacity .35s ease";

