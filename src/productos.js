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

