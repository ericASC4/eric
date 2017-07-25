function setup(){
    createCanvas(500,500);
    background(200);
}

var x = 0;
var y = 0;
function draw(){
    ellipse(x,y,300,30,30);
    
    x++;
    y++;
}