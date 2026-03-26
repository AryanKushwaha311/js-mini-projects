const mySubmit = document.getElementById("mySubmit");
const myAge = document.getElementById("myAge");
const result = document.getElementById("resultElement");

mySubmit.onclick=function(){
    if(myAge.value >=18){
        result.textContent = "You are Eligible to vote"
    }
    else{
        result.textContent = "you must be 18 to vote...."
    }
}