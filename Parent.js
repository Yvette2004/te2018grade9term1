 const READLINE = require("readline-sync");
console.log("Mom rules");
 
 let passClasses = READLINE.question("Did you pass all your classes?");
 if (passClasses == "yes"){
 	console.log("Outstanding job!");

 }
 else {
 	console.log("Sucks, no more korean dramas!");
 }

let vitamins = READLINE.question("Did you take your vitamins?");
if (vitamins == "yes"){
	console.log("Finally, you are taking them on time.Good job!!!");
}
else {
	let talkback = READLINE.question("Why not?")
	if (talkback == "whatever" || talkback == "I don't care") {
		console.log("You know the consequence.I will call Mayra !!!");
	}
}
let laundry = READLINE.question("Did you do the laundry?");
if (laundry == "yes"){
	console.log("You're amazing.I don't need to go to wash!!!");
}
else  {
	let answer = READLINE.question("How come?")
	if (answer == "It's not my week to do it " || "You do it "){
		console.log("Do it its part of your chores, you have no choice")
	}
}
let breakfast = READLINE.question("Do you want to have breakfast tomorrow morning, at 8am?")
if (breakfast == "yes"){
	console.log("The usual dinner!!")
}
else {
	console.log("Good I don't need to get up early and save some money.Yeah!")
}