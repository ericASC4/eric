var prompt = require('prompt-sync')();
var mashArray = ["Mountain Top","Icy Lands", "Grass Field","Hell Pit"]
var firstquestion = [1,2];
var secondquestion = ["Mario","Bowser"];

function fight(firstquestion, secondquestion,mashArray){
    var strike = prompt("How many times will you strike?");
    firstquestion.push(strike);;
    
    var char = prompt("Who will you choose to fight?");
    secondquestion.push(char);

    

var map = prompt("where do you want to fight? ")
mashArray.push(map);
console.log("You chose to fight at " + map);
}

function difffighter(){
    fight(firstquestion,secondquestion,mashArray);
    console.log("You fight "+ secondquestion[2] + "in the " +mashArray[4]+"and hit them " +firstquestion[2]+"times.Too bad, other user wins ")

}
difffighter();