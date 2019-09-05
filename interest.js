window.onload = function(){
  var button = document.getElementById("calc");
  button.onclick = calculateInterest;

}
function calculateInterest(){
  var p  = document.getElementById("principal");
  var r = document.getElementById("rate");
  var t = document.getElementById("time");
  var result = document.getElementById("result");
  var resultRow = document.getElementById("resultRow");
  var principal = p.value;
  var rate = r.value;
  var time = t.value;

  if (isNaN(parseInt(principal)) || isNaN(parseInt(rate)) || isNaN(parseInt(time))) {
    resultRow.style.display = "none";
    console.log("nay");
    var classTag = document.getElementsByTagName('input');
    for(i = 0; i < classTag.length; i++){
      if(classTag[i].value == ""){
        classTag[i].value = "Empty!";
      }
    }
  }
  else{
    resultRow.style.display = "block";
    result.innerHTML = "The simple interest is " + ((parseInt(principal)*parseInt(rate)*parseInt(time))/100);
  }

}
