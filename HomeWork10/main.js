function getLower(a, b, c){
	if(a < b && a < c){
		return a;
	}
	else if(b < a && b < c){
		return b;
	}
	else{
		return c;
	}
}

// let test = getLower(-3, 10, -10);


function getSeconds(day, hour = 0, min = 0){
	return day*24*60*60 + hour*60*60 + min*60;
}

// let sec = getSeconds(1);


function getFact(x) {
	if(x === 1){
		return 1;
	}
	return x * getFact(--x);
}

// let x = getFact(5);

function reverseNumber(x) {
	if(x === 0){
		return 0;
	}

	let number = x;
	let ex = -1;
	while(number != 0){
		number = (number - number % 10) / 10;
		ex++;
	}

	return (x % 10)*10**ex + reverseNumber((x - x % 10) / 10);
}

// let x = reverseNumber(10230);


function quadraEqtn(a, b, c){
	let D = b**2 - 4*a*c;
	if(D < 0){
		console.log("Корней нет!");
		return 0
	}

	let x1 = (-b + Math.sqrt(D))/(2*a);
	let x2 = (-b - Math.sqrt(D))/(2*a);

	if(D === 0){
		console.log("Один корень: " + x1);
		return 1;
	}

	console.log("Два корня: \n" + x1 + "\n" + x2);
	return 2;
}

// let x = quadraEqtn(3,-14,-5);






