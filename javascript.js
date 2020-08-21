/** Squared Number */
document.getElementById("Squared_Button").onclick = function(){
    let SquareNumber = Number(document.getElementById('Square_Number').value);
    document.getElementById("demo_square").innerHTML = squared_Numbers(SquareNumber);
    } 

function squared_Numbers(a) {
    var b = a*a; 
    return 'The result of squaring the number '+a+' is '+b;  
  }

  /** End Squared Number */
//****************************************************** */
//****************************************************** */
  /** Half Number */
document.getElementById("Half_Button").onclick = function(){
    let HalfNumber = Number(document.getElementById('Half_Number').value);
    document.getElementById("demo_half").innerHTML = Half_Numbers(HalfNumber);
    } 

function Half_Numbers(a) {
    var b = a/2; 
    return 'The result of halfing the number '+a+' is '+b;  
  }

  /** End Half Number */
//****************************************************** */
//****************************************************** */
  /** Percent Number */
document.getElementById("Percent_Button").onclick = function(){
  let PecentNumber = Number(document.getElementById('Percent_Number').value);
  let PercentValue = Number(document.getElementById('Percen_Value').value);
  document.getElementById("demo_percent").innerHTML = Percent_Numbers(PecentNumber,PercentValue);
  } 

function Percent_Numbers(a,b) {
  var x = (b/100)*a; 
  return x+' is '+b+'% of '+a;  
}

/** End Percent Number */
//****************************************************** */
//****************************************************** */
  /** Area Of Circle */
  document.getElementById("Radius_Button").onclick = function(){
    let CircleRadius = Number(document.getElementById('Radius').value);

    document.getElementById("demo_radius").innerHTML = Area_of_Circle(CircleRadius);
    } 
  
  function Area_of_Circle(a) {
    var area = parseFloat(Math.pow(a, 2) * Math.PI).toFixed(2);
    return 'The area for a circle with radius '+a+' is '+area;  
  }
  /** End Area Of Circle */
//****************************************************** */
//****************************************************** */
  /** The Calculator */
  document.getElementById("Number_Button").onclick = function(){
    let TheNumber = Number(document.getElementById('The_Number').value);
    document.getElementById("demo_number_halfed").innerHTML = Half_Numbers(TheNumber);
    document.getElementById("demo_number_squared").innerHTML = squared_Numbers(TheNumber);
    document.getElementById("demo_circle_area").innerHTML = Area_of_Circle(TheNumber);
    } 
  /** End The Calculator */

