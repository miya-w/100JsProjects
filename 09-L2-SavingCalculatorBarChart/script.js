
 function calculate() {
    var amount = parseInt( document.getElementById("amount").value ) ;
    var rate   = parseFloat( document.getElementById("rate").value ) ;
    var years  = parseInt( document.getElementById("years").value ) ;
    var total = 0;
    var totals = [ ] ;
    for ( var n = 0; n < years; n++){
      total = total * (1 + rate / 100) + amount * 12;
      totals.push( Math.round(total) );
    }
    document.getElementById("output").innerHTML =
    "After " + years + " years, you'll have saved " + Math.round(total) +
    "元";
    drawGraph( totals );

  }
  function drawGraph( arr ) {
    var canvas = document.getElementById("graph");
    var ctx = canvas.getContext("2d");
    var l = arr.length;
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var barw = w / l;
    var maxval = arr[ arr.length - 1];
    for (var n = 0; n < l; n++ ){
      var top = h - ( h * arr[n] / maxval);
      var left = n * barw;
      ctx.fillStyle="#3366cc";
      ctx.fillRect(left, top, barw, h);
      ctx.strokeStyle="#c2d1f0";
      ctx.strokeRect(left, top, barw, h);
    }
  }



// function Calculator(){
//     var amount = parseInt( document.getElementById('amount').value);
//     var rate = parseFloat( document.getElementById('rate').value);
//     var years = parseInt( document.getElementById('years').value);
//     // set for new array 
//     var total = 0;
//     var totals = [];
//     for(var n = 0; n < years; n++){
//         total = total * (1 + rate/100) + amount * 12;
//         totals.push( Math.round(total ));
//     }
//     document.getElementById('output').innerHTML = 
//     'After' + years + ' You will save '+ Math.round(total)+"dollars";
//         drawGraph( totals );
// }


// // arr = array
// function drawGraph( arr ){
//     var canvas = document.getElementById('graph');
//     var ctx = canvas.getContext('2d');
//     var l = arr.length;
//     var w = canvas.Width;
//     var h = canvas.height;
//     var barw = w / l;
//     var maxval = arr [ arr.length - 1];
//         for(var n = 0; n < 1; n++ ){
//             var top = h -(h * arr[n]/ maxval );
//             var left =  n * barw;
//             ctx.fillstyle = '#00aa00';
//             ctx.fillRect(left, top, barw, h);
//             ctx.strokeStyle="#000000";
//             ctx.strokeRect(left, top, barw, h);
//                                                                                                                                       )
//         }

// }