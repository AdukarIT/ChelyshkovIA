//-- 1
function createRandomFixedArr(size = 10, min = 0, max = 10){
	let arr = [];
	for(let i = 0; i < size; i++){
		arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	return arr;
}


function createArr(arr){
	let newArr = new Array(arr.length);
	for(let i = 0; i < arr.length; i++){
		let sqrt = Math.sqrt(arr[i]);
		newArr[i] = {
			initial: arr[i],
			sqrt: sqrt,
			floor: (Math.round(sqrt) == Math.floor(sqrt)), 
			ceil: (Math.round(sqrt) == Math.ceil(sqrt))		
		}
	}

	// console.log(newArr);
	return newArr;
}

// createArr(createRandomFixedArr(20, 1, 20));



//-- 2
function addProp(arr){
	for(let i = 0; i < arr.length; i++){
		let sqrt = Math.round(arr[i].sqrt * 100) / 100;
		arr[i].digitSqrt =  sqrt;
	}
	console.log(arr);
}

// addProp(createArr(createRandomFixedArr(20, 1, 20)));



//-- 3
function isPalindrom(str){
	str = str.toLowerCase();
	arr = str.split('');
	for(let i = 0; i < arr.length; i++){
		if(
			arr[i] == ''  || 
			arr[i] == ' ' || 
			arr[i] == '.' || 
			arr[i] == ',' || 
			arr[i] == ';' || 
			arr[i] == ':' || 
			arr[i] == '!' || 
			arr[i] == '?' || 
			arr[i] == '-' ||
			arr[i] == '—'
		){
			arr.splice(i,1);
		}
	}

	for(let i = 0, j = arr.length - 1; i < j; i++, j--){
		if(arr[i] != arr[j]){
			return false;
		}
	}
	return true;
}

// let test = isPalindrom('qwert,- trewq');



//-- 4
function findPopSymb(str){
	let maxStr = '';
	let maxCount = 0;
	let maxSymb = '';
	for(let i = 0; i < str.length; i++){
		let symb = str[i];
		for(let j = 0; j < maxStr.length; j++){
			if(symb == maxStr[j]){
				symb = '';
				break;
			}
		}
		let count = 0;
		for(let j = 0; j < str.length; j++){
			if(symb == str[j]){
				count++;
			}
		}

		if(count == maxCount){
			maxStr += symb;
		}else if(count > maxCount){
			maxCount = count;
			maxStr = symb;
		}
	}

	return maxStr;
}

// let test = findPopSymb('hello world!!!');


//-- 5
function replaceStr(str, search, replace){
	let ind = 0;
	while ((ind = str.indexOf(search, ind = 0)) != -1){
		let start = str.slice(0, ind);
		let end = str.substr(search.length + ind);
		str = replace;
		str = start + str + end;
		ind = ind + replace.length;
	}
	return str;
}


// let test = replaceStr('хомяк хохочет хорошо', 'хо', 'ло');



//--6
function setUpperCase(str){
	let arr = [];
	arr = str.split(' ');
	for(let i = 0; i < arr.length; i++){
		let str = arr[i].split('');
		str[0] = str[0].toUpperCase();
		arr[i] = str.join('');
	}

	str = '';
	for(let i = 0; i < arr.length; i++){
		str += arr[i] + ' ';
	}

	return str.trim();
}

// let test = setUpperCase('hello world');



//--7
function findReplay(str){
	let arr = str.split('');
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == '*'){
			continue;
		}
		let symb = arr[i];
		for(let j = i + 1; j < arr.length; j++){
			if(arr[j] == symb && symb != ' '){
				arr[j] = '*';
			}
		}
	}

	str = '';

	for(let i = 0; i < arr.length; i++){
		str += arr[i];
	}

	return str;
}

// let test = findReplay('я учусь программированию');



//--8
function getDayOfWeek(date = new Date()){
	let day = date.getDay();

	switch(day){
		case 0:
			return 'Воскресенье';
		case 1:
			return 'Понедельник';
		case 2:
			return 'Вторник';
		case 3:
			return 'Среда';
		case 4:
			return 'Четверг';
		case 5:
			return 'Пятница';
		case 6:
			return 'Суббота';						
	}
}

// let test = getDayOfWeek();


//--9
function getDay(){
	let dateStr = prompt('Введите дату в формате ДД-ММ-ГГГГ: ');
	let dateArr = dateStr.split('-');

	let date = new Date();
	date.setFullYear(dateArr[2]);
	date.setMonth(--dateArr[1]);
	date.setDate(dateArr[0]);

	return getDayOfWeek(date);
}


// let test = getDay();



//--10
function getDays(){
	let str = prompt('Введите вашу дату рождения в формате ДД-ММ-ГГГГ: ');

	let arr = str.split('-');
	let day = arr[0];
	let month = --arr[1];
	

	let birthDate = new Date();
	let now =  new Date()
	let year = now.getFullYear();

	birthDate.setFullYear(year);
	birthDate.setMonth(month);
	birthDate.setDate(day);
	
	let msBrthd = birthDate.getTime();
	let msNow = now.getTime();

	let dif = msNow - msBrthd;

	let msToNextBrthd;

	if(dif > 0){
		msToNextBrthd = 365 * 24 * 3600 * 1000 - dif;
	}else{
		msToNextBrthd = -dif;
	}

	console.log('вам осталось дней: ' + (msToNextBrthd / 1000 / 3600 / 24));
	return 'вам осталось дней: ' + (msToNextBrthd / 1000 / 3600 / 24);
}


// let test = getDays();


function getAnniversary(){
	let str = prompt('Введите вашу дату рождения в формате ДД-ММ-ГГГГ: ');
	let brthArr = str.split('-');

	let brthDate = new Date();
	let brthYear = 	brthArr[2];
	let brthMonth = --brthArr[1];
	let brthDay = brthArr[0];

	brthDate.setFullYear(brthYear);
	brthDate.setMonth(brthMonth);
	brthDate.setDate(brthDay);

	let brthMs = brthDate.getTime();
	let days = brthMs / 1000 / 3600 / 24;
	let daysToAnnvr = Math.floor(1000 - (days % 1000));

	let annvrDate = new Date();
	let curDate = annvrDate.getDate();
	annvrDate.setDate(curDate + daysToAnnvr);

	return annvrDate;
}

// let test = getAnniversary();



//--11
function getSqrt(arr){
	for(let i = 0; i < arr.length; i++){
		try{
			let sqrt = Math.sqrt(arr[i]);
			if(Math.floor(sqrt) - sqrt != 0){
				throw 'число ' + arr[i] + ' не имеет целочисленного квадратного корня';
			}else{
				console.log(arr[i] + "^2 = " + sqrt);
			}
		}catch(e){
			console.log(e);
		}
	}

	console.log(arr);
}

// getSqrt(createRandomFixedArr());







