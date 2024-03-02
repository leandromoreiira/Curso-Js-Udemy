class Conta
{
    constructor(saldocorrente,saldpoupanca,jurospoupanca)
    {
        this.saldocorrente = saldocorrente;
        this.saldpoupanca = saldpoupanca;
        this.jurospoupanca = jurospoupanca;
    }

    deposito(valor)
    {
        this.saldocorrente += valor;
    }
    saque(valor)
    {
        this.saldocorrente -= valor;
    }
    trasnferir(valor)
    {
        this.saldocorrente -= valor;
        this.saldpoupanca += valor;
    }
}

class ContaEspecial extends Conta
{
    constructor(saldocorrente,saldopoupanca,jurospoupanca)
    {
        super(saldocorrente,saldopoupanca,jurospoupanca);
        this.jurospoupanca*=2
    }
}
let conta = new Conta(100,200,0.5)
let contaEspecial = new ContaEspecial(100,200,0.5)
console.log(contaEspecial);
console.log(conta)

conta.saque(100)
console.log(conta)