
const Fahrenhiet =  document.getElementById("toFahrenheit");
const Celsius = document.getElementById("toCelsius");
const textbox = document.getElementById("text-box");
const result = document.getElementById("result");
let temp;

function convert(){

    if(Celsius.checked){
        temp = (textbox.value-32)/1.8;
        result.textContent = temp;
    } 
    else if(Fahrenhiet.checked){
         temp = (textbox.value * 1.8)+32;
         result.textContent = temp;
    }
    else{
        result.textContent = "Select a unit";
    }
}
