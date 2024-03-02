const notab = /[^ab]/;
console.log("^ab")

console.log(notab.test('a'));
console.log(notab.test('pindamonhgaba'));
console.log(notab.test('b'));

const nottoaz = /[^a-z]/;

console.log("a-z")

console.log(nottoaz.test('a'));
console.log(nottoaz.test('pindamonhgaba'));
console.log(nottoaz.test(' '));
console.log(nottoaz.test('abcde'));
console.log(nottoaz.test('1234'));

const az = /[a-z]/;

console.log("az")
console.log(az.test('1234'));
