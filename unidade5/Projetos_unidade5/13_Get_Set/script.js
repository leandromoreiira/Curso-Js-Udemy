class Cachorro
{
    constructor(raca,patas,cor)
    {
        this.raca = raca;
        this.cor=cor;

    }

    latir()
    {
        console.log("Au Au")
    }

    get getCor()
    {
        return this.cor;
    }

    set setCor(cor){
        this.cor =cor;
    }
}

let pastor = new Cachorro('Pastor Alemão','Sem cor');

console.log(pastor);

pastor.setCor = 'Marrrom';
console.log(pastor.getCor)