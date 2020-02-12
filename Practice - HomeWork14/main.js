function createRandomArr(){
	let arr = [];
	for(let i = 0; i < 50; i++){
		arr[i] = Math.floor(Math.random() * 50 + 1);
		console.log(arr[i]);
	}
}

// createRandomArr();


function createRandomFixedArr(size, min, max){
	let arr = [];
	for(let i = 0; i < size; i++){
		arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	console.log(arr);
}

// createRandomFixedArr(20, 5, 10);


function findString(str){
	let start = str.slice(0, 8);
	let end = str.slice((str.length - 5), str.length);

	return (start == "https://" && end == ".html");
}

// let test = findString("https://index.html");


function countSymbol(str, symb){
	let i = 0;
	let count = 0;
	while(i != -1){
		count++;
		i++;
		i = str.indexOf(symb, i);
	}

	return count;
}

// let test = countSymbol("aAvdo aAna", "a");

function countBothSymbol(str, symb){
	symb = symb.toLowerCase();
	str = str.toLowerCase();
	let i = 0;
	let count = 0;
	while(i != -1){
		count++;
		i++;
		i = str.indexOf(symb, i);
	}

	return count;
}


// let test = countBothSymbol("aAvdo aAna", "a");


function getDate(){
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();

	switch(month){
		case 0:
			month = 'Января';
			break;
		case 1:
			month = 'Февраля';
			break;
		case 2:
			month = 'Марта';
			break;
		case 3:
			month = 'Апреля';
			break;
		case 4:
			month = 'Мая';
			break;
		case 5:
			month = 'Июня';
			break;
		case 6:
			month = 'Июля';
			break;
		case 7:
			month = 'Августа';
			break;
		case 8:
			month = 'Сентября';
			break;
		case 9:
			month = 'Октября';
			break;
		case 10:
			month = 'Ноября';
			break;
		case 11:
			month = 'Декабря';
			break;											
	}

	console.log(day + " " + month + " " + year);
}

// getDate();


function getSeconds(){
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	console.log(h * 60 * 60 + m * 60 + s);
}

// getSeconds();