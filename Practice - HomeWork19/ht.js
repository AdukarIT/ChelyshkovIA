addEventListener('DOMContentLoaded', () => {
	//--1
	function User(name, surname) {
		this.name = name;
		this.surname = surname;

		this.getFullName = () => {
			console.log('Name: ' + this.name);
			console.log('Surname: ' + this.surname);
			return {name: this.name, surname: this.surname};
		}
	}

	function Student(name, surname, year) {
		Object.setPrototypeOf(this, new User(name, surname));
		this.year = year;

		this.getCourse = () => {
			let year = (new Date()).getFullYear();
			console.log('course: ' + (year - this.year));
		}
	}

	// console.dir(new User('Ilya', 'Chelyshkov', 2017));
	// console.dir(new Student('Ilya', 'Chelyshkov', 2017));


	//--2
	class Dish {
		constructor() {
			
		}

		countCal() {
			let cal = 0;
			for(let prop in this){
				cal += this[prop];
			}
			return cal;
		}
	}

	class Hamburger extends Dish {
		constructor(){
			super();
			this.bun = 55;
			this.cutlet = 60;
		}
	}

	class Cheeseburger extends Hamburger {
		constructor(){
			super();
			this.cheese = 25;
		}
	}

	class BigMac extends Cheeseburger{
		constructor(){
			super();
			this.bun = 65;
			this.cutlet = 80;
		}
	}

	let b1 = new Hamburger();
	let b2 = new Cheeseburger();
	let b3 = new BigMac();

	// console.log(b1.countCal());
	// console.log(b2.countCal());
	// console.log(b3.countCal());
	

	//--3
	class Reminder {
		constructor(evention, time) {
			this.evention = evention;
			this.time = +time * 60 * 1000;
		}

		toRemind() {
			setTimeout(() => {
				let audio = document.querySelector('audio');
				let soundOff = document.createElement('input');
				soundOff.type = 'button';
				soundOff.value = 'Выключить звуковое оповещение';
				form.after(soundOff);
				soundOff.addEventListener('click', () => {
					audio.pause();
				});
				audio.play();
				soundOff.after(this.evention);
			}, this.time);
		}
	}

	let form = document.querySelector('form');
	let submit = form.elements[2];

	submit.addEventListener('click', (event) => {
		event.preventDefault();
		let evention = form.elements[0].value;
		let time = form.elements[1].value;
		let reminder = new Reminder(evention, time);
		reminder.toRemind();
	});
});