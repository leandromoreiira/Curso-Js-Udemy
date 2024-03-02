const reg = /\w+: (Matheus|Joao|Maria)/;

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: Joao"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));



