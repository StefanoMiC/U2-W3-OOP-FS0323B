// METODI e PROPRIETÀ STATICI nelle classi
// un metodo o una proprietà statici all'interno di una classe sono dei metodi
// e delle proprietà NON accessibili dalle ISTANZE della classe, ma solamente
// all'interno della classe stessa.

// anteponendo la keyword "static" rendiamo un metodo o una proprietà statici

class Article {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static isSameAuthor(articleA, articleB) {
    return articleA.author === articleB.author;
  }
}

const myArticle = new Article("L'importazna delle mantidi religiose", "Antonio Fracassi");
console.log(myArticle);
// myArticle è un'ISTANZA di Article

const articles = [
  new Article("Teoria delle stringhe", "Hopkins"),
  new Article("Pompei", "Angela"),
  new Article("Animali Fantastici", "Rawling"),
  new Article("Nerone", "Angela")
];

// per trovare isSameAuthor devo cercarlo all'interno della classe principale! NON nelle istanze

console.log(Article.isSameAuthor(articles[1], articles[3]));
