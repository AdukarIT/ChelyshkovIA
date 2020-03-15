addEventListener('DOMContentLoaded', () => {
	//--1
	function Machine() {
		this.isTurnOn = false;
		
		this.on = () => {
			this.isTurnOn = true;
		}

		this.off = () => {
			this.isTurnOn = false;
		}
	}

	function Fridge() {
		this.temperature = 21;
		this.cool = () => {
			this.temperature = 4;
		}
	}

	Fridge.prototype = new Machine();
	Fridge.prototype.on = () => {
		this.isTurnOn = true;
		console.log('устройство активировано');
	}
	Fridge.prototype.off = () => {
		this.isTurnOn = false;
		console.log('устройство деактивировано');
	}


	//--2
	function MyString() {
		this.reverse = (str) => {
			let arr = str.split('');
			for(let i = 0, j = arr.length - 1; i < j; i++, j--){
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
			return arr.join('');
		}

		this.ucFirst = (str) => {
			let arr = str.split('');
			arr[0] = arr[0].toUpperCase();
			return arr.join('');
		}

		this.ucWord = (str) => {
			let arr = str.split(' ');
			return arr.map((item) => {
				let wordArr = item.split('');
				wordArr[0] = wordArr[0].toUpperCase();
				wordArr = wordArr.join('');
				return wordArr;
			}).join(' ');
		}
	}
	let Sting = new MyString();


	//--3
	function Validator() {
		let emailRegExp = /^.+@.+\..+$/;
		let domainRegExp = /^\w+\.\w+$/;
		let dateRegExp = /^\d{1,2}-\d{1,2}-\d{4}$/;
		let phoneRegExp = /^\+\d{12}$/;

		this.isEmail = (str) => {
			return emailRegExp.test(str);
		}

		this.isDomain = (str) => {
			return domainRegExp.test(str);
		}

		this.isDate = (str) => {
			return dateRegExp.test(str);
		}	

		this.isPhone = (str) => {
			return phoneRegExp.test(str);
		}
	}
	let val = new Validator();


	//--4
	function Worker(name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;

		this.getSalary = () => {
			return this.rate * this.days;
		}
	}
	let human = new Worker('Vasya', 'Sidorov', 20, 30);


	//--5
	class User {
		constructor(data) {
			this.name = data.name;
			this.password = data.password;
		}

		login(name, password) {
			return (this.name == name && this.password == password);
		}

		changeName(name) {
			this.name = name;
		}
	}

	class Admin extends User {
		constructor(data) {
			super(data);
			this.role = 'admin';
		}

		login(name, password) {
			super.login(name, password);
			console.log('admin is logged in');
		}
	}

	delete Admin.prototype.changeName;
	let petya = new User({name:'petya', password:'000'});
	let vasya = new Admin({name:'vasya', password:'123'});
});