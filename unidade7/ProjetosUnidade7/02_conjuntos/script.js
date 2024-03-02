const reg1 = /[12345]/;

console.log(reg1.test('temos o número 6'));
console.log(reg1.test('temos o número 2'));
console.log(reg1.test('temos o número 23'));
console.log(reg1.test('temos o número 26'));

const reg2 = /[1-5]/;

console.log(reg1.test('temos o número 6'));
console.log(reg1.test('temos o número 2'));
console.log(reg1.test('temos o número 65'));
console.log(reg1.test('temos o número 77'));

