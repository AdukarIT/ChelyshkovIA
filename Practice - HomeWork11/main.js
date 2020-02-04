//-- 1
function triangle(k1, k2, gip){
	if(k1 <= 0 || k2 <= 0 || gip <= 0){
		return "ошибка ввода";
	}
	if(k1*k1 + k2*k2 === gip*gip){
		return true;
	}
	return false;
}

// let test = triangle(3,4,5);


//-- 2
function repeat(str = "", n = 2){
	let temp = '';

	while(n > 0){
		temp += str;
		n--;
	}

	return temp;
}

// let test = repeat("ква", 3);



//--3
function school(stud,desk){
	let realDeskAmount;
	if(stud % 2 === 0){
		realDeskAmount = stud / 2;
	}else{
		realDeskAmount = (stud + 1) / 2;
	}

	if(desk - realDeskAmount === 0){
		return "идеальное количество парт";
	}else if(desk - realDeskAmount > 0){
		return (desk - realDeskAmount) + " лишних парт";
	}else if(desk - realDeskAmount < 0){
		return "требуется парт: " + (realDeskAmount - desk);
	}
}


// let test = school(21, 9);



//-- 4
function mark(mark){
	switch (mark){
		case 1:
			return "плохо - единица";
			break;
		case 2:
			return "плохо - двойка";
			break;
		case 3:
			return "тройка - все еще плохо";
			break;
		case 4:
			return "почти пересдача";
			break;
		case 5:
			return "почти почти пересдача";
			break;
		case 6:
			return "что-то учил";
			break;
		case 7:
			return "готовился";
			break;
		case 8:
			return "хорошо готовился";
			break;
		case 9:
			return "препод";
			break;
		case 10:
			return "бог";
			break;
		default:
			return "это не отметка";								
	}
}

// let test = mark(10);



//-- 5
function notZero(){
	let temp;
	do{
		temp = +prompt("Введите число");
	}while(temp);
}

// notZero();



//-- 6
function notZeroNew(){
	let count = 0;
	let sum = 0;
	do{
		sum += +prompt("Введите число: ");
		count++;
	}while(sum < 100)
	console.log(sum);
	return count;
}

// let test = notZeroNew();




//-- 7
function isSimple(number){
	let temp = number - 1;
	if(number >= 0){
		do{
			if(number % temp === 0){
				return "число не простое";
			}
			temp--;
		}while(temp > 1)
	}else{
		do{
			if(number % temp === 0){
				return "число не простое";
			}
			temp++;
		}while(temp < -1)
	}

	return "число простое";
}

// let test = isSimple(23);
		



//-- 8
function isMonth(number){
	if(number <= 2 || number === 12){
		return "winter";
	}else if(number > 2 && number < 6){
		return "spring";
	}else if(number >= 6 || number <= 8){
		return "summer";
	}else if(number > 8 || number < 12){
		return "autummn";
	}
	return "error";
}

// let test = isMonth(7);




//--9
function getNumber(){
	for(let i = 99; i >= 10; i--){
		if(i % 7 === 0){
			console.log(i);
		}
		if(i % 10 === 7){
			if(i % 7 === 0){
				continue;
			}
			console.log(i);
		}
	}
}


// getNumber();




//--10
function div(){
	for(let i = 2; i <= 20; i++){
		console.log(i + ":");
		for(let j = 2; j <= i; j++){
			if(i % j === 0){
				console.log(j);
			}
		}
	}
}

// div();



//-- 11
function divNew(x, y){
	if(x >= y){
		for(let i = x; i >= y; i--){
			console.log(i + ": ");
			for(let j = x; j >= y; j--){
				if(i % j === 0){
					console.log(j);
				}
			}
		}
	}else if(x < y){
		for(let i = y; i >= x; i--){
			console.log(i + ": ");
			for(let j = y; j >= x; j--){
				if(i % j === 0){
					console.log(j);
				}
			}
		}
	}
}

// divNew(100, -100);



//-- 12
function getBites(size, unit){
	let unitStr = unit.toLowerCase();
	switch(unitStr){
		case "кб":
			return size *= 2**10;
			break;
		case "мб":
			return size *= 2**20;
			break;
		case "гб":
			return size *= 2**30;
			break;
		case "тб":
			return size *= 2**40;
			break;
		case "пб":
			return size *= 2**50;
			break;
		default:
			return "ошибка ввода";					
	}
}

// let size = getBites(3, "Кб");




//-- 13
function NOD(x, y){
	let nod = 1;
	let div = 2;
	while(x != 1){
		if(x % div === 0){
			x /= div;

			if(y % div === 0){
				y /= div;
				nod *= div;
			}

			div = 2;
		}else{
			div++;
		}
	}

	return nod;	
}

// let nod = NOD(19, 38);



//-- 14
function NODRec(x, y, div = 1){
	if(x == 1 || y == 1){
		return 1;
	}else if(x % div == 0 && y % div == 0){
		return div * NODRec(x / div, y / div, 2);
	}else if(x % div == 0 && y % div != 0){
		return NODRec(x / div, y, 2);
	}else if(x % div != 0){
		return NODRec(x, y, ++div);
	}
}

// let nod = NODRec(18, 72);



//-- 15
function words(n){
	let tmp = n % 10;
	if(tmp == 0 || tmp >= 5 && tmp <=10){
		return n + " карандашей";
	}else if(tmp == 1){
		return n + " карандаш";
	}

	return n + " карандаша";
}

// let word = words(34);



//-- 16
function sqSum(x){
	if(x < 0 || x > 81){
		return false;
	}else{
		for(let i = 0; i <= 9; i++){
			for(let j = i; j <= 9; j++){
				if(i*i + j*j == x){
					console.log(i + "^2 + " + j + "^2 = " + x);
					return true;
				}
			}
		}

		return false;
	}
}

// let test = sqSum(32);