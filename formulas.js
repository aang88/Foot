const carbonPerLitre = 2.3;
var totalCarbon = 0;
var litresUsedC = 0;
var litresUsedM = 0;
var litresUsedF = 0;
var totalHouse = 0;
var litresUsedB = 0;
var litresUsedS = 0;
var litresUsedG = 0;
var averagesecondary = 0;

function carEfficency() {
  var kmDriven = document.getElementById("car1").value;
  var numMembers = document.getElementById("car2").value;
  x = 10.28848; // km/l for car
  x = x / numMembers; 
  litresUsedC = kmDriven / x;
  litresUsedC = (litresUsedC*carbonPerLitre)/1000
  litresUsedC = litresUsedC.toFixed(3);
  document.getElementById('carTtl').innerHTML =  litresUsedC;
  totalCarbon = +totalCarbon+ +litresUsedC;
  // this is in KG, 2.3 is carbon per litre of fuel, divide by 1000 to convert to metric tonne
}

function ani()
{
  
}

function motorbikeEfficency() {
  var kmDriven = document.getElementById("mtrbike").value;
  x = 18.7063; // km/l for motorbike
  litresUsedM = kmDriven / x;
  litresUsedM = (litresUsedM*carbonPerLitre) / 1000;
  litresUsedM = litresUsedM.toFixed(3);
  document.getElementById("mTtl").innerHTML =  litresUsedM;
  totalCarbon=+totalCarbon+ +litresUsedM;
}

// formula for calulating the amount of carbon used per km per flight
function flightEfficency() {
  var kmFlown = document.getElementById("fli").value;
  x = 21.6823; // km/l per plane on average
  litresUsedF = kmFlown / x;
  litresUsedF = (litresUsedF*carbonPerLitre) / 1000;
  litresUsedF = litresUsedF.toFixed(3);
  document.getElementById('fTtl').innerHTML = litresUsedF;
  console.log(totalCarbon);
  console.log(litresUsedF);
  totalCarbon =  +totalCarbon + +litresUsedF;
  console.log(totalCarbon);
}

// formula for calculation the amount of carbon used
function house(){
  var electricityInput = document.getElementById("electricityInput").value;
  var naturalGasInput = document.getElementById("naturalGasInput").value;
  var coalInput = document.getElementById("coalInput").value; 
  var heatingOil = document.getElementById("heatingOil").value; 
  var numMembers = document.getElementById("numMembers").value;
  electricityEmission = electricityInput * 0.00078; // Convert Kwh to Metric Tons
  naturalGasEmission = naturalGasInput * 0.0004127691; // convert pound per Kwh to metric tons
  coalEmission = coalInput * 0.001011511; // multiply coal by tonne of carbon produced per KwH
  heatingOilEmission = heatingOil * 0.0009661517;
  subtotal = electricityEmission + naturalGasEmission + coalEmission;
  totalHouse = numMembers / subtotal;
  totalHouse = (totalHouse*carbonPerLitre) / 1000;
  totalHouse = totalHouse.toFixed(3);
  document.getElementById('hsTtl').innerHTML = totalHouse;

}

function numDays(numDays, energyConsumption) {
  return x*y
}

function calculateTotal()
{
  console.log(document.getElementById("cb1").checked)
  if(document.getElementById("cb1").checked == true)
  {
    totalCarbon = +totalCarbon + +totalHouse;
  } else if(document.getElementById("cb1").checked == false && totalHouse!=0) {
    totalCarbon = +totalCarbon - +totalHouse;
  }

   if(document.getElementById("cb2").checked == true)
  {
    totalCarbon = +totalCarbon + +litresUsedF;
  } else if(document.getElementById("cb2").checked == false && litresUsedF!=0) {
    totalCarbon = +totalCarbon - +litresUsedF;
  }

  if(document.getElementById("cb3").checked == true)
  {
    totalCarbon = +totalCarbon + +litresUsedC;
  } else if(document.getElementById("cb3").checked == false && litresUsedC!=0) {
    totalCarbon = +totalCarbon - +litresUsedC;
  }

  if(document.getElementById("cb4").checked == true)
  {
    totalCarbon = +totalCarbon + +litresUsedB + +litresUsedS  + +litresUsedG; 
  } else if(document.getElementById("cb4").checked == false && litresUsedC!=0) {
    totalCarbon = +totalCarbon - +litresUsedB + +litresUsedS  + +litresUsedG;
  }

  
  
  document.getElementById("cbnttl").hidden = false
  document.getElementById('ttl').innerHTML = totalCarbon.toFixed(3);;
}

function secondaryEmissions(){
  var secondary = document.getElementById("secid").value;
  var averagesecondary = secondary * (29240 / 111.82); // convert secondary by gram of carbon per dollar
  averagesecondary = averagesecondary / 1000000 // convert to tonne
  averagesecondary = averagesecondary.toFixed(3);
  totalCarbon = +totalCarbon + +averagesecondary;
  document.getElementById('averagesecondary').innerHTML = averagesecondary;
}

function transit() {
  if(document.getElementById('bus').checked) {
    x =  12.7543; // km/l for bus
    var kmCommuted = document.getElementById("transit1").value;
    litresUsedB = kmCommuted / x;
    litresUsedB = (litresUsedB*carbonPerLitre) / 1000;
    litresUsedB = litresUsedB.toFixed(3);
    totalCarbon = +totalCarbon + +litresUsedB;
    document.getElementById("tTtl").innerHTML =  litresUsedB;
  }
  
  if(document.getElementById('subway').checked) {
    x =  25.053719; // km/l for subway
    var kmCommuted = document.getElementById("transit1").value;
    litresUsedS = kmCommuted / x;
    litresUsedS = (litresUsedS*carbonPerLitre) / 1000;
    litresUsedS = litresUsedS.toFixed(3);
    totalCarbon =+totalCarbon+ +litresUsedS;
    document.getElementById("tTtl").innerHTML =  litresUsedS;
  }
  
  if(document.getElementById('go').checked) {
    x =  21.63981; // km/l for go train
    var kmCommuted = document.getElementById("transit1").value;
    litresUsedG = kmCommuted / x;
    litresUsedG = (litresUsedG*carbonPerLitre) / 1000;
    litresUsedG = litresUsedG.toFixed(3);
    totalCarbon =+totalCarbon + +litresUsedG;
    document.getElementById("tTtl").innerHTML =  litresUsedG;
  }
}
