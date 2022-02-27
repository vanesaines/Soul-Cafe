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