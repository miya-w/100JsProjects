## GetUser
![UserProject](https://github.com/miya-w/100JsProjects/blob/main/28-L3-AjaxAndFetchAPI%20/image/p28AjexFetch.png)

## HTTP request
- What is a HTTP means
    - HTTP (Hypertext Transfer Protocol) is the set of rules for transferring files -- such as text, images, sound, video and other multimedia files -- over the web.
- An HTTP method -> sometimes referred to as an HTTP verb, indicates the action that the HTTP request expects from the queried server.
    - ex. GET, POST


### AJAX Vs. Fetch 
---
#### What is AJAX? [W3C-What is AJAX?](https://www.w3schools.com/whatis/whatis_ajax.asp)
- AJAX = Asynchronous JavaScript And XML(the ‘x’ from AJAX refers to XML).
- AJAX is not a programming language.
- A browser built-in XMLHttpRequest object (to request data from a web server)

XML  is now being replaced by JSON (JavaScript Object Notation). It has some built-in structures like arrays, but parsing and writing is much faster. Even though devs use AJAX with JSON instead of AJAX with XML, the name of the concept remains AJAX (AJAX stands for Asynchronous JavaScript And XML)

#### About fetch [JavaScript | fetch() Method](https://www.geeksforgeeks.org/javascript-fetch-method/)
- Fetch - more recent
- The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that return the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.
- Supported by modern brower except IE.
```javascript
fetch('url')           //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));

```
### What else have I learned?
- event.preventDefault()
    - The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.



---
Resources
- [Medium-Is AJAX getting replaced by fetch API()?](https://medium.com/@reemshakes/is-ajax-getting-replaced-by-fetch-api-55207234793f)
- [JavaScript | fetch() Method](https://www.geeksforgeeks.org/javascript-fetch-method/)
- [How To Use the JavaScript Fetch API to Get Data](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- [JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)
- [What is HTTP protocol? Introduction to HTTP for Testers](https://scalac.io/blog/what-is-http-protocol-introduction-to-http-for-testers/)
- [What is HTTP](https://www.cloudflare.com/en-au/learning/ddos/glossary/hypertext-transfer-protocol-http/)
