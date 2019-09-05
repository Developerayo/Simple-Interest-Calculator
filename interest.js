window.onload = function(){
  var button = document.getElementById("calc");
  button.onclick = calculateInterest;

}
function calculateInterest(){
  var principalElement  = document.getElementById("principal");
  var rateElement = document.getElementById("rate");
  var timeElement = document.getElementById("time");
  var resultText = document.getElementById("result");
  var resultRow = document.getElementById("resultRow");
  var principal = principalElement.value;
  var rate = rateElement.value;
  var time = timeElement.value;

  if (isNaN(parseInt(principal)) || isNaN(parseInt(rate)) || isNaN(parseInt(time))) {
    resultRow.style.display = "none";
    var allInputs = document.getElementsByTagName('input');
    for(i = 0; i < allInputs.length; i++){
      if(allInputs[i].value == ""){
        allInputs[i].value = "Empty!";
      }
    }
  }
  else{
    resultRow.style.display = "block";
    resultText.innerHTML = "The simple interest is " + ((parseInt(principal)*parseInt(rate)*parseInt(time))/100);
  }

}
