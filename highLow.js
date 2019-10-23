/* Ask how many dice would you like to use?
Capture said dice number with x
*/
var genNum;
//can I do multiple java sheets for the same website. is this effective or do I just need to make it work? do I plug it in the same way that one does with html? does this work with css?
// can functions not go in each other?
//on click this function makes these other two functions happen
function mainThing()    {
    outOf()
    genNum= generatedNumber();
    
    // startOver()
}
function diceRoll(){
    guessUser()
    highLow()
    lucky()
    
    
}

function generatedNumber() {
    //captures their answer
    let x = document.getElementById("outOfNumber").value;
    //goes to function diceRandom and assigns a random number
    let generateNum=diceRandom(x);
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    return generateNum;
    //document.getElementById("orgRoll").innerHTML = `You Rolled a(n) ${diceRolls}`;
}
function outOf() {
    //this function captures their response and prints their response appropriately
    let outOfNum = document.getElementById("outOfNumber").value;
    document.getElementById("outOfLocation").innerHTML = "Out of " + outOfNum;
}
function guessUser(){
    let userGuess = document.getElementById("userGuess").value;
    document.getElementById("guessLocation").innerHTML = "You Guessed " + userGuess;
    return userGuess;

}
function highLow(){ 
    if (guessUser()==genNum){
        let responseChoice = Math.random() * 10;
        responseChoice = Math.ceil(responseChoice)
        if (responseChoice==1) {
            document.getElementById("highLowLocation").innerHTML = "Sick! You just won a spaceship!";
        }
        if (responseChoice==2) {
            document.getElementById("highLowLocation").innerHTML = "Golly! You just won a giraffe!";
        }
        if (responseChoice==3) {
            document.getElementById("highLowLocation").innerHTML = "Ciao! You just won a trip to Italy!"; 
        }
        if (responseChoice==4) {
            document.getElementById("highLowLocation").innerHTML = "Calories! You just won unlimited chocolate!";
        }
        if (responseChoice==5) {
            document.getElementById("highLowLocation").innerHTML = "Great! You just won a genie!";
        }
        if (responseChoice==6) {
            document.getElementById("highLowLocation").innerHTML = "Oh Wow! You just won a best actor Oscar!";
        }
        if (responseChoice==7) {
            document.getElementById("highLowLocation").innerHTML = "Prestigious! You just won a pokemon!";
        }
        if (responseChoice==8) {
            document.getElementById("highLowLocation").innerHTML = "Tubular! You just won Thor's hammer!";
        }
        if (responseChoice==9) {
            document.getElementById("highLowLocation").innerHTML = "Fabulous! You just won a pretty penny!";
        }
        if (responseChoice==10) {
            document.getElementById("highLowLocation").innerHTML = "Amazing! You just won a pet zombie!";
        }
        

    }
    if (guessUser()>genNum){
        let responseChoice = Math.random() * 10;
        responseChoice = Math.ceil(responseChoice)
        if (responseChoice==1) {
            document.getElementById("highLowLocation").innerHTML = "Come and get HIGHer kissing my lips.";
        }
        if (responseChoice==2) {
            document.getElementById("highLowLocation").innerHTML = "It's over user you have the HIGH ground!";
        }
        if (responseChoice==3) {
            document.getElementById("highLowLocation").innerHTML = "Are you a bird? Cause you are HIGH!"; 
        }
        if (responseChoice==4) {
            document.getElementById("highLowLocation").innerHTML = "It may be legal to be HIGH in Col. This isn't col!";
        }
        if (responseChoice==5) {
            document.getElementById("highLowLocation").innerHTML = "YOU ARE TOO high!";
        }
        if (responseChoice==6) {
            document.getElementById("highLowLocation").innerHTML = "You might as well name your child HIGH!";
        }
        if (responseChoice==7) {
            document.getElementById("highLowLocation").innerHTML = "Are you on Mount Everest right now? You're HIGH!";
        }
        if (responseChoice==8) {
            document.getElementById("highLowLocation").innerHTML = "This guess is too HIGH!";
        }
        if (responseChoice==9) {
            document.getElementById("highLowLocation").innerHTML = "Are you not guessing too HIGH!?!";
        }
        if (responseChoice==10) {
            document.getElementById("highLowLocation").innerHTML = "Congrats! You just guessed too HIGH! Fail!";
        }

    }
    if (guessUser()<genNum){
        let responseChoice = Math.random() * 10;
        responseChoice = Math.ceil(responseChoice)
        if (responseChoice==1) {
            document.getElementById("highLowLocation").innerHTML = "Pull the LOWer. Wrong lower.";
        }
        if (responseChoice==2) {
            document.getElementById("highLowLocation").innerHTML = "How LOW can you go?";
        }
        if (responseChoice==3) {
            document.getElementById("highLowLocation").innerHTML = "Don't be a LOW!"; 
        }
        if (responseChoice==4) {
            document.getElementById("highLowLocation").innerHTML = "The depths to which you stoop are so LOW!";
        }
        if (responseChoice==5) {
            document.getElementById("highLowLocation").innerHTML = "YOU ARE TOO low!";
        }
        if (responseChoice==6) {
            document.getElementById("highLowLocation").innerHTML = "You might as well name your child LOW!";
        }
        if (responseChoice==7) {
            document.getElementById("highLowLocation").innerHTML = "Are you in a submarine? You're LOW!";
        }
        if (responseChoice==8) {
            document.getElementById("highLowLocation").innerHTML = "This guess is too LOW!";
        }
        if (responseChoice==9) {
            document.getElementById("highLowLocation").innerHTML = "Are you not guessing too LOW!?!";
        }
        if (responseChoice==10) {
            document.getElementById("highLowLocation").innerHTML = "Congrats! You just guessed too LOW! Fail!";
        }

    }
}




