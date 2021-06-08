

function MagicBall(){

const name = document.getElementById('Name').value;
const question = document.getElementById('Question').value;
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Signs point to yes';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'You are in grave danger';
    break;
}
let msg1 = name + ' : '+ question;
let msg2 = '8 Magic Ball says: ' + 'My answer is '+ eightBall;

   var output1 = document.getElementById('output1');
    output1.innerHTML = msg1 + msg2;
  
}
    
