// console.log(window);

// console.log(Object.getOwnPropertyNames(window));

// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");
window.localStorage.setItem("firstName", "David");
localStorage.setItem("lastName", "Martinez");

const person = {
  fullName: "Lucyna Kushinada",
  location: "Night City",
};

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pineapple", "Mango", "Pawpaw"];

localStorage.setItem("fruits", JSON.stringify(fruits));

// GET ITEM FROM LOCAL STORAGE
console.log(localStorage.getItem("firstName"));

// REMOVE ITEM FROM LOCAL STORAGE
localStorage.removeItem("fruits");

// CLEAR LOCAL STORAGE
localStorage.clear();

localStorage.setItem("name", "Lucy");
localStorage.setItem("age", "20");

console.log(localStorage.key(0));
