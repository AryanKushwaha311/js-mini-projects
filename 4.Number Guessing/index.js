const min = 1;
const max = 100;
const answer = Math.floor(Math.random()*(max-min+1)+min);

let attempt=0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess the number btw ${min} - ${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert(`This is not a valid number`);
    }
    else if(guess>max || guess<min){
        window.alert("Out of range");
    }
    else{
        if(answer > guess){
            window.alert("Too Low! please try again....");
            attempt++;
        }
        else if(answer < guess){
            window.alert("Too High! please try again...");
            attempt++;
        }
        else{
            window.alert(`You won! You take ${attempt} attempts`)
            running = false;
        }
    }
}