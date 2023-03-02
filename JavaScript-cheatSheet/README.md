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
# JavaScript Operators
```
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)

### JavaScript Comparison Operators

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

### JavaScript Logical Operators

&&	logical and
||	logical or
!	logical not


```
# JavaScript Objects { }
### Objects & Methods
Real Life Objects, Properties, and Methods
In real life, a car is an object. A car has properties like weight and color, and methods like start and stop
img[]()

- Accessing Object Properties
  You can access object properties in two ways:
  1. objectName.propertyName
  2. objectName["propertyName"]

Objects can also have methods. Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions

```html
<h2>JavaScript Objects</h2>

<p id="demo"></p>

<script>
// Create an object:
const car = {
  type:"Fiat", 
  model:"500", 
  color:"white",
  drive: function(){
    return this.car.type;
  }
  };

// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type + ", the model is "+ car.model+ " and the color is "+ car.color ;

//OutPut: The car type is Fiat, the model is 500 and the color is white
</script>
```
### *** This

In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

# JavaScript Array

An array is a special variable, which can hold more than one value:
Using an array literal is the easiest way to create a JavaScript Array.
Syntax:
```javascript
const array_name = [item1, item2, ...];   
```
Array elements are accessed using their index number:
```javascript
Array indexes start with 0:
[0] is the first array element
[1] is the second
[2] is the third ...
```

### JavaScript Array Methods

```javascript
// toString() - The JavaScript method toString() converts an array to a string of (comma separated) array values.
// The join() method also joins all array elements into a string.
// The pop() method removes the last element from an array: fruits.pop();
// The push() method adds a new element to an array (at the end) & The push() method returns the new array length:fruits.push("Kiwi");
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:fruits.unshift("Lemon");

<p>The push() method returns the new array length:</p>

<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

//js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML = fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;


// OutPut: 
// 5
// Banana,Orange,Apple,Mango,Kiwi

// Shift 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;
//OutPut : Orange,Apple,Mango
document.getElementById("demo3").innerHTML = fruits.shift();
//OutPut: Banana

```
### JavaScript Array Iteration
Array iteration methods operate on every array item.
```
// The forEach() method calls a function (a callback function) once for each array element.
// The map() method creates a new array by performing a function on each array element.
// The filter() method creates a new array with array elements that pass a test.
// The more Methods can be find in the W3C school 
```
```javascript
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value) {
  return value > 18;
}
// OutPut : 45,25
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

