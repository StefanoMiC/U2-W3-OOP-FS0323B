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
