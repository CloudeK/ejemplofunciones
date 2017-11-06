"use strict"

/**
 * @fileOverview Este archivo contiene ejemplos de funciones con for
 * @author Jose Lagoa <joselagoayt99@gmail.com
 * @version 0.1
 */

/**
 * @description SumaArray Suma los valores de un array
 * @param {Array} numeros Array de números;
 * @return {Number}
 */
function SumaArray(numeros) {
    let suma = 0;
    for (let a of numeros) {
        suma = suma + a;
    }
    return suma;
}
let sumavalor = SumaArray([2, 3, 4, 5]);
console.log(sumavalor);


function SumaArray2(numeros) {
    let suma = 0;
    for (let pos in numeros) {
        suma = suma + numeros[pos];
    }
    return suma;
}
let sumavalor2 = SumaArray2([2, 3, 4, 5]);
console.log(sumavalor2);

function SumaArray3(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}
let sumavalor3 = SumaArray3([2, 3, 4, 5]);
console.log(sumavalor3);

function BuscarAlumno(){
    
}