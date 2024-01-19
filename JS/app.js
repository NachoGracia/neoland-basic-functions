//! iteración 1
//Completa la función que tomando dos números como argumento devuelva el más alto.

//?  con arrow y ternario

const comparar = (numberOne, numberTwo) => {
  return numberOne > numberTwo ? numberOne : numberTwo;
};

let resultado = comparar(8, 3); //creo una let nueva HAY RETURN, para invocar a la función con los parámetros 8 y 3
console.log("🚀 ~ resultado:", resultado);

//? con if y else:

const comp = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
};

let result = comp(1, 5); //creamos let pq hay RETURN.
console.log("🚀 ~ result:", result);

//! iteracion 2 --------------

/*Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
*/

//?function arrow, recorrer con for of y condicionar if else

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

let maxcadena = "";

const palabraMasLarga = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxcadena.length) {
      maxcadena = array[i];
    }
  }
  return maxcadena;
};

const palabraLarga = palabraMasLarga(avengers);
console.log("🚀 ~ palabraLarga:", palabraLarga);

//! iteracion 3

/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función:
*/
const numbers = [1, 2, 3, 5, 45, 37, 58];

const suma = numbers.reduce((acc, numero) => acc + numero);

console.log(`La suma de los números es ${suma}`);

//! iteration 4

/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numeros = [12, 21, 38, 5, 45, 37, 6];

const promedio =
  numeros.reduce((accumulator, currentValue) => accumulator + currentValue) /
  numeros.length;
console.log("🚀 ~ promedio:", promedio);

//! iteracion 5---------------------------------------------------

/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario 
cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const sumaNumber = (array) => {
  let numerosSumados = 0;
  let longString = 0;

  for (let element of array) {
    if (typeof element === "number") {
      numerosSumados += element;
    }
    if (typeof element === "string") {
      longString += element.length;
    }
  }
  return `La suma de los números es ${numerosSumados}, y la suma de la longitud de los string es ${longString}`;
};

sumaNumber(mixedElements);
console.log("🚀 ~ sumaNumber:", sumaNumber(mixedElements));

//! iteracion 6---------------------

/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados.
 Puedes usar este array para probar tu función:*/

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const comidaSinDuplicar = (array) => {
  let sinRepetidos = [];

  array.forEach((comidas) => {
    if (!sinRepetidos.includes(comidas)) {
      sinRepetidos.push(comidas);
    }
  });
  return `Este es el nuevo menú: ${sinRepetidos}`;
};

const menuFinal = comidaSinDuplicar(duplicates);
console.log("🚀 ~ menuFinal:", menuFinal);

//! ---------ABAJO VERSÓN ANTERIOR CON FOR
/*for (let i=0; i<array.length; i++){

  if (!sinRepetidos.includes(array[i])) {
    sinRepetidos.push(array[i]);

  } 
}
return `Este es el nuevo menu: ${sinRepetidos}`
  }
  
comidaSinDuplicar(duplicates);
console.log("🚀 ~ comidaSinDuplicar(duplicates):", comidaSinDuplicar(duplicates))*/
