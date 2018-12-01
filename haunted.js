
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
let enterHouse = READLINE.question("Will you enter the house? (yes or teleport) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
let enter = READLINE.question("What direction do you want to go?(up,down,left,right))");
if(enter == "up") {
  console.log(`${player.name}  You go up a flight of stairs, and see a lady looking into your soul.But then she opens a door at the top of the stairs and starts walking.When you get    at the top you see a division of path, which way do you go?`);
} 
if(enter == "down") {
  console.log(`${player.name}  You go down to the basement.Are you a white chick? Cause only the whites go the basement.Any way, you go down and you see a mannequin doll and once you look closer,you see eyes.Which way do you go?`);
}
if(enter == "left") {
  console.log(`${player.name} You pass by the kitchen and look out the window.You are shocked to see a lady with red eyes.Her face is pressed against the window and she smiles at you. Which way do you go?)`);
}
if(enter == "right") {
  console.log(`${player.name}  You pass by the living room and see someone sitting on the coach.You see a man and his face amkes a 90 degree turn to look at you and into your soul.Which way do you go? `)
  }

let okay = READLINE.question("Where are you heading next?(l or r)" );
if (okay == "l"){
 console.log(`${player.name} Worst choice you can possibly make,like really? You are dead, don't question okay.`);
  process.exit();
} else if (okay == "r" && enter == "up"){
  console.log(`${player.name} You are not dead, you walk and at the end you see a tunnel heading down   like a slide. You look behind you and its just a wall.So you have to go down      ...but`);
} else if (okay == "r" && enter == "down"){
  console.log(`${player.name} Not bad... you walk steadly and see a dark tunnel.You dont want to go but then you look being and you see that mannequin looking at you.Through instinct you run towards the tunnel`);
} else if (okay == "r" && enter == "left"){
  console.log(`${player.name} You start walking and you see a floor tile that is slightly pointed up.You move it and discover that their is a secret tunnel.maybe this is the way out, so you instinctively go inside`);
}else if (okay == "r" && enter == "right"){
  console.log(`${player.name} You see a opening on the ceiling.You quickly grab a chair and force your self up.Maybe through this way you can get to the rood and escape `);
  }
let word = READLINE.question("You reach the end but you are not yet safe.What door do you go through?(white or black) Only one will let you survive!!!");
if(word == "white"){
  console.log(`${player.name} You really think white could have saved you?It was the monsters trick, white is not good or anything near heaven.You will rot...SORRY NOT SORRY`);
} else if (word == "black" && okay == "r" && enter =="up"){
  console.log(`${player.name} You are saved, thank god you choose black.YOu go through the door and see the sky, no monster it will ever hunt for you... as long as you dont enter that house again!`);
}else if (word == "black" && okay == "r" && enter =="down"){
  console.log(`${player.name} You  go outside but its very dark.You spend the night but its winter, so you end up dying anyway :) `);
}else if (word == "black" && okay == "r" && enter =="left"){
  console.log(`${player.name}No worry's you are alive, better be grateful you dint rot witht hat monster.Oh wait but that monster can also go outside...You die either way hehe`)
}else if (word == "black" && okay == "r" && enter =="right"){
  console.log(`${player.name} You are outside against all odds!You survived`)}
}
else if(enterHouse == "teleport" || enterHouse == "bye"){
  console.log(`${player.name} You decide to teleport and now you are heading to Japan 
  You are now in an arcade game. No one is there and it is very dark.You see a door that is red and another that is purple`);
let country = READLINE.question("Will you follow and enter? (purple or red)")
if(country == "purple"){
  console.log(`${player.name} You enter the purple door and see a dark shadow approaching from halfway accross the room.It starts runing towards you .You take out your watch and stop time.`);
}if(country == "red"){
  console.log(`${player.name} You enter the red door and take out your flashlight.You start walking around and all of a sudden you see an arrow heading your way.You have powers and stop it midair. `)
}
// fix code 
let next =  READLINE.question("Out of no where a tunnel appears in front of you. Do you want to survive or take a chance?(follow or stay)");
if (next == "stay" && country == "purple"){
  console.log(`${player.name} decides to stay and quickly spots something close by,You just barely escaped and you see an elevator in which you enter`);
}else if (next == "follow" && country == "purple"){
console.log(`${player.name} is desperate despite  staying and before time returns to normal speed, you enter a elevator.`);
}else if (next == "stay" && country == "red"){
console.log(`${player.name} You just barely escaped and you see an elevator in which you enter`);
}else if (next == "follow" && country == "red"){
console.log(`${player.name} You end up staying and before time returns to normal speed, you enter a elevator.`)
}
let hello = READLINE.question("What floor?(2,3,4,5)")
if ( hello == "2" && next == "follow" && country == "purple"){
console.log(`${player.name} You survive`);
}else if(hello == "3" && next == "follow" && country == "purple"){
console.log(`${player.name} You survive`);
}else if( hello == "4" && next == "stay" && country == "red"){
console.log(`${player.name} You die because 4 is an unlucky number`);
}else if( hello == "5" && next == "follow" && country == "red"){
console.log(`${player.name} You die because 4 is an unlucky number`);
  }
}
console.log(`${player.name} finished the game.Thanks for playing!!`);



