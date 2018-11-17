const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
 console.log(`${player.name} sees a figure and starts hitting it. Quickly realizing that nothing was actually there`);
} 
let continueInside =  READLINE.question("Will you continue going inside, up to the second floor? (yes or no)");
if(continueInside == "y" || continueInside == "yes") {
  player.strength++;
console.log(`${player.name} takes out her ${player.item} and realizes that there was nothing haunted about it.`);
 
 

else if {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
