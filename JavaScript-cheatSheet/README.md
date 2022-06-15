## JavaScript Quick Reference / Cheatsheet

DOM- DocumentObjectModel

What is Node?
Node: every item in the Dom Tree is called "Node",There are two types of node -- a text node and a element node. 

#### Accessing Dom Elements
```javascript
# Query/ Get Element
// Returns the first element within the document that matches the specified group of selectors.
document.querySelector('.class');

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.
document.querySelectorAll('div.note, div.alert');
---
// Returns a reference to the element by its ID.
document.getElementById('id');

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName('class');

// Returns an HTMLCollection of elements with the given tag name.
document.getElementsByTagName('LI');


```
# Manipulating elements
### Create/ Clone Element

```javascript
document.createElement('div')
document.createTextNode('text')
---
// create new elments
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// create text nodes for new elements
var h1Text = document.createTextNode("This is a nice header text!");
var pText = document.createTextNode("This is a nice paragraph text!");

// attach new text nodes to new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(pText);

// elements are now created and ready to be added to the DOM.
```
### Manipulate
```javascript
innerText
innerHtml
```

#### Remove Node

```javascript
parentNode.removechild(nodeToRemove)

//example
//<ul id="menu">
//        <li>Home</li>
//        <li>Products</li>
//        <li>About Us</li>
//    </ul>
 let menu = document.getElementById('menu');
    menu.removeChild(menu.lastElementChild); 
    //output
    // Home 
    // Products
```
# Conditionals

```javascript
// If Else statements
var a = 1;
var b = 2;

if (a < b) {
  console.log('the if is true!');
} else {
  console.log('the if is false!');
}


// Multi If Else statements
var a = 1;
var b = 2;
var c = 3;

if (a > b) {
  console.log('a is bigger than b');
} else if (a > c) {
  console.log('but a is bigger than c');
} else {
  console.log('a is the smallest');
}


// Ternary operators. same as if else
var a = 1;
var b = 2;

a === b ? console.log('The statement is true') : console.log('The statement is false');

// switch statements
var a = 4;
switch (a) {
  case 'Oranges':
    console.log('Orange? really?');
    break;
  case 1:
    console.log('a is equal to 1.');
    break;
  case 2:
    console.log('a is equal to 2.');
    break;
  case 3:
    console.log('a is equal to 3.');
    break;
  case 4:
    console.log('a is equal to 4.');
    break;
  default:
    console.log('I run if no one else is true.');
}
```

# Loops

```javascript
// while loop
var i = 0;
while (i < 10) {
  console.log(i);
  i += 1
}


// do while loop
var i = 0;
do {
  console.log(i);
  i += 1
} while (i < 10)


// for loop
for (var i = 0; i < 10; i++) {
   console.log(i);
}

// for in statments
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  // check if property is inherited or not
  if (obj.hasOwnProperty(prop)) {
    console.log('obj.' + prop + ' = ' + obj[prop]);
  }
}
```
# Build In Objects
### Math
```Javascript
Math.random() //0.45
Math.round(123.45) //123
Math.floor(123.45) //123        
Math.ceil(123.45) //124
Math.min(7, 8, 6) //6
Math.max(7, 8 ,6) //8
Math.sqrt(16) //4
Math.pow(3,2) //9 3*3=9

```
### Date and Time
```javascript
//Sun Nov 18 2018 23:18:58 GMT+0530 (India Standard Time)
var d = new Date();
//1542563338408 miliseconds passed since 1970
Number(d);
Date("2017-06-23"); // date declaration
Date("2017"); // is set to Jan 01
Date("2017-06-23T12:00:00-09:45"); // date - time YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017"); // long date format
Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone

var d = new Date();
a = d.getDay(); // getting the weekday

getDate(); // day as a number (1-31)
getDay(); // weekday as a number (0-6)
getFullYear(); // four digit year (yyyy)
getHours(); // hour (0-23)
getMilliseconds(); // milliseconds (0-999)
getMinutes(); // minutes (0-59)
getMonth(); // month (0-11)
getSeconds(); // seconds (0-59)
getTime(); // milliseconds since 1970

var d = new Date();
d.setDate(d.getDate() + 7); // adds a week to a date

setDate(); // day as a number (1-31)
setFullYear(); // year (optionally month and day)
setHours(); // hour (0-23)
setMilliseconds(); // milliseconds (0-999)
setMinutes(); // minutes (0-59)
setMonth(); // month (0-11)
setSeconds(); // seconds (0-59)
setTime(); // milliseconds since 1970)
```

