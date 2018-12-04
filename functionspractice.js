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



















