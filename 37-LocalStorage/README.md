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