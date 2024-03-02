const data = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(data.test("01/02/2001"));
console.log(data.test("1/2/2001"));
console.log(data.test("01-02-2001"));
console.log(data.test("02/99/0020"));


