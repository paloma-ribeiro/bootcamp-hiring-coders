//definindo um array
var colors = ['black', 'white', 'yellow', 'green', 'blue'];

//percorrendo o array e imprimindo cada elemento na tela
console.log('Iterando um array');
for (var i = 0; i < 5; i++) {
  console.log(colors[i]);
}

//estrutura de repetição for
console.log('For');

for (var i = 1; i < 10; i++) {
  console.log(i);
}

//estrutura de repetição while
//o comando é executado depois da verificação da condição
console.log('While');

var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

//estrutura de repetição do while
//o comando é executado antes da verificação da condição
console.log('Do While');

var i = 1;

do {
  console.log(i);
  i++;
} while (i < 10);
