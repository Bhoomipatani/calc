//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    //validate input
    if (billAmt === "" || serviceQual == 0||numOfPeople==" ") {
      alert("Please enter values");
      return;
    }

     else {
      document.getElementById("totalTip").display ;
    }
  
    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
 
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };