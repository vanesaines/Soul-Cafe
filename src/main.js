// Actividad 1

console.log(`Actividad 1`);
console.log(`Vendemos 5 cafecitos con diferentes precios`);
console.log(`Calcular con JS el más barato y el más caro`);

const preciosDeCafe = [10, 3, 4, 7, 8]

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

// Actividad 2

console.log(`Actividad 2`)
console.log(`El prompt inicial se utiliza para facilitar la entrega del vuelto al cliente`);

let cafe = 3;
let pago = prompt('El cliente acaba de comprar un café de $3. Ingresa con cuánto abona:');
pago = parseInt(pago);
let vuelto = (pago - cafe);

if (pago >= cafe) {
    alert(`El vuelto es ${vuelto}`);
}


