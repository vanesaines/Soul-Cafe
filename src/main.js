// ############################################################
// Actividad 1: calculando precio menor y mayor
// ############################################################

/* console.log(`Actividad 1`);
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

// ############################################################
// Actividad 2: Vuelto 
// ############################################################

console.log(`Actividad 2`)
console.log(`El prompt inicial se utiliza para facilitar la entrega del vuelto al cliente`);

let cafe = 3;
let pago = prompt('El cliente acaba de comprar un café de $3. Ingresa con cuánto abona:');
pago = parseInt(pago);
let vuelto = (pago - cafe);

if (pago >= cafe) {
    alert(`El vuelto es ${vuelto}`); 
} */

// ############################################################
// Desafio 1: Simulador interactivo
// ############################################################

document.write(`<h1>HOLA MUNDO! HOLA CAFETEROS!</h1>
<p>La Fundación Todos Los Soles, está juntando fondos para ayudar a los niños desamparados por la inundación. <br> Nostros también queremos ayudar y lo haremos donando el 90% de nuestras ventas.</p>
<p>Vos podés ser parte de esta ayuda con sólo comprar un cafecito.</p>
<p>Gracias por ser parte!! Que tengas hermoso día!!</p>
<br> <p>PRECIOS <hr> </p> 
<p>Americano $3</p> 
<p>Latte $3.50</p> 
<p>Caramel +$0.5</p>
<p>Capuchino / Moka $4</p> <br>`)

// productos es un OBJETO que mapea codigo de barras a productos
// un producto tiene nombre y precio
const productos = {
    '4567864342': {'nombre': 'Americano', 'precio': 3},
    '0987863433': {'nombre': 'Latte', 'precio': 3.5},
    '2388909055': {'nombre': 'Capuchino', 'precio': 4},
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
/*
function darVuelto (preciosDeCafe,pago,vuelto){
    prompt('El cliente acaba de pedir un café . Ingresa con cuánto abona:');
    if (pago >= precio) {
    console.log(`el vuelto es`)

    }
pago = parseInt(pago);
let vuelto = (pago - cafe);

if (pago >= cafe) {
    alert(`El vuelto es ${vuelto}`);
}

} */

// ************* CLASE ARRAYS *****************************


// PRODUCTOS CLASICOS *****************************

document.write ('PRODUCTOS CLASICOS: <hr><br>');

const productosSoloCafe = [
    'Café Americano LF: agua caliente y doble shot de espresso, con unas gotitas de leche fría',
    'Café Americano Regular: agua caliente y doble shot de espresso',
    'Café Americano LC: agua caliente y doble shot de espresso, con unas gotitas de leche caliente',
    'Café Single Espresso: un solo shot de espresso',
    'Café Doble Espresso: dos shots de espresso'
    ];

const productosCafeLeche = [
    'Café Latte Regular: doble shot de espresso y leche', 
    'Café Latte Caramel: doble shot de espresso y leche, con caramelo.'
]

// usando CONCAT (une arrays)
const todosLosProductos = productosSoloCafe.concat(productosCafeLeche);

// usando JOIN (lo que va entre elementos)
document.write(todosLosProductos.join(';<br>'));

// PRODUCTOS NUEVOS *****************************

document.write ('<br> <br>PRODUCTOS NUEVOS: <hr><br>');

const productosNuevos = [
    'Café Capuchino: doble shot de espresso, leche y chocolate arriba',
    'Café Moka: chocolate fundido, doble shot de espresso, leche y chocolate arriba'
];

// usando SPREAD OPERATOR (une arrays)
const todosTodosLosProductos = [ ...todosLosProductos, ...productosNuevos];

// usando JOIN (lo que va entre elementos)
document.write (productosNuevos.join(';<br>'));

// PRODUCTOS CON LECHE *****************************

// usando SLICE (copia)
document.write ('<br><br>PRODUCTOS CON LECHE: <hr><br>');
const todosCafesLeche = todosTodosLosProductos.slice(5,9)
document.write (todosCafesLeche.join(';<br>'))

// usando INDEXOF (indica posición)
console.log(todosTodosLosProductos.indexOf('Café Latte Regular: doble shot de espresso y leche'));

// usando INCLUDES (indica si existe)
console.log(todosTodosLosProductos.includes('Café Latte Regular: doble shot de espresso y leche'));
console.log(todosTodosLosProductos.includes('Café Latte'));

// usando REVERSE (muestra al revés los elementos)
console.log(todosTodosLosProductos.reverse());

// CARRITO *****************************

document.write ('<br><br> CARRITO DE COMPRAS: <hr><br>');

const carrito = [];

// usando SHIFT (elimina primer elemento)
productosSoloCafe.shift();

// usando POP (elimina último elemento)
productosSoloCafe.pop();

// usando SPLICE (borra de-a posición)
productosSoloCafe.splice(1,1);

// usando JOIN (lo que va entre elementos)
carrito.push (productosSoloCafe.join('<br> + '));
document.write (`${carrito} <br><br><br>`);





