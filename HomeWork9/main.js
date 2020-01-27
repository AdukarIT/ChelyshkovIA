//1
let getPorch = () => {
	let aprtNumber  = +prompt("Введите номер квартиры: ");
	let porchNumber;
	if (aprtNumber <= 0 || aprtNumber > 100){
		console.log("Такой квартиры в доме не существует");
	}else{
		porchNumber = aprtNumber % 20 > 0 ?  ((aprtNumber - aprtNumber % 20) + 20)/20: aprtNumber/20 ;
		console.log("Номер подъезда: " + porchNumber);
	}
}

// getPorch();



//2
let addCounty = () => {
	let str = prompt("Введите марку авто: ");
	switch (str.toLowerCase()){
		case("ford"):
			console.log(str + ": страна происхождения - США");
			break;
		case("honda"):
			console.log(str + ": страна происхождения - Япония");
			break;
		case("bmw"):
			console.log(str + ": страна происхождения - Германия");
			break;
		case("nissan"):
			console.log(str + ": страна происхождения - Япония");
			break;
		case("skoda"):
			console.log(str + ": страна происхождения - Чехия");
			break;
		case("volvo"):
			console.log(str + ": страна происхождения - Швеция");
			break;
		default:
			console.log("some_input - страна присхождения неизвестна");						
	}
}

// addCounty();



//3
let yearDiv = () => {
	let year = +prompt("Введите год: ");
	let div = year % 4;
	
	if(div === 0){
		console.log(year + "-ый високосный год");
	}else{
		console.log(year + "-ый не високосный год");
	}
}

// yearDiv();



//4
let multTable = () => {
	let number = +prompt("Введите число от 1 до 20: ");
	if(number < 1 || number > 20){
		console.log("Число введено не верно!");
		return 0;
	}
	for(let i = 1; i <= 20; i++){
		console.log(number + "*" + i + " = " + number*i);
	}
}

// multTable();



//5
let sumNotEven = () => {
	let sum = 0;
	for(let i = 1; i <= 50; i += 2){
		sum += i;
	}
	console.log(sum);
}

let sumNotEvenCont = () => {
	let sum = 0;
	for(let i = 1; i <= 50; i++){
		if(i % 2 === 0){
			continue;
		}
		sum += i;
	}
	console.log(sum);
}

// sumNotEven();
// sumNotEvenCont();



//6
let fib15 = () => {
	let n1 = 0;
	let n2 = 1;

	let temp;
	for(let i = 0; i < 15; i++){
		temp = n2;
		n2 += n1;
		n1 = temp;
		console.log(n1);
	}
}

// fib15();



//7
let buildBoard = () => {
	for(let i = 0; i < 8; i++){
		let str = "";
		for(let j = 0; j < 8; j++){
			if(i % 2 === 0){
				if(j % 2 === 0){
					str += " ";
					continue;
				}
				str += "#";
			}
			else{
				if(j % 2 === 0){
					str += "#";
					continue;
				}
				str += " ";
			}
		}
		console.log(str);
	}
}

// buildBoard();