const PRODUCTOS = [
    {
        // cafe
        nombre: 'AMERICANO',
        descripcion: 'Hot water and double shot of espresso.',
        precio: 3,
        tags: ['dairyfree', 'caramel'],
        imagen: '../css/americano.webp',
    },
    {
        nombre: 'LATTE',
        descripcion: 'Double shot of espresso and hot milk.',
        precio: 3.5,
        tags: ['dairyfree', 'caramel'],
        imagen: '../css/latte2.webp',
    },
    {
        nombre: 'CAPUCHINO',
        descripcion: 'Double shot of espresso, hot milk and chocolate powder on the top. ',
        precio: 4,
        tags: ['dairyfree', 'caramel'],
        imagen: '../css/capuchino.jpeg',
    },
    {
        nombre: 'MOKA',
        descripcion: 'Chocolate chips, double shot of espresso, hot milk and chocolate powder on the top.',
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
            <p class="card-text">${cafe.descripcion} <br> Regular price $${cafe.precio} <br> Available:
                #${cafe.tags[0]} #${cafe.tags[1]}</p>
            <button
                href="#"
                class="btn"
                onclick="agregarAlCarrito('${cafe.nombre}')"
            >
                Add to cart
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
    // 4 - Al terminar el for, nodoTiendaContenido tiene como valor todas las card de los cafes
    // 5 - Le cambiamos el contenido al nodo .tienda para que tenga las cards
    nodoTienda.innerHTML = nodoTiendaContenido;
}