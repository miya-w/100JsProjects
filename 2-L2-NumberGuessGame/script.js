

var number =  Math.round(Math.random() * 100 +1);
tries = 0;

function newGame(){
    number =  Math.round(Math.random() * 100 +1);
    document.getElementById('guess').focus();
    document.getElementById('guess').select();
    tries = 0;
   
}



function checkGuess(){

    var guess = document.getElementById('guess').value;
    var msg = "";
    tries= tries + 1; 

    if(guess > number){
        msg = (guess + ' was too high.Try again');
    }
    else if(  guess < number){
        msg = (guess + ' was too low.Try again ');}
    
    else {
    msg = (guess + ' was the number! You win!');
    msg = (msg + ' try the new game.');
    msg = (msg +' You won in '+ tries + ' tries.');
    newGame();
    }
    var output = document.getElementById('output');
    output.innerHTML = msg;
    document.getElementById('guess').focus();
    document.getElementById('guess').select();
}





    
 

// var Myname = prompt('what is your name?');
// for (var n = 1; n<=10; n++){
// document.write(  Myname +' win!')
// }









