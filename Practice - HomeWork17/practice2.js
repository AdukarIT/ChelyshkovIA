addEventListener('DOMContentLoaded', () => {
	//--1
	let watchingArea = document.querySelector('.cursor-area');

	watchingArea.addEventListener('mousemove', (e) => {
		let xCoord = watchingArea.getBoundingClientRect().x;
		let yCoord = watchingArea.getBoundingClientRect().y;
		let divCoord = document.createElement('div');
		divCoord.append((e.pageX - xCoord) + " - " + (e.pageY - yCoord));
		watchingArea.after(divCoord);

	});


	//--2
	let folder = document.querySelector('.folder');
	folder.addEventListener('dblclick', () => {
		folder.classList.toggle('folder--open');
		folder.classList.toggle('folder--close');
	});

	//--3
	function createBlocks(number) {
		for(let i = 0; i < number; i++){
			let div = document.createElement('div');
			div.className = 'square';

			div.addEventListener('mouseover', () => {
				div.classList.add('square--circle');
			});

			div.addEventListener('mouseout', () => {
				div.classList.remove('square--circle');
			});

			
			document.body.append(div);
		}
	}
	// createBlocks(400);
});