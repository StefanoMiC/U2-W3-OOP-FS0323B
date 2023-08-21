// gli oggetti in JS sono semplici da realizzare --> {}, fin tanto che ne creiamo pochi...
// il problema arriva quando abbiamo la necessità di crearne molti in serie, tutti anonimi e indipendenti, con stesse coppie chiave/valore

const person = {
  name: "Mario",
  surname: "Rossi",
  address: "via dell'impossibile, 3",
  email: "mario.rossi@gmail.com",
  showName: function () {
    return this.name + " " + this.surname;
  }
};

const person2 = {
  name: "Mario",
  surname: "Verdi",
  address: "via dell'ammiraglia, 23",
  email: "mario.verdi@gmail.com",
  showName: function () {
    return this.name + " " + this.surname;
  }
};

// per aiutarci a scrivere oggetti in serie fatti con la stessa struttura
// entrano in gioco le funzioni costruttrici (constructor functions)

// camelCase -> prima lettera minuscola e le altre maiuscole (gobba di cammello)
// PascalCase -> tutte le lettere iniziali delle parole maiuscole (inclusa la prima)

// dovrà essere una funzione classica e non arrow.
// le arrow function non possono essere delle costruttrici

// la funzione costruttrice genera l'istanza di un oggetto a partire dalla stessa matrice

// creaimo lo stampo che genererà tanti oggetti simili (istanze)
const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.showName = function () {};
};

// per far generare l'oggetto alla funzione costruttrice dovremo implementare l'utilizzo della keyword "new"
const giuseppeVerdi = new Person();
console.log(giuseppeVerdi);
giuseppeVerdi.name = "Giuseppe";
giuseppeVerdi.surname = "Verdi";
console.log(giuseppeVerdi);

// un nuovo stampino più dinamico che accetta dei parametri per assegnare il valore alle proprietà immediatamente
const DynamicPerson = function (name, surname, address, email, showName) {
  this.name = name;
  this.surname = surname;
  this.address = address;
  this.email = email;
  this.showName = showName;
};

// mario e wario vengono generati da subito come oggetti con tutte le proprietà necessarie
const marioSuper = new DynamicPerson("Mario", "Super", "Yoshi Island", "super.mario@gmail.com", function () {});
const warioSuper = new DynamicPerson("Wario", "Super", "Castle", "super.wario@gmail.com", function () {});
console.log(marioSuper);
console.log(warioSuper);

DynamicPerson.prototype.sayHello = function () {
  console.log("hello boys and girls, I'm " + this.name + " " + this.surname);
};

marioSuper.sayHello();
warioSuper.sayHello();
