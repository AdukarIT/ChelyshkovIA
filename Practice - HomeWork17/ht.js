addEventListener('DOMContentLoaded', () => {
	//--1
	let clnInput = document.getElementById('clonning-input');
	let clnBtn = document.getElementById('clonning-btn');

	clnBtn.addEventListener('click', () => {
		let temp = document.createElement(clnInput.tagName);
		clnInput.after(temp);
	});


	//--2
	let table = document.getElementsByTagName('table')[0];

	table.addEventListener('click', () => {
		let clName = table.className;

		switch(clName){
			case '':
				table.className = 'bordered';
				break;
			case 'bordered':
				table.className = 'striped';
				break;
			case 'striped':
				table.className = 'highlight'
				break;
			case 'highlight':
				table.className = '';
				break;
		}
	});



	//--3
	let chooseClassRadio = document.getElementsByName('chooseClass');

	chooseClassRadio.forEach((item) => {
		item.addEventListener('click', () => {
			if(chooseClassRadio[0].checked == true){
				table.className = 'bordered';
			}else if(chooseClassRadio[1].checked == true){
				table.className = 'striped';
			}else{
				table.className = 'highlight';
			}
		});
	});



	//--4
	let btn4 = document.getElementById('btn4');
	let btn4off = document.getElementById('btn4off');

	function alertText() {
		function alertBtnText() {
			alert(this.innerText);
		}
		alertBtnText.call(btn4);
	}

	btn4.addEventListener('click', alertText);
	btn4off.addEventListener('click', () => {
		btn4.removeEventListener('click', alertText);
	});	



	//--5
	let divT6 = document.querySelector('.task5');

	divT6.addEventListener('click', (event) => {
		console.dir(event.target);
	});



	//--6
	let imgBlock = document.querySelector('.image-block');

	let sunImg = document.getElementById('sun');
	let moonImg = document.getElementById('moon');

	imgBlock.addEventListener('mouseover', () => {
		moonImg.classList.remove('imageSlide--visible');
		sunImg.classList.add('imageSlide--visible');
	});

	imgBlock.addEventListener('mouseout', () => {
		moonImg.classList.add('imageSlide--visible');
		sunImg.classList.remove('imageSlide--visible');
	});	
});