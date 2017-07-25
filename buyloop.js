// var counter =1;
//while(counter < 11) {
//  console.log(counter);
//  counter++:
}*/

var promt = require('promt-sync');
var moeny = 1000;
var items = [];
while (money > 99) {
    console.log("You have $" + money + "left. shirt = $100, Computer = $500.");
    var answer = prompt("which item do you want to buy? ");
    if (answer == "shirt") {
        money -= 400;
        items.push("computer")


    }
    else if (answer == "Computer")
    moeny -= 400
    items.psuh("computer")
    console.log("You brought a computer")
}
else (cosnole.log("Sold out of item"))