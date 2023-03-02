## What I have learned?

![todoList03](https://github.com/miya-w/100JsProjects/blob/main/32-L2-ToDoList03/image/p32-todoList.png)

```javascript
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = " ";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
```

### JavaScript Used
- paragraph.classList.add('paragraph-styling')

- inputField.value = " "; [W3C- Input Text value Property](https://www.w3schools.com/jsref/prop_text_value.asp)

  - The value property sets or returns the value of the value attribute of a text field.

  - The value property contains the default value OR the value a user types in (or a value set by a script).

```html

First Name: <input type="text" id="myText" value="Mickey">

<p>Click the button to display the value of the value attribute of the text field.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
</script>

//print: Mickey

```




### HTML DOM Element classList 
- The classList property returns the CSS classnames of an element.
[W3C classList](https://www.w3schools.com/jsref/prop_element_classlist.asp)

```javascript
.myStyle {
   text-decoration: line-through;
  padding: 16px;
}
</style>
function myFunction() {
  document.getElementById("myDIV").classList.toggle("myStyle");
}

```

## Time to Code

- 1 hr