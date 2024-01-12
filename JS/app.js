//! iteración 1
//Completa la función que tomando dos números como argumento devuelva el más alto.

/*function sum(numberOne , numberTwo) {
   
  }
*/
  
  const comp = (numberOne, numberTwo) => { 
    if (numberOne > numberTwo){
        //console.log(numberOne)
        return numberOne;
    } 
        else {
            //console.log(numberTwo)
            return numberTwo;
        }
}

let result = comp(1, 5);
console.log(result)

//! iteracion 2 ---------------------------------------------NO TERMINADA

/*Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const palabraMasLarga = (array) => {

let maxcadena = "";

for (let i = 0 ; i < array.length; i++ ) {
  if (array[i].length > maxcadena.length) {
    maxcadena = array[i]
  }
 
} 
return maxcadena;
}

const palabraLarga = palabraMasLarga(avengers);

console.log(palabraLarga)

//console.log(palabraMasLarga(avengers))


//! iteracion 3

/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función:
*/
const numbers = [1, 2, 3, 5, 45, 37, 58];


const suma = numbers.reduce((acc, numero) => acc + numero);

console.log(suma);

 
  
//! iteration 4

/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numeros = [12, 21, 38, 5, 45, 37, 6];

const promedio = numeros.reduce((accumulator, currentValue) => accumulator + currentValue) /numeros.length

console.log(promedio);






