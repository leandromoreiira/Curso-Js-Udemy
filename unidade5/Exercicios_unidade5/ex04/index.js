class Carro
{
    constructor(marca,cor,gasolinarestante,consumo)
    {
        this.marca = marca;
        this.cor = cor;
        this.gasolinarestante = gasolinarestante;
        this.consumo = consumo;
    }

    dirigir(km)
    {
        let litrosConsumidos = km/this.consumo;

        this.gasolinarestante -= litrosConsumidos;
    }

    abastecer(l)
    {
        this.gasolinarestante += l;
    }

        
    }



let carro = new Carro("Chevrolet","Preto",120,14);

console.log(carro);
carro.dirigir(100);
console.log(carro);
carro.abastecer(10000);
console.log(carro);



