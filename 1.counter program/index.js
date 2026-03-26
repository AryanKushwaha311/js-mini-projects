
const increaseBtn = document.getElementById("incBtn");
const decreaseBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counting")
let count = 0;

increaseBtn.onclick=function(){
    count++;
    counter.textContent=count;
}

decreaseBtn.onclick = function(){
    count--;
    counter.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}