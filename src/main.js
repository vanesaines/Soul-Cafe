// Actividad 1: calculando precio menor y mayor

console.log(`Actividad 1`);
console.log(`Vendemos 5 cafecitos con diferentes precios`);
console.log(`Calcular con JS el más barato y el más caro`);

const preciosDeCafe = [3, 3.5, 4]

let min = preciosDeCafe[0];
for (let i = 0; i < preciosDeCafe.length; i++) {
    if (preciosDeCafe[i] < min) {
        min = preciosDeCafe[i];
    }
}

console.log(`El café más barato sale ${min}`);

let max = preciosDeCafe[0];
for (let i = 0; i > preciosDeCafe.length; i++) {
    if (preciosDeCafe[i] > max) {
        min = preciosDeCafe[i];
    }
}

console.log(`El café más caro sale ${max}`);

// Actividad 2: Vuelto 

console.log(`Actividad 2`)
console.log(`El prompt inicial se utiliza para facilitar la entrega del vuelto al cliente`);

let cafe = 3;
let pago = prompt('El cliente acaba de comprar un café de $3. Ingresa con cuánto abona:');
pago = parseInt(pago);
let vuelto = (pago - cafe);

if (pago >= cafe) {
    alert(`El vuelto es ${vuelto}`);
}

// Desafio 1: Simulador interactivo

// productos es un objeto que mapea codigo de barras a productos
// un producto tiene precio y nombre
const productos = {
    '4567864342': {'nombre': 'Americano', 'precio': 3},
    '0987863433': {'nombre': 'Capuchino', 'precio': 3.5},
    '2388909055': {'nombre': 'Moka', 'precio': 4},
};

// Dado un codigo de barras, devuelve el producto (nombre y precio)
function buscarProducto(codigoDeBarras) {
    return productos[codigoDeBarras];
}

function cobrarProducto(codigoDeBarras, dineroPagado) {
    producto = buscarProducto(codigoDeBarras);

    if (producto === undefined) {
        console.log('Producto no encontrado');
        return;
    }

    if (producto.precio <= dineroPagado) {
        const vuelto = dineroPagado - producto.precio; 
        console.log(`Cliente compro ${producto.nombre} y le tenemos que dar $${vuelto} de vuelto`);
    } else {
        const faltante = producto.precio - dineroPagado;
        console.log(`Pedirle al cliente $${faltante} extra para poder venderle un ${producto.nombre}`);
    }
}

cobrarProducto('0987863433', 4);



