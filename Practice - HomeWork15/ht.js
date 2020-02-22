//--1
function getSymbol(number) {
	let symb = String.fromCharCode(number);
	return symb;
}

let symb = getSymbol(97);

let arr = ['asdfs', 'scxbvc', 'dsdf', 'ffd', 'fas'];
let count = arr.reduce(function (count, current) {
	let charArr = current.split('');
	for(let i = 0; i < charArr.length; i++){
		if(charArr[i] == symb){
			count++;
		}
	}
	return count;
}, 0);

// console.log(count);


//--2
function countSymb(number){
	let symb = String.fromCharCode(number);
	let count = 0;
	return function(arr){
		arr.forEach(function(item, index, arr){
			let charArr = item.split('');
			for(let i = 0; i < charArr.length; i++){
				if(charArr[i] == symb){
					count++;
				}
			}
		});
		return count;
	}
}

// let test = countSymb(97);
// console.log(test(['a', 'b', 'c', 'a', 'a']));



//--3
let citiesArr = [];
citiesArr = data.filter(function(item, idx, arr){
	return (
		item.state == 'California' && 
		item.growth_from_2000_to_2013.split('%').join('')[0] > 0
	);
});

// console.log(citiesArr);


//--4
let population = data.reduce(function(count, current) {
	let pop = Number(current.population);
	if(current.latitude >= 25 && current.latitude <= 30){
		count += pop;
	}	
	return count;
}, 0);

// console.log(population);



//--5
function getCitiesArr(){
	let newCitiesArr = [];
	newCitiesArr = data.filter(function(item, idx, arr){
		if(item.city.split('')[0] === 'D')
			return true;
	})

	let biggest = newCitiesArr[0];
	for(let i = 0; i < newCitiesArr.length - 1; i++){
		for(let j = i; j < newCitiesArr.length - 1; j++){
			if(newCitiesArr[i].city >= newCitiesArr[j].city){
				biggest = newCitiesArr[i];
				newCitiesArr[i] = newCitiesArr[j];
				newCitiesArr[j] = biggest;
			}
		}
	}

	return newCitiesArr;
}

// let cityArr = getCitiesArr();
// console.log(cityArr);



//--6
function arrNormalization(arr) {
	let states = {};
	let stateStr = '';
	arr.forEach(function (item, idx, arr){
		let state = item.state;
		let isFind = stateStr.indexOf(state);
		if(isFind == -1){
			stateStr += state + '*';
			count++;
		}
	})

	let stateArr = stateStr.split('*');
	stateArr.forEach(function(item, idx, arr){
		states[item] = [];
	})

	for(prop in states){
		let cityStr = '';
		states[prop] = data.filter(function(item, idx, arr){
			if(item.state == prop){
				if(cityStr.indexOf(item.city) == -1){
					cityStr += item.city + "*";
					return true;
				}
			}
			return false;
		});
		states[prop].forEach(function(item, idx, arr){
			delete item.growth_from_2000_to_2013;
			delete item.latitude;
			delete item.longitude;
			delete item.state;
		});
	}
	
	delete states[''];
	return states;
}

// console.log(arrNormalization(data));


