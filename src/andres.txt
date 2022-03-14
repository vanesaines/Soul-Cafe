// ########################################
// como definir variables
// ########################################
// var a = 1;
// let b = 1;
// const c = 1;

// var es global
{
    var a = 1;
}
a += 1;  // funciona

// let vale solo en el scope en el que esta definido
{
    let a = 1;
}
a += 1;  // ERROR

// const es como let, pero es una constante. No se puede reasignar.
{
    const a = 1;
}
a += 1;  // ERROR, a es constante


// ########################################
// Estructura de datos
// ########################################

// Arreglo / array / lista
let arreglo = [1, 2, 3, 'asd'];

// Se accede a valores así
// se lee: "sea h igual a arreglo en posicion 0"
let h = arreglo[0];  // h es el primer elemento de la lista.

arreglo[0] = 'fulanito';  // el primer elemento de arreglo es 'fulanito'

// Diccionario / hashmap / map / objeto
let cumpleanos = {
    'vane': {'edad': 27, 'sexy': 'si'},
    'andres': '06/03/1991',
    'teo': '16/12/1994',
    1: 10,
};

// console.log(cumpleanos['vane']['edad']);
console.log(cumpleanos.vane.edad)



