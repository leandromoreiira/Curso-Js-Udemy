const email = /\w+@\w+\.\w+/;

console.log(email.test("ronaldinhodofutebol@gmail.com"));
console.log(email.test("ronaldinhodofutebol.com"));
console.log(email.test("ronaldinhodofutebol@gmail"));

