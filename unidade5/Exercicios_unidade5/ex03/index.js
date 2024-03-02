class Endereco
{
    constructor (rua,bairro,cidade,estado)
    {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua)
    {
        this.rua = novaRua; // o objeto this recebe um rua nova
    }

    set novoBairro(novoBairro)
    {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade)
    {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado)
    {
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Rua dos anjos ", "Quaragatatuba","Itapetininga","Minas Gerais");

console.log(endereco);

endereco.novaRua = "Rua dos Girassos ";

console.log(endereco);

endereco.novoBairro = "Bayrro";

console.log(endereco);

endereco.novaCidade = "Conselheiro Lafaiete";

console.log(endereco);

endereco.novoEstado = "Bahia";

console.log(endereco);




