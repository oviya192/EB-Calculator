function Ebcalc(){
  let units = Number(document.getElementById("input").value);
  let bill = 0


    if(units<=50){
  bill  = units*0.75
}
else if(units <=150){
  bill = 50*0.75 + (units-50)*1.00
}
else if(units <=250){
  bill = 50*0.75 + 100*1.00 + (units-150)*1.30
}
else if(units>250){
  bill = 50*0.75 + 100*1.00 + 150*1.30 + (units-250) *1.50
}

let result = document.getElementById("show")
result.innerHTML = "Your Electricity Bill is " + "Rs." + bill

}