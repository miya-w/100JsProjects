
// RER(Rest Energy Requirement)(RER) = 70 *(貓體重公斤）^0.75
// DER() Day Energy Requirement = RER* X

const btn = document.querySelector(".btn"),
  reset = document.querySelector(".reset");
  result_1 = document.querySelector(".result_1"),
  result_2 = document.querySelector(".result_2"),
  result_3 = document.querySelector(".result_3"),
  result_4 = document.querySelector(".result_4")
btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  // let age = document.querySelector(".age").value;
  let weight = document.querySelector(".weight").value;


  // Validate Input
  if (weight=== "" || isNaN(weight)) {
    return (result.innerHTML = "Provide a valid Weight!");
  }

  else {
    // height = height / 100;
    let Cal_1 = Math.round(Math.pow(weight, 0.75)* 70 * 0.8);
    let Cal_2 = Math.round(Math.pow(weight, 0.75)* 70 * 1.2);
    let Cal_3 = Math.round(Math.pow(weight, 0.75)* 70 * 1.4);
    let cal_4 = Math.round( weight * 60) ;


    console.log(Cal_1);
    console.log(Cal_2);
    console.log(Cal_3);
    console.log(cal_4);
    //   Categorize result
    result_1.textContent = "Less active relax cat : "+ Cal_1+" KCal";
    result_2.textContent = "Modereate active cat : "+ Cal_2+" KCal";
    result_3.textContent = "Active explorer cat : " + Cal_3+" KCal";
    result_4.textContent = "your cat needs water : "+  cal_4+ " ml"+" per day";

  }

}




