addEventListener('DOMContentLoaded', () => {
	let slider = document.querySelector('.slider');
	let slideToLeft = document.querySelector('.scroll-button--left');
	let slideToRight = document.querySelector('.scroll-button--right');
	let images = document.querySelector('.images');
	let isHugeImg = false;

	let imageBlock = document.querySelector('.image-block');
	let pictureBlock = document.querySelector('.picture-block');
	let imgClose = document.querySelector('.close-img');

	let imgCollection = document.querySelectorAll('.slider-image');
	
	for(let i = 0; i < 5; i++){
		imgCollection[i].classList.add('slider-image--visible');
	}

	let leftCurIdx = 0;
	let rightCurIdx = 4;

	slideToRight.addEventListener('click', () => {
		let rightPrevIdx = rightCurIdx;
		if(imgCollection.length == 5){
			return;
		}
		imgCollection[leftCurIdx].classList.remove('slider-image--visible');
		
		if(leftCurIdx == imgCollection.length - 1)
			leftCurIdx = 0;
		else
			leftCurIdx++;
		

		if(rightCurIdx == imgCollection.length - 1)
			rightCurIdx = 0;
		else
			rightCurIdx++;

		imgCollection[rightPrevIdx].after(imgCollection[rightCurIdx]);
		imgCollection[rightCurIdx].classList.add('slider-image--visible');
	});

	slideToLeft.addEventListener('click', () => {
		let leftPrevIdx = leftCurIdx;
		if(imgCollection.length == 5){
			return;
		}

		imgCollection[rightCurIdx].classList.remove('slider-image--visible');
		
		if(leftCurIdx == 0)
			leftCurIdx = imgCollection.length - 1;
		else
			leftCurIdx--;
		

		if(rightCurIdx == 0)
			rightCurIdx = imgCollection.length - 1;
		else
			rightCurIdx--;

		imgCollection[leftPrevIdx].before(imgCollection[leftCurIdx]);
		imgCollection[leftCurIdx].classList.add('slider-image--visible');
	});


	images.addEventListener('click', (event) => {
		if(!isHugeImg){
			let hugeImage = document.createElement('img');
			hugeImage.src = event.target.src;
			hugeImage.className = 'huge-image';
			pictureBlock.append(hugeImage);
			imageBlock.classList.add('image-block--visible');
			document.querySelector('.close-img').classList.add('close-img--visible');
			isHugeImg = true;
		}

		document.querySelector('.close-img').addEventListener('click', () => {
			isHugeImg = false;
			document.querySelector('.huge-image').remove();
			imageBlock.classList.remove('image-block--visible');
			imgClose.classList.remove('close-img--visible');
		});
	});
});