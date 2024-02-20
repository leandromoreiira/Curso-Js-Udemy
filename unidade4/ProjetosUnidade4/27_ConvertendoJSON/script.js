let pessoa = 
{
    "nome": "leo",
    "idade": 19,
    "profissao": "desenvolvedor",
    "area": ["back-end" , "front-end"]
}


let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON)

console.log(pessoaJSON.area[0]);