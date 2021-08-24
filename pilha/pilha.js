var elementos = [];
var topo = -1;
const max = 10;

function push(num) {
  if (topo < max) {
    topo = topo + 1;
    elementos[topo] = num;
  } else {
    console.log('Pilha esta cheia');
  }
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo];
    topo = topo - 1;
    return num;
  } else {
    console.log('Pilha esta vazia!');
  }
}

//---Usando a pilha---//
push(10); //Adiciona um elemento na pilha
push(20); //Adiciona um elemento no final da pilha
push(30); //Adiciona um elemento no final da pilha
console.log(elementos); //Imprime o array com os elementos adicionados acima
console.log(pop()); //Retira o último elemento da pilha
console.log(pop()); //Retira o último elemento da pilha
console.log(pop()); //Retira o último elemento da pilha
