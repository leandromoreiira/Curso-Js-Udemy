const dia = /\d\d/;

console.log(dia.test('2019') && "2019".length==2);
console.log(dia.test('sad'));
console.log(dia.test('05'));

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test('sad'));
console.log(palavraTresLetras.test('sadas'));
console.log(palavraTresLetras.test('as'));

