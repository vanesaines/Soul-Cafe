
const ESPECIALES_API_URL = 'https://api.sampleapis.com/coffee/hot';

function productoHTMLCard({title, description, ingredients}) {  
  const ingredientes = ingredients.map((i) => `<a href="#" class="card-link">${i}</a>`).join('\n');

  return `<div class="card card-body card-especial">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
              <p class="card-text">Ingredients:</p>
              ${ingredientes}
            </div>`;
}

function dibujarEspeciales(cafes) {
  // 1 - Buscar un nodo en el DOM pre
  const nodeEspeciales = document.querySelector('.especials');
  // 2 - Inicializamos `nodeEspecialesContenido` igual al texto vacio
  let nodeEspecialesContenido = '';
  // 3 - Por cada cafe hacemos algo
  for (let cafe of cafes){
      nodeEspecialesContenido = nodeEspecialesContenido + productoHTMLCard(cafe);
  }
  // 4 - Al terminar el for, nodeEspecialesContenido tiene como valor todas las card de los cafes
  // 5 - Le cambiamos el contenido al nodo .tienda para que tenga las cards
  nodeEspeciales.innerHTML = nodeEspecialesContenido;
}

// Se ejecuta despues que el navegador termino de cargar todo
window.onload = function(e) {
  fetch(ESPECIALES_API_URL)
    .then(resp => resp.json())
    .then(data => data.filter((d) => d.id >= 5 && d.id <= 19))
    .then(data => dibujarEspeciales(data));
}