const cep = /\d{5}-\d{3}/;


console.log(cep.test("36404-308"));
console.log(cep.test("04-308"));


const tel =  /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(31)99102-4567"));
console.log(tel.test("(31)9102-4567"));

