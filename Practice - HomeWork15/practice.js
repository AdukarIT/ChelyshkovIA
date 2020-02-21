//--1
function counterFactory(start, step){
	function tictoc(){
		return start+=step;
	}

	return tictoc;
}
// let test = counterFactory(0,1);

// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
	


//--2
function take(tictoc, x){
	for(let i = 0; i < x; i++){
		console.log(tictoc());
	}
}	
// let test = counterFactory(0,1);
// take(test, 10);



//--3
function getArr(str){
	let arr = str.split(',').join('').split('.').join('').split(' ');
	return arr;
}

let str = 'Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.';


let arr = getArr(str);

//попытка написать метод .map() - вроде получилось
Array.prototype.mapPollyFill = function(func){
	let newArray = [];

	for(let i = 0; i < this.length; i++){
		newArray.push(func(this[i] ,i ,this));
	}

	return newArray;
}

//и .forEach() 
Array.prototype.forEachPollyFill = function(func){
	for(let i = 0; i < this.length; i++){
		func(this[i], i, this);
	}
}

//ЭТО РАСКОММЕНТИТЬ
// console.log(arr.mapPollyFill(function(item, index, arr){
// 	let arrStr = item.split('');
// 	arrStr.reverse();
// 	let str = arrStr.join('');
// 	return str;
// }).sort(function(el1, el2){
// 	return el1.length - el2.length;
// }));


function countSymb(arr){
	let count = 0;
	arr.forEachPollyFill(function(item, idx, arr){
		let charArr = item.split('');
		for(let i = 0; i < charArr.length; i++){
			if(charArr[i] == 'с')
				count++;
		}
	})

	return count;
}

// console.log(countSymb(arr));














