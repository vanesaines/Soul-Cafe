const PRODUCTOS = [
    {
        // cafe
        nombre: 'AMERICANO',
        descripcion: 'Agua caliente y doble shot de espresso.',
        precio: 3,
        tags: ['dairyfree', 'caramel'],
        imagen: '../css/americano.webp',
    },
    {
        nombre: 'LATTE',
        descripcion: 'Doble shot de espresso y leche caliente.',
        precio: 3.5,
        tags: ['dairyfree', 'caramel'],
        imagen: '../css/latte2.webp',
    },
    {
        nombre: 'CAPUCHINO',
        descripcion: 'Doble shot de espresso, leche y chocolate arriba.',
        precio: 4,
        tags: ['dairyfree', 'caramel'],
        imagen: '../css/capuchino.jpeg',
    },
    {
        nombre: 'MOKA',
        descripcion: 'Chocolate fundido, doble shot de espresso, leche y chocolate arriba.',
        precio: 4,
        tags: ['dairyfree', 'caramel'],
        imagen: '../css/moka.webp',
    },
];

function productoHTMLCard(cafe) {
    return `<div class="card" style="width: 18rem;">
        <img src="${cafe.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-text">${cafe.nombre}</h3>
            <p class="card-text">${cafe.descripcion} <br> Precio regular $${cafe.precio} <br> Disponible:
                #${cafe.tags[0]} #${cafe.tags[1]}</p>
            <a href="#" class="btn">Lo quiero <i class="far fa-grin-hearts"></i> </a>
        </div>
    </div>`;
}


window.onload = function(e) {
    let nodoTiendaContenido = '';
    const nodoTienda = document.querySelector('.tienda');
    for (cafe of PRODUCTOS){
        nodoTiendaContenido += productoHTMLCard(cafe);
    }


    nodoTienda.innerHTML = nodoTiendaContenido;
}

