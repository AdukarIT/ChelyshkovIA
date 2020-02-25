let table  = document.getElementById('age-table');
let label = table.getElementsByTagName('label');
console.log(label);
console.log(table.getElementsByTagName('td')[0]);
console.log(document.getElementsByTagName('form')[1]);
console.log(document.querySelector('form[name="search"]'));
console.log(document.querySelector('form[name="search"]').getElementsByTagName('input')[0]);
console.log(document.querySelector('[name="info[0]"'))