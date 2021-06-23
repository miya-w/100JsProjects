//Dom element
const time = document.getElementById('time')
const greet = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')


var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("day").innerHTML = days[d.getDay()];

var months = ["January","February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
// document.getElementById("month").innerHTML = months[d.getMonth()];

    var dateString = months[d.getMonth()] +'  '+ d.getDate() + ' ,'+days[d.getDay()];
    document.getElementById('dtField').innerHTML = dateString;

    setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
    }, 1000)

          function greeting(){
            let hour = d.getHours()

            if( hour > 17){
                greet.innerHTML =  'Good Evening!';
               
                
            }else if(hour > 12){
                greet.innerHTML =  'Good Afternoon!';
                

            }else{
                message.innerHTML =  'Good Morning!';
                
            }

        }

        greeting();

    // get the Name

    function getName(){
        if(localStorage.getItem('name')=== null){
            let name = document.getElementById('name')
            name.textContent = ['Enter name']
        }else{
            let name = document.getElementById('name')
            name.textContent = localStorage.getItem('name');
        }

    }

    getName();



    // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//timer

