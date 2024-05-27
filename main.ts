const firstName: string = "Fabian";
const lastName: string = "Doez";
console.log(firstName + " " + lastName);

class Book {
  pages: number;
  year: number;
  german: Boolean;
  title: string;

  constructor(pages: number, year: number, german: Boolean, title: string) {
    this.pages = pages;
    this.year = year;
    this.german = german;
    this.title = title;
  }
}

const firstBook: Book = new Book(
  430,
  2021,
  true,
  "Das dunkle Imperium - Götterseuche"
);
console.log(firstBook);

const secondBook: Book = new Book(345, 2008, false, "Keine Ahnung !!!");
console.log(secondBook);
