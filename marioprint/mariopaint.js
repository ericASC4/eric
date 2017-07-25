function setup(){
    createCanvas(500,500);
    background(100);
}

function mouseDragged(){
    fill(random(255),random(255),random(255));
    ellipse(mouseX,mouseY,random(80),random(80));
}




