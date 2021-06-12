
document.getElementById('click').onclick = function convert(){
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inch').value);
     const results = document.getElementById('result');
    // 1 英呎(foot) = 12 英吋(inches), 1 英吋 = 2.54 公分
    // 12 × 2.54 = 30.48 (1英呎等於30.48公分)
    // 1 ÷ 30.48 = 0.032808399 (1公分等於0.032808399英呎)
 
    if (isNaN(feet) || isNaN(inches)){
         results.textContent = "Please enter a valid number!";
     } else if (feet < 0 ) {
         results.textContent = "Please enter a feet value > 0";
     } else if (inches < 0 || inches >= 12) {
         results.textContent = "Please enter an inch value between 0 and 12";
     } else {
    
    let total = (feet*12*2.54) + (inches*2.54);
     results.textContent = total + 'cm';  
        
 }}