// in JS è possibile assegnare ad una variabile un valore tra i vari tipi primitivi: stringhe, numeri, boolean, undefined, null, symbol...

// qualsiasi valore NON PRIMITIVO entra a far parte della famiglia degli OGGETTI

// copiare una NON PRIMITIVA ci farà copiare solo la sua REFERENZA (indirizzo in memoria)

// un oggetto è un gruppo di proprietà e metodi delimitati da parentesi graffe {}
// al suo interno può potenzialmente contentere un numero illimitato di coppie chiave-valore

const obj = {}; // <--- oggetto vuoto dichiarato con NOTAZIONE LETTERALE

const dog = {
  breed: "Labrador",
  age: 2,
  bark: function () {
    // metodo di dog
    console.log("bau");
  },

  angryBark: function () {
    console.log("WOOOOFFFF");
  }
};

dog.bark();
dog.bark();
dog.angryBark();
dog.bark();
dog.bark();

const propertyName = "jump-height";

const cat = {
  // se la chiave non rispetta la nomenclatura standard di JS
  "fur-type": "long and fluffy",
  "date.of.adoption": "01/01/2020",
  [propertyName]: "2mt",
  area: { state: "Italy", region: "Tuscany" } // REFERENZA, sotto oggetto di cat.
};

console.log(cat["date.of.adoption"]);
console.log(cat["jump".concat("-height")]);

// CREAZIONE PER DEFINIZIONE

console.log(cat);
cat.name = "furball";
console.log(cat);

const rabbit = {
  color: "brown",
  eat: function (food) {
    console.log("Rabbit is eating " + food);
  }
};

rabbit.eat("carrot");
rabbit.eat("lettuce");

console.log(rabbit);

delete rabbit.color;
rabbit.furColor = "chocolate";

console.log(rabbit);

// possiamo dire che gli oggetti in JS sono entità "dinamiche", possono evolversi/modificarsi nel tempo durante l'esecuzione dello script.

// una primitiva si copia completamente con un valore identico, ma distinto.
let x = 10;
let y = x;

x = 20; // cambiare il valore di x a questo punto, non inficerà in nessun modo il valore precedentemente assegnato a y

console.log(x);
console.log(y);

// const cat2 = cat; // PECCATO CAPITALE! DA NON FARE MAIIII PER CLONARE UN OGGETTO!!!!!

// cat2.name = "peggy";
console.log(cat);

// const garfield = Object.assign({}, cat, dog); // SHALLOW COPY - non è una copia profonda, copierà solo il primo livello. sotto referenze andranno copiate separatamente
const garfield = { ...cat, area: { ...cat.area } }; //  - non è una copia profonda, copierà solo il primo livello. sotto referenze andranno copiate separatamente

garfield.name = "Garfield";
garfield.area.region = "FVG";
console.log(garfield);
console.log(cat);

// DEEP COPY/CLONE tramite conversione dell'oggetto in stringa (tramite notazione JSON) e la riconversione ad oggetto immediatamente successiva
const catStringified = JSON.stringify(cat);
const cat3 = JSON.parse(catStringified);
// fare ciò ci permette di slegarci dalle referenze iniziali e di avere nuove entità su tutti i livelli

cat3.area.region = "Lazio";
console.log(cat3);
console.log(cat);

// un'alternativa al deep copy tramite JSON stringify/parse è data oggi dalla funzione nativa structuredClone (preferibile)
const cat4 = structuredClone(cat); // DEEP COPY/CLONE (NATIVO in JS)
cat4.area.state = "US";
console.log(cat4);
console.log(cat);
