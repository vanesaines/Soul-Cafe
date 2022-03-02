// Actividad 1

console.log(`Actividad 1`)

const todaslasnotas = [10, 3, 4, 7, 1]

let min = todaslasnotas[0];
for (let i = 0; i < todaslasnotas.length; i++) {
    if (todaslasnotas[i] < min) {
        min = todaslasnotas[i];
    }
}

console.log(`La nota más baja es ${min}`);

let max = todaslasnotas[0];
for (let i = 0; i > todaslasnotas.length; i++) {
    if (todaslasnotas[i] > max) {
        min = todaslasnotas[i];
    }
}

console.log(`La nota más alta es ${max}`);

// Actividad 2

let cafe = 3;
let pago = prompt('El cliente acaba de comprar un café de $3. Ingresa con cuánto abona:');
pago = parseInt(pago);
let vuelto = (pago - cafe);

if (pago >= cafe) {
    alert(`El vuelto es ${vuelto}`);
}


