//**Iteración #1: Buscar el máximo**
function suma (num1, num2){
    let resul;
    if (num1 > number2) {
        resul = number1
    } else{
      resul = number2
    }
    return resul
}

//**Iteración #2: Buscar la palabra más larga**
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function longestWord(param) {
  let longestWord = param[0];
     for(let i =0; i < longestWord.length; i++){
       if (param [i]&& (param[i].length > longestWord.length)){
        longestWord = param[i];
        console.log('Entro', longestWord);
       }
       
   }
   console.log('Retono', longestWord)
   return longestWord;
}

//**Iteración #3: Calcular la suma**

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let count = 0;
  for(let index =0; index < param.length; index++){
      count = count + param[index];
  }
  return count;
}
console.log(sumAll(numbersSum));

//**Iteración #4: Calcular el promedio**

const numbersAverage = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let average =sumAll (param) / param.length;
  return average
}

console.log(average(numbersAverage));

//**Iteración #5: Calcular promedio de strings**

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
let  count = 0;
for(let index = 0; index < param.length; index++) {
    if (typeof param[index] === 'string'){
      count += param[index].length
    } else{
      count += param[index]
    }
}
  return count
}

console.log(averageWord(mixedElements));

//**Iteración #6: Valores únicos**

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let newElements = [];
    for (let index = 0; index < param.length; index++) {
      if (!newElements.includes(param[index])){
        newElements.push(param[index]);
      }
    }
    return newElements;
  }
  
  console.log('Duplicados', duplicates);
  console.log('NO Duplicados', removeDuplicates(duplicates));

  //**Iteración #7: Buscador de nombres**

  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, name) {
    for(let index = 0; index < param.length; index++) {
      if (param[index] === name){
        return index
      }
    }
    return 'No hay resultado';
  }

  //Iteration #8: Contador de repeticiones
  
  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let count = {};
    for (let index = 0; index < param.length; index++){
      if (param[index] in count){
        count[param[index]]++
      } else{
        count[param[index]] = 1
      }
    }
    return count
  }
  console.log(repeatCounter(counterWords));