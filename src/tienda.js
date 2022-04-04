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
            <button
                href="#"
                class="btn"
                onclick="agregarAlCarrito('${cafe.nombre}')"
            >
                Lo quiero
                <i class="far fa-grin-hearts"></i>
            </button>
        </div>
    </div>`;
}

function productoHTMLCarritoEntrada(cafe) {
    return `
    <tr>
        <td>${cafe.nombre}</td>
        <td>$${cafe.precio}</td>
        <td>
            <button onclick="sacarDeCarrito('${cafe.nombre}')">
                X
            </button>
        </td>
    <tr>
    `;
}

// carrito

// const AGREGAR = [
//     {
//         nombre: 'Dairy free',
//         precio: 0.5,
//     },
//     {
//         nombre: 'Caramel',
//         precio: 0.7,
//     },
//     ];

const carrito = [];

function agregarAlCarrito(nombreProducto) {
    const producto = PRODUCTOS.find((cafe) => cafe.nombre === nombreProducto);
    carrito.push(producto);

    // prompt(`
    // Agregar ${AGREGAR[0].nombre} por $${AGREGAR[0].precio}  (SI/NO)
    // `);
    // prompt(`
    // Agregar ${AGREGAR[1].nombre} por $${AGREGAR[1].precio}  (SI/NO)
    // `);

    dibujarCarrito();
}

function dibujarCarrito() {
    const nodoCarritoNumero = document.querySelector('.carrito-numero');
    nodoCarritoNumero.innerHTML = `${carrito.length}` ;

    const nodoCarritoPanel = document.querySelector('.carrito-panel');
    let nodoCarritoPanelContenido = '';
    for (cafe of carrito) {
        nodoCarritoPanelContenido = nodoCarritoPanelContenido + productoHTMLCarritoEntrada(cafe); 
    }
    nodoCarritoPanel.innerHTML = nodoCarritoPanelContenido;
}

function sacarDeCarrito(nombreProducto) {
    const indexOfProducto = carrito.findIndex((producto) => producto.nombre === nombreProducto);
    carrito.splice(indexOfProducto, 1);

    dibujarCarrito();
}

function toggleCarrito() {
    const carritoPanelNode = document.querySelector('.carrito-panel');
    if (carritoPanelNode.classList.contains('hidden')) {
        carritoPanelNode.classList.remove('hidden');
    } else {
        carritoPanelNode.classList.add('hidden');
    }
}

// Se ejecuta despues que el navegador termino de cargar todo
window.onload = function(e) {
    // 1 - Buscar un nodo en el DOM con clase igual "tienda"
    const nodoTienda = document.querySelector('.tienda');
    // 2 - Inicializamos `nodoTiendaContenido` igual al texto vacio
    let nodoTiendaContenido = '';
    // 3 - Por cada cafe hacemos algo
    for (cafe of PRODUCTOS){
        nodoTiendaContenido = nodoTiendaContenido + productoHTMLCard(cafe);
    }
    // 4 - Al terminar el for, nodoTiendaContenido tiene como varlo todas las card de los cafes
    // 5 - Le cambiamos el contenido al nodo .tienta para que tenga las cards
    nodoTienda.innerHTML = nodoTiendaContenido;
}