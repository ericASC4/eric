var HP = 100;
var gold = 0;
var numDefeated = 0;

function updateStats(){
    $("stats").text(HP: " + // Gold:" + gold + " // Ogres Slain: " + numDefeated);
}

function attack(){
    if (HP > 0) {
        if(Math.random() * 100> gold) {
            $("#ogres").prepend(
                "<p>You won! + 10 gold.</p>"
                );
        }
    }

}

function setup() {
    //Title
    $("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");


//Stats Section
$("body").append(
    "<div><h3>STATS</h3><p id='stats'></p></div>"
);
//Attack Button
$("body").append(
    "<button onclick='attack()'>Attack the Ogre!></button>"
);
$("body").append(
    "<div id='ogres'></div>"
);
updateStats();
};
$(document).ready(setup);