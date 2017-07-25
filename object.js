var charizard = {
    "attack":"blaze",
    "hp":266,
     "legendary":false,
     "types": ["fire","flying"]
};

console.log(charizard.hp); 

charizard.hp = 300;

console.log(charizard.hp);


function Superhero(realName){
    this.realName = realName;
}

var superman = new Superhero("Kal-el");
