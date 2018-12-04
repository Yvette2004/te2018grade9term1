const READLINE = require("readline-sync");
function sayHello (name) {
	console.log(`Hey ${name}! :)`);
}

function bother(name1,name2){
	sayHello(name1);
	sayHello(name2);
	sayHello(name1);
	sayHello(name2);
}
bother("Yvette","emily");

function add(x,y){
	
	let sum = x +y
	console.log(sum);
}
add(86,3);
add(986,3);

//sayHello("Mark");
//sayHello("John");
//sayHello("Yvette");
let age;
function getAge(){
	let birthYear = READLINE.question("What is your birthyear?");
	let currentYear = (new Date()).getFullYear();
	//console.log(currentYear);
	let age = currentYear - birthYear;
	return age;
}
let userAge = getAge();
console.log(userAge)
if(userAge < 17){
	console.log(" No r rated movies!")
}









let fellow = "Humpty Dumpty";
console.log(`Name: ${fellow}`)
let space = fellow.indexOF("");
let firstName = fellow.substring(0, gap);
let lastName = fellow.substring(gap, fellow.length)
 fellow = fellow.toUpperCase();
console.log(first)
console.log(`String: ${fellow}`);
let len = fellow.length;
console.log(`length: $(len)`);
let seven = fellow,charAt(7);
console.log(`Char at index 7: $(seven)`);
console.log(`Index )










