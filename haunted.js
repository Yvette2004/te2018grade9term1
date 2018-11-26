let READLINE = require("readline-sync");
let player = {
  name: undefined,
  weapon: "fists",
  item: "flashlight",
  killer: "weapon",
  help: "watch",
};
console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
  let enterHouse = READLINE.question("Will you enter the house? (yes or no or teleport) ");

    if(enterHouse == "yes" || enterHouse == "sure"){
      console.log(`${player.name} enters the house and oddly enough, there is a division of pathways.You see two staircases enclosed between walls `);
      let talkback = READLINE("You can't return back.Left or Right?")
       if(talkback == "left"){
        console.log(`${player.name} next`)
      else {
        console.log(`${player.name} last`)
        }
      }
    } 
    else if(enterHouse == "teleport" || enterHouse == "goodbye"){
    console.log(`${player.name} planet earth`);
    } 
    else {
    console.log(`${player.name} hello`);
    } 














