const marca = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

console.log(marca.test("127.0.0.1"));
console.log(marca.test("12.2.2.1"));
console.log(marca.test(".0.0.1"));
console.log(marca.test("1212.044.0.1"));






