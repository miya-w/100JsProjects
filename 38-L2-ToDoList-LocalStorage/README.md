### ToDoList-LocalStorage

```javascript
window.onload = function () {
  displayTask();
};
``` 

```javascript
// GET TASKS FROM THE LOCAL STORAGE
function getTasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}
```

```javascrßipt
//   Save task to local storage
function addTaskToLS() {
  getTasks();
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
}
```
