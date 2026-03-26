const min = 1;
const max = 6;
const result1=document.getElementById("myLabel-1");
const result2=document.getElementById("myLabel-2");
const result3=document.getElementById("myLabel-3");

document.getElementById("btn-1").onclick=function(){
    let randomNum1=Math.floor(Math.random()* (max-min+1))+min;
    let randomNum2=Math.floor(Math.random()*(max-min+1))+min;
    let randomNum3=Math.floor(Math.random()*(max-min+1))+min;

    result1.textContent=randomNum1;
    result2.textContent=randomNum2;
    result3.textContent=randomNum3;
}
