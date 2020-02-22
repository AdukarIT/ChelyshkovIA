//-- 1
function getRandomArray(len){
	let arr = new Array(len);
	for(let i = 0; i < len; i++){
		arr[i] = Math.floor(Math.random() * 10);
	}
	return arr;
}

// let test = getRandomArray(10);



//-- 2
function getBiggerMiddle(arr){
	let middle = 0;
	for(let i = 0; i < arr.length; i++){
		middle += arr[i];
	}
	middle /= arr.length;

	for(let i = 0; i < arr.length; i++){
		if(arr[i] > middle)
			console.log(arr[i]);
	}
}

// getBiggerMiddle(getRandomArray(10));



// --3
function getTwoSmallest(arr, n = arr.length){

	for(let i = 0; i < arr.length - 1; i++){
		let temp = arr[i];
		for(let j = i + 1; j < arr.length; j++){
			if(temp >= arr[j]){
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}

	let newArr = [];

	for(let i = 0; i < n; i++){
		newArr[i] = arr[i];
	}

	return newArr;
}


// let test = getTwoSmallest(getRandomArray(10), 2);





//-- 4
function updateArr(arr){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < 0.3){
			arr[i] = 0;
		}
	}

	let temp;
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){
			if(arr[j] == 0){
				if(j == 0){
					continue;
				}

				temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}

	}
	return arr;
}

// let test = updateArr([0.2, 1, 0.1, -4, 7, 8, 0]);



//-- 5
function getReverseSum(arr1, arr2){
	if(arr1.length != arr2.length){
		return "эрор";
	}

	let arr = [];
	let right = arr2.length - 1;
	for(let i = 0; i < arr1.length; i++){
		arr[i] = arr1[i] + arr2[right];
		right--;
	}

	return arr;
}

// let test = getReverseSum(getRandomArray(10), getRandomArray(10));



//-- 6
function bubbleSort(arr){
	for(let i = 0; i < arr.length - 1; i++){
		let temp = arr[i];
		for(let j = i + 1; j < arr.length; j++){
			if(temp > arr[j]){
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	return arr;
}

// let test = bubbleSort(getRandomArray(20));



//-- 7
function findPare(arr){
	console.clear();
	console.log(arr);
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){
			if(j == i){
				continue;
			}
			if(arr[i] + arr[j] > 0.999 && arr[i] + arr[j] < 1.001){
				console.log(arr[i] + " + " + arr[j] + " = " + (arr[i]+arr[j]) );
			}
		}
	}
}

function getRandomArrayTask7(size, diap = 10){
	let arr = [];
	for(let i = 0; i < size; i++){
		arr[i] = Math.random() * diap;
	}

	return arr;
}


// findPare(getRandomArrayTask7(20, 1.5));




//-- 8
function createRang(arr){
	let rang = new Array(arr.length);
	let count = 0;
	let biggest = Infinity;
	for(let j = 0; j < arr.length; j += count){
		let bigger = -Infinity;
		count = 0;
		for(let i = 0; i < arr.length; i++){
			if(arr[i] >= bigger && arr[i] < biggest){
				bigger = arr[i];
			}
		}

		for(let i = 0; i < arr.length; i++){
			if(arr[i] == bigger){
				rang[i] = j + 1;
				count++;
			}
		}
		biggest = bigger;
	}
	return rang;
}

// let test = createRang(getRandomArray(20));


function removeElements(arr, x){
	let div = x % arr.length;
	for(let i = 0; i < div; i++){
		for(let j = arr.length - 1; j > 0; j--){
			let temp = arr[j];
			arr[j] = arr[j - 1];
			arr[j - 1] = temp;
		}
	}
	return arr;
}

// let test = removeElements(getRandomArray(10), 11);
