//--1

function isExists(obj, value){
	for(prop in obj){
		if(obj[prop] === value)
			return true;
		else if(typeof obj[prop] === "object")
			return isExists(obj[prop], value);
	}
	return false;
}

let user = {
	id: 1278,
	name: {
		firstName: "Johny",
		lastName: "Walker"
	},
	email: "user@gmail.com",
	pw: "1k2j3h4m5n6b"
}

// let task1 = isExists(user, "Johny");


//--2

let barbecueRecipe = {
	title: "шашлындосик",
	ingred: ["pork", "onion", "pepper", "salt"],

	amount: {
		pork: "1000g",
		onion: "150g",
		pepper: "10g",
		salt: "10g"
	},

	portionNumber: 2
}

function getRecepie(obj){
	for(el of obj.ingred){
		console.log(el + ": " + (parseFloat(obj.amount[el]) / obj.portionNumber) + "g");
	}
}

// getRecepie(barbecueRecipe);


//--3



let cilinder = {
	rad: 4,
	height: 10,

	getVolume: function(){
		return 3.14 * this.rad**2 * this.height;
	}
}

// let test = cilinder.getVolume();



//--4
let penguin = {
	name: "Rico",
	skills: "always have the necessary things",
	nativeLanguage: "Japanese",
	creator: "Dreamworks",
	canFly: false,

	sayHello: function(){
		console.log("Hello, I\'m " + this.name + ". " + this.nativeLanguage + " is my native language");
		console.log("My special skills: " + this.skills);
	},

	canFly: function(){
		if(this.canFly == true)
			console.log("I can fly!");
		else
			console.log("I can\'t fly! Я ЖЕ ПИНГВИН");
	}
}

// penguin.sayHello();
// penguin.canFly();