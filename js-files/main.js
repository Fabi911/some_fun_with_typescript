var firstName = "Fabian";
var lastName = "Doez";
console.log(firstName + " " + lastName);
var Book = /** @class */ (function () {
    function Book(pages, year, german, title) {
        this.pages = pages;
        this.year = year;
        this.german = german;
        this.title = title;
    }
    return Book;
}());
var firstBook = new Book(430, 2021, true, "Das dunkle Imperium - Götterseuche");
console.log(firstBook);
var secondBook = new Book(345, 2008, false, "Keine Ahnung !!!");
console.log(secondBook);
