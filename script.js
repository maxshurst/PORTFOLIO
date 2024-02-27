const inputBox = document.getElementById('numberinput');
const box = document.getElementById('box');
const colorBox = document.getElementById('functionSelector');

inputBox.addEventListener('change',makebox);
functionSelector.addEventListener('change', colorchange);




function makebox() {
var N = inputBox.value;
 
box.style.width = (N*100).toString()+"px";
box.style.height = (N*100).toString()+"px";

   
  }  


function colorchange(){

    if (functionSelector.value === "blue") {
        box.style.backgroundColor =  'blue';
      }
      else if (functionSelector.value === "red") {
         box.style.backgroundColor = 'red';
      }
      else if (functionSelector.value === "yellow") {
        box.style.backgroundColor = 'yellow';
     }
    }
