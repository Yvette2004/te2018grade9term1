
const READLINE = require("readline-sync");

let player = {
   name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
  killer: "weapon",
  help: "watch"
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no or teleport) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
let enter = READLINE.question("What direction do you want to go?(up,down,left,right))");
if(enter == "up") {
  console.log("You go up a flight of stairs, and see a lady looking into your soul.But then she opens a door at the top of the stairs and starts walking.When you get at the top you see a division of path, which way do you go?(left or right)");
} 
if(enter == "down") {
  console.log("You go down to the basement.Are you a white chick? Cause only the whites go the basement.Any way, you go down and you see a mannequin doll and once you look closer,you see eyes.Which way do you go(left or ight)");
}
if(enter == "left") {
  console.log("You pass by the kitchen and look out the window.You are shocked to see a lady with red eyes.Her face is pressed against the window and she smiles at you. Which way do you go?(left or right)");
}
if(enter == "right") {
  console.log("You pass by the living room and see someone sitting on the coach.You see a man and his face amkes a 90 degree turn to look at you and into your soul.Which way do you go (left or right)");
  }

let okay = READLINE.question("Where are you heading next?(l or r)" );
if (okay == "l"){
  console.log("You will now have AIDS for the rest of your life! Goodbye");
  process.exit();
} else if (okay == "r" && enter == "up"){
  console.log("Good job! But .... all of a sudden, the steps are tumbling. The noise gets louder.");
} else if (okay == "l" && enter == "down"){
  console.log("What happening?!?!?!? The floor is shaking!!");
} else if (okay == "r" && enter == "leftt"){
  console.log("Whoa!!! The wall is decomposing!!")
}else if (okay == "r" && enter == "right"){
  console.log("Whoa!!! The wall is decomposing!!")
  }
}
