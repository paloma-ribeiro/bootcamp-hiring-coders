//boas práticas: nome da função: verbo; CamelCase

//função com um parametro
function sayHello(name) {
  console.log('Helo ' + name);
}

sayHello('Paloma');

//função com dois parametros
function sayHi(name, lastName) {
  console.log('Hi ' + name + ' ' + lastName);
}

sayHi('Paloma', 'Ribeiro');

//função que retorna uma operação
function sum(a, b) {
  return a + b;
}

console.log(sum(40, 60));
