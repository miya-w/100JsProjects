### Local Storage [Window localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
The localStorage object allows you to save key/value pairs in the browser.
- The localStorage object stores data with no expiration date.
- The data is not deleted when the browser is closed, and are available for future sessions.
- It is limited to about 5MB and can contain only strings.[Storage for the web](https://web.dev/storage-for-the-web/)
- it's recommended not to store any sensitive information in local storage.


### LOCAL STORAGE METHODS
- setItem(): Add key and value to localStorage
- getItem(): This is how you get items from localStorage
- removeItem(): Remove an item by key from localStorage
- clear(): Clear all localStorage
- key(): Passed a number to retrieve the key of a localStorage

- window.localStorage.setItem("key", "value");
```javascript
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

```