addEventListener('DOMContentLoaded', () => {
	//--2
	let clearBtn = document.getElementById('clear-button');
	let sendBtn = document.getElementById('send-button');
	let textInp = document.getElementById('text');
	clearBtn.addEventListener('click', () => {
		textInp.value = '';
	});



	//--1, 3, 4
	function formValidation(form) {

		let regularsObject = {
			text    : /^[\w\sА-ЯЁа-яё]+$/,
			password: /[0-9]+([A-Z]+)|([a-z]+)\W+/,
			email   : /^.+@.+\..+$/,
			file    : /^[\w]\.(avi)|(wmf)|(mp4)|(txt)|(doc)|(jpg)|(gif)|(png)|(mp3)|(xls)|(xlsx)$/,
			number  : /^(0{1}(\.[0-9])?$)|([1-9]{1}[0-9]?\.?[0-9])$/,
			color   : /^\#((([0-9]|[a-f]){3})|(([0-9]|[a-f]){6}))$/,
			isValid : true
		}

		for(let i = 0; i < form.elements.length; i++){
			for(prop in regularsObject){
				if(form.elements[i].type == prop){
					if(!regularsObject[prop].test(form.elements[i].value)){
						form.elements[i].classList.add('not-valid');
						regularsObject.isValid = false;
					}else{
						form.elements[i].classList.remove('not-valid');
					}
				}
			}
		}

		if(!regularsObject.isValid)
			return false;
		return true;
	}

	let someForm = document.querySelector('.some-form');
	let someFormSubmit = document.querySelector('.some-form input[type="submit"]');

	someFormSubmit.addEventListener('click', (event) => {
		if(!formValidation(someForm))
			event.preventDefault();
		else{
			alert('Форма успешно прошла валидацию!');
		}
	});	



	//--5
	function replaceWord(str) {
		let reg = /функция/;
		str = str.split(reg);
		return str.join('function');
	}

	// console.log(replaceWord('так функция и еще раз функция'));


	//--6
	function timeValidation(str) {
		let timeRegExp = /^(([0-9]{1})|(10)|(11)|(12))\.([0-5]{1}[0-9]{1})\s(am)|(pm)$/;
		return timeRegExp.test(str);
	}
	// console.log(timeValidation('12.59 am'));


	//-- 7

	function deleteDuplicate(str) {
		console.log(str);
		let arr = str.split(' ');
		for(let i = 0; i < arr.length - 1; i++){
			let reg = new RegExp('^' + arr[i] + '$');
			for(let j = i + 1; j < arr.length; j++){
				if(reg.test(arr[j])){
					arr.splice(j, 1);
				}
			}
		}
		return arr.join(' ');
	}

	// console.log(deleteDuplicate('какие-то случайные случайные слова такие вот дела слова дела'));
	
});

