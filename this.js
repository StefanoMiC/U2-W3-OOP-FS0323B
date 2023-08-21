// la keyword THIS
const person = {
  name: "Gianni",
  surname: "Morandi",
  // il THIS nel contesto di un METODO creato con keyword "function", assume come valore l'istanza dell'oggetto proprietario del metodo
  sayHello: function () {
    // la keyword "this" prende come valore la referenza dell'oggetto di riferimento, non è quindi un valore fisso.
    console.log("THIS", this);
    console.log("NAME", this.name);
  }
};

person.sayHello();

const mariaCallas = { ...person, name: "Maria", surname: "Callas" };
console.log(mariaCallas);

mariaCallas.sayHello();

const person2 = {
  name: "Gianni",
  surname: "Morandi",
  // il THIS nel contesto di un METODO creato con arrow function, assume come valore l'OGGETTO GLOBALE
  sayHello: () => {
    // NON USATE ARROW FUNCTION PER CREARE METODI
    // la arrow function eredita il "this" dal contesto lessicale, o per meglio dire, il livello superiore
    // il livello superiore sarà fuori dall'oggetto singer2 però... quindi l'oggetto globale e this.name non esisterà (chiaramente window.name non esiste)
    console.log("THIS", this); //THIS {}
    console.log("NAME", this.name); //NAME undefined
  }
};

person2.sayHello();

const person3 = {
  name: "Gianni",
  surname: "Morandi",
  // il THIS nel contesto di un METODO creato con arrow function, assume come valore l'OGGETTO GLOBALE
  sayHello: function () {
    console.log("1^ THIS", this); //THIS {}
    console.log("NAME", this.name); //NAME undefined

    const readSurname = function () {
      console.log("2^ THIS", this);
      console.log(this.surname);
    }.bind(this); // il bind si occupa di prendere il this nel contesto esterno e passarlo come this interno alla funzione.
    // è fondamentale in questo caso, o si perderebbe il riferimento al this interno alla funzione annidata.

    readSurname();
  }
};
person3.sayHello();

const person4 = {
  name: "Gianni",
  surname: "Morandi",
  skills: ["cantante", "influencer", "ospite televisivo"],
  // il THIS nel contesto di un METODO creato con arrow function, assume come valore l'OGGETTO GLOBALE
  sayHello: function () {
    console.log("1^ THIS", this); //THIS {}
    console.log("NAME", this.name); //NAME undefined

    // la arrow function torna molto molto utile nel caso in cui serva usare una funzione all'interno di un metodo e mantenere il riferimento al this del nostro oggetto
    const readSurname = () => {
      console.log("2^ THIS", this);
      console.log(this.surname);
    };

    readSurname();
  },

  //   showSkills: function () {
  //     console.log("THIS", this);
  //     this.skills.forEach(
  //       function (skill) {
  //         console.log("Mi chiamo " + this.name + " " + this.surname + " e sono un " + skill);
  //       }.bind(this)
  //     );
  //   }
  showSkills: function () {
    console.log("THIS", this);
    this.skills.forEach(skill => {
      // le arrow function sono pensate proprio per casi come questo in cui siamo obbligati ad usare una funzione definita dentro ad un altra funzione
      // normalmente perderemmo il contesto del this, ma grazie alla arrow function che eredita il this dal suo contesto lessicale o contesto esterno in questo caso,
      // avremo così mantenuto il valore del this del nostro oggetto di riferimento
      console.log("Mi chiamo " + this.name + " " + this.surname + " e sono un " + skill);
    });
  }
};
person4.showSkills();
