const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.sitedojao.com"));
console.log(validaDominio.test("www.sitedojao.com.br"));
console.log(validaDominio.test("www.sitedojao"));
console.log(validaDominio.test("sitedojao.com"));
