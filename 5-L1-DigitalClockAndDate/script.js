var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // document.getElementById("day").innerHTML = days[d.getDay()];

    var months = ["January","February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
    // document.getElementById("month").innerHTML = months[d.getMonth()];

        var dateString = months[d.getMonth()] +'  '+ d.getDate() + ' ,'+days[d.getDay()];
        document.getElementById('dtField').innerHTML = dateString;


    let clock = document.getElementById('clock');

    setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    }, 1000)