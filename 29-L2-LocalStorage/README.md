### LOCAL STORAGE
According to [W3C localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- The localStorage object allows you to save key/value pairs in the browser. 
- The localStorage object stores data with no expiration date.
- The data is not deleted when the browser is closed, and are available for future sessions.
- More information [Chrome DevTools View and edit local storage](https://developer.chrome.com/docs/devtools/storage/localstorage/?utm_source=devtools)
### LOCAL STORAGE METHODS
- setItem(): Add key and value to localStorage
- getItem(): This is how you get items from localStorage
- removeItem(): Remove an item by key from localStorage
- clear(): Clear all localStorage
- key(): Passed a number to retrieve the key of a localStorage

 window.localStorage.setItem("key", "value");
 
 ```javascript
// Set Item
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
//output -> Smith

 ```

 ### localStorage limitations
- localStorage is limited to 5MB across all major browsers
- localStorage is quite insecure as it has no form of data protection and can be accessed by any code on your web page
- localStorage is synchronous, meaning each operation called would only execute one after the other

 ### JSON.stringify()
 - Convert a JavaScript object into a string with JSON.stringify().
 ```javascript
    const obj = {name: "John", age: 30, city: "New York"};
    const myJSON = JSON.stringify(obj);
    document.getElementById("demo").innerHTML = myJSON;
    //output -> {"name":"John","age":30,"city":"New York"}
 ```