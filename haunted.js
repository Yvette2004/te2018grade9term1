let READLINE = require("readline-sync");
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
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
let enterHouse = READLINE.question("Will you enter the house? (yes or no or teleport or abandon) ");

if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  console.log(`${player.name}  sees a figure and starts hitting it. Quickly realizing that nothing was  actually there.`);
 
    let talkback = READLINE.question("Are you sure you want to continue?")
      if (talkback == "yes" || talkback == "maybe"){
        console.log(`${player.name} takes out her ${player.item} and head up to the second floor.You pass through the door and into one of the rooms.By the window, you see someone dressed in white looking out of it`);}
    let okay = READLINE .question("Do you approach her?")
      if (okay == "yes" || okay == "definitely"){
       console.log(`${player.name} you slowly approach her and when she turns around, there is no face.She    opens her mouth, and a bunch of bugs crawl out.The bugs spreads to you and eat you up.You died a painful and disturbing death.`);
    }
      else if (okay == "no" || okay == "never"){
      console.log(`${player.name} is you quickly run to the opposite direction.But that same person appears in front of you.She smiles, and without realizing you are already dead. `);
    }
      else (talkback =="n" || talkback == "no")
        {
          console.log(`${player.name} you died.For natural causes...bye. `);
    
      }
    }
  
else if (enterHouse == "no") {
    player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  console.log(`${player.name}  starts walking in the opposite direction, you spot a old lady.She offers to take you to her house.`);
   
   let answer =  READLINE.question("Will you follow and enter? (yes or no)")
      if(answer == "y" || answer == "yes") 
      {
      player.charm++;
      console.log(`${player.name} takes out her ${player.killer}, but it's too late you are already dead `);}

      else if(answer =="n" || answer=="no")
      { 
        player.intellect++;
        console.log(`${player.name} You survived`);
    }
  }

else if (enterHouse == "teleport") {
  console.log(`${player.name} You decide to teleport and now you are heading to Japan 
  You are now in an arcade game.No one is there and it is very dark.You see a door that is red.`);

    let japan =  READLINE.question("Will you follow and enter? (yes or no)");
      if(japan == "y" || japan == "yes")
       {
      player.charm++;
      console.log(`${player.name}You go outside and  see a bunch of people all walking to their desired destinationos. You go to the police...You are safe`);}

        else if(japan == "n" || japan == "no")
        { 
          player.intellect++;
        console.log(`${player.name} You see a dark shadow approaching from halfway accross the room.It starts runing towards you .You take out your ${player.help} and stop time.`);
    }
  }
else if(enterHouse =="abandon") {
  player.intellect++;
  console.log(`${player.name} decides to flee.You are a coward, but smart.`);
  console.log(`${player.name} You survived`);
  
}





















