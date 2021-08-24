//Definição de classe em javascript
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  read() {
    return `Estou lendo ${this.title}`;
  }
}
//let book = new Book('Algoritmos', 'Brian', 500);
//console.log(book.read());

//Conceito de Herança em Javascript
class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

//let itBook = new ITBook('Algoritmos', 'Brian', 500, 'Algoritmos');
//console.log(itBook);

//Conceito de encapsulamento
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let person = new Person('Paloma');
person.name = 'Pah';
console.log(person.name);
