addEventListener('DOMContentLoaded', () => {	
	let but = document.getElementById('t1');
	but.addEventListener('click', () => {
		alert('test');
	});


	let but2 = document.getElementById('t2');
		but2.addEventListener('click', () =>{
			but2.innerText = "button";	
	});

	let inp = document.getElementById('t3inp');
	let dis = document.getElementById('t3d');
	let able = document.getElementById('t3a');

	dis.addEventListener('click', () =>{
		inp.disabled = true;
	});

	able.addEventListener('click', () =>{
		inp.disabled = false;
	});	
});	