## What I have learned?



### JavaScript Used


- e.target.value 
[stackOverflow](https://stackoverflow.com/questions/45624780/e-target-value-on-an-input-field-reactjs-how-does-it-work)
The "e" is the argument of an event handler you attach to a certain event on a certain component... in this case the onFilterTextInput event. Events are objects with certain properties, and e.target almost always represents a DOM element.

Thus e.target.value is the value property of some DOM element, in this case that means the text entered in the search input. 
### Example:
[codepen](https://codepen.io/Dillion/pen/MWWyEXY)
```html
<div id='container'>
    <input id='input' class='paragraph'>
    <p>After typing, click outside the input to see the changes</p>
    <h1 id='info'></h1>
</div>
<script>
let input = document.querySelector('#input');
let info = document.querySelector('#info');
function eventController(event) {
info.innerHTML = event.target.value;
}
input.addEventListener('change', eventController, false) 
</script>

```
[false ](https://stackoverflow.com/questions/5657292/why-is-false-used-after-this-simple-addeventlistener-function)
[Bubbling and capturing](https://javascript.info/bubbling-and-capturing)

- main.innerHTML = marked(value)
take main and update the inner HTML to the marked version of that value.

-  document.body.appendChild(note)

- 
## Time to Code

- 1 hr

## the source of code : 
[50projects- NoteApp](https://github.com/bradtraversy/50projects50days/tree/master/notes-app)