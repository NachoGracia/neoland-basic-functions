//! iteración 1
//Completa la función que tomando dos números como argumento devuelva el más alto.

/*function sum(numberOne , numberTwo) {
    return numberOne > numberTwo;
  }

  let result = sum(3, 5);
  console.log(result)*/

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