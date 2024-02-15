let pessoa = 
{
    nome: "Leandro",
    idade: 19,
    profissão: "Desenvolvedor",

}


console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

delete pessoa.idade;

console.log(pessoa.idade);

pessoa.casado = false;

console.log(pessoa.casado)