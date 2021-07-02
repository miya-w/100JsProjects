
function savingCalculator(){
    var amount = parseInt( document.getElementById('amount').value);
    var rate = parseFloat( document.getElementById('rate').value);
    var years = parseInt( document.getElementById('years').value);
    var total = 0;
    for(var n = 0; n < years; n++){
        total = total * (1 + rate/100) + amount * 12;
    }
    document.getElementById('output').innerHTML = 
    'After' + years + ' You will save '+ Math.round(total)+"dollars"

}