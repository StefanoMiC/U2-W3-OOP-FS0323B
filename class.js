// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

// let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

class Person {
  // qui dentro definisco la classe
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
}

const marioRossi = new Person("Mario", "Rossi", "mario.rossi@gmail.com");

console.log(marioRossi);

class House {
  constructor(squareMeters, numberOfRooms) {
    this.squareMeters = squareMeters;
    this.numberOfRooms = numberOfRooms;
  }

  // metodo della classe, si dichiara senza keyword (let, const, function)

  generateReport() {
    return (
      "Ciao! sono una casa e ho queste dimensioni: " +
      this.squareMeters +
      "mq" +
      " e ho " +
      this.numberOfRooms +
      "stanze"
    );
  }
}

const bigHouse = new House(500, 10);
const tinyHouse = new House(50, 1);

console.log(bigHouse);
console.log(tinyHouse);

console.log(bigHouse.generateReport());
console.log(tinyHouse.generateReport());

class Developer extends Person {
  constructor(name, surname, email, knownLanguages) {
    // super invoca il costruttore della classe da cui Developer si estende (Person)
    // Person è definita la SUPERCLASSE di Developer
    super(name, surname, email);
    this.knownLanguages = knownLanguages;
  }
}

const stefanoDev = new Developer("Stefano", "Miceli", "ste.mic@gmail.com", ["HTML", "CSS", "JavaScript"]);

console.log(stefanoDev);

class SeniorDeveloper extends Developer {
  constructor(name, surname, email, knownLanguages, specialty) {
    super(name, surname, email, knownLanguages);
    this.specialty = specialty;
  }

  showOff() {
    console.log("I'm an experienced developer! My specialty is " + this.specialty + "!!!");
  }
}

const seniorDev = new SeniorDeveloper("Stefano", "Miceli", "ste.mic@gmail.com", ["HTML", "CSS", "JavaScript"], "React");
console.log(seniorDev);

seniorDev.showOff();

class Computer {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    return "il mio computer è un: " + this.brand;
  }
}

const macbook = new Computer("Apple");
const surface = new Computer("Microsoft");
const xps = new Computer("Dell");

console.log(macbook.showBrand());
console.log(surface.showBrand());
console.log(xps.showBrand());

class ComputerModel extends Computer {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  showComplete() {
    return this.showBrand() + ", con modello: " + this.model;
  }
}

const xps17 = new ComputerModel("Dell", "XPS 17");

console.log(xps17);
console.log(xps17.showComplete());
console.log(xps17.showBrand());
