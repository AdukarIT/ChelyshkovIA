//--1
function addClass(el){
	el.classList.add('www');
}
// addClass(test);


//--2
function toggleFunc(el){
	el.classList.toggle('www');
	return el;
}
// toggleFunc(test);


//--3
function recFunc () {

}


//--4
function createList(ul, arr) {
	arr.forEach(function(item){
		let li = document.createElement('li');
		li.append(item);
		ul.append(li);
	})
}
let arr = [4,5,6];
// createList(ul4, arr);


//--5
function addSymbolToSibling(el, symb) {
	el.previousElementSibling.append(symb);
}
// addSymbolToSibling(p6, '!');


//--6
function wrapInParagraph(el) {
	el.childNodes.forEach(function(node){
		if(node.nodeType == 3){
			let p = document.createElement('p');
			p.append(node.data);
			node.replaceWith(p);
		}

	})
}
// wrapInParagraph(div6);


//--7
function normalizeClassNames(el){
	let classArr = el.className.split('-');
	for(let i = 1; i < classArr.length; i ++){
		let str = classArr[i].split('');
		str[0] = str[0].toUpperCase();
		classArr[i] = str.join('');
	}
	el.className = classArr.join('');

	if(el.firstElementChild != null){
		for(let i = 0; i < el.children.length; i++){
			normalizeClassNames(el.children[i]);
		}
	}
}
// normalizeClassNames(document.body);