var clicks = 0;
function lucky()    {
    
document.getElementById("clicksSpace").innerHTML = clicks;
  clicks=clicks+1;
  document.getElementById("clicksSpace").innerHTML = clicks;
    if (guessUser()!=genNum){
        document.getElementById("luckyLocation").innerHTML = "Give up? You'll never guess the right number!";
    }
    else {
        document.getElementById("luckyLocation").innerHTML = `Congratulations! You are a champion and won the game in ${clicks} guess(es)!`;

    }
    
    // cnt=parseInt(cnt)+parseInt(1);
    // var clickCount=document.getElementById("button");
    // document.getElementById("luckyLocation").innerHTML ="Number of Guesses to win the game: ("+cnt +")";
    
    
    // let x = document.getElementById("loserWinner").value;
    // if (x==diceRolls) {
    //     document.getElementById("youLucky").innerHTML = "What fabulous luck! You are a champion!"
    // } else {
    //     document.getElementById("youLucky").innerHTML = "Rotten luck! Try again!"
    // }
    // return unlucky
}


function diceRandom (num) {
    //this function rolls a dice based on their input and returns it
    let diceRoll = Math.random() * num/*"demo" or x or what?*/; 
    //let diceRoll = Math.random() * 6; 
    diceRoll = Math.ceil(diceRoll);
        
     
    
    
    return diceRoll
    
    
    }
    let dice1 = diceRandom;



    /*document.getElementById("dice1").innerHTML = dice1;
    let dice2 = diceRandom;
    document.getElementById("dice1").innerHTML = dice2;
    let dice3 = diceRandom;
    document.getElementById("dice1").innerHTML = dice3;
    let dice4 = diceRandom;
    document.getElementById("dice1").innerHTML = dice4;
    let dice5 = diceRandom;
    document.getElementById("dice1").innerHTML = dice5;
    let dice6 = diceRandom;
    document.getElementById("dice1").innerHTML = dice6;
    console.log(dice1())
    console.log(dice2())
    console.log(dice3())
    console.log(dice4())
    console.log(dice5())
    console.log(dice6())*/

    /*function startOver()    {
    document.getElementById("tryAgain").innerHTML = "Roll different sided dice?"
}*/


    /*function iconSelection(diceRoll) {
    let y;
    if ("demo"==1) {
        y = <i class="fas fa-dice-one"></i>
        
    }
    if (diceRoll==2) {
        y = <i class="fas fa-dice-two"></i>
        
    }
    if (diceRoll==3) {
        y = <i class="fas fa-dice-three"></i>
        
    }
    if (diceRoll==4) {
        y = <i class="fas fa-dice-four"></i>
        
    }
    if (diceRoll==5) {
        y = <i class="fas fa-dice-five"></i>
        
    }
    if (diceRoll==6) {
        y = `<i class="fas fa-dice-six"></i>`
        
    }
    if (diceRoll>6) {
        y = `<i class="fas fa-dice-dice"></i>`
        
    }
    document.getElementById("diceIcon").innerHTML = y;
}
*/
