const reg1 = new RegExp('Bola');

console.log(reg1.test("Tem Bola?"));
console.log(reg1.test("Tem ?"));

const reg2 = /bola/;

let text = 'tem bola na sexta';

console.log(reg2.test("Tem Bola?"));
console.log(reg2.test("Tem ?"));
console.log(reg2.test(text));
console.log(/quadrado/.test("Onde tem quadrado?"))
console.log(/quadrado/.test("bxbjbxjbjquadradokkdkadka"))

