//FizzBuzz
//Divisivel por 3 => 'Fizz',
//Divisivel por 5 => 'Buzz',
//Divisivel por 3 e 5 => 'FizzBuzz',
//Se não for um número => 'Não é um número'
//Se não for divisivel nem por 3 e nem por 5 => Entrada

//let resultado = fizzBuzz(7);
//console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') return 'Não é um número';
  if (entrada % 3 === 0 && entrada % 5 === 0) return 'FizzBuzz';
  if (entrada % 3 === 0) return 'Fizz';
  if (entrada % 5 === 0) return 'Buzz';
  return entrada;
}

//Reverse a string

function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
}
let resultado = reverseString('Hello Gama Academy');

//Convert Celsius to Fahrenheit

function convertToFahrenheit(value) {
  return value * 1.8 + 32;
}
let result = convertToFahrenheit(40);
console.log(`O valor em Fahrenheit é: ${result}`);
