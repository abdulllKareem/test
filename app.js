let max=prompt("enter max number : ");
let random=(Math.floor(Math.random()*max)+1);

let guess=prompt("guess a number: ");
while(true){
    if(guess=="quit"){
        console.log("user quits!!");
        break;
    }
    if(guess==random){
        console.log("congrats your guess is correct");
        break;
    }
    else if(guess<random){
        guess=prompt("your guess is small. Please try again");
    }
    else{
        guess=prompt("your guess is large. Please try again");
    }
}