
// Q 1;
let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
  { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
 ];

   // To Add a book
 function addBook(title, author, libraryID) {
   const newBook = { title, author, libraryID };
   libraryBooks.push(newBook);
   return newBook;
 }
  
 const newBook = addBook("New Book Title", "Andemariam Semere", 5250);
 console.log("Newly Created Book:", newBook);
   
    // To get title

 function getTitles() {
   const titlesArray = libraryBooks.map(book => book.title);
   return titlesArray.sort();
 }
 const allTitles = getTitles();
 console.log("All Book Titles:", allTitles);
  
    // To find a book

 function findBooks(keyword) {
   const matchingBooks = libraryBooks.filter(book => book.title.includes(keyword));
   return matchingBooks.sort((a, b) => a.author.localeCompare(b.author));
 }
 const keyword = "Road";
 const foundBooks = findBooks(keyword);
 console.log(`Books containing "${keyword}" in the title:`, foundBooks);

 //Q 2,
function myMap(arr, fun){
  return arr.reduce((accumulate, current, i, array) => {
      accumulate.push(fun(current, i, array));
      return accumulate;}, []);
}
let myArray = [1,2,3,4];
let cube = myMap(myArray, x => x * x *x);
console.log(cube);