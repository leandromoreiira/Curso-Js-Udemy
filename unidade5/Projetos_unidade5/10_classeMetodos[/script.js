class Cachorro
{
    constructor(raca,patas,cor)
    {
        this.raca = raca;
        this.cor=cor;

    }
}

Cachorro.prototype.patas = 4 ;

let labrador = new Cachorro('Labrador','Amarelo')

console.log(labrador.patas)

