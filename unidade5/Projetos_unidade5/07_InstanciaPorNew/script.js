function cachorro(raca,patas,cor)
{
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function()
    {
        console.log("Auuuuu");
    }

}

let husky = new cachorro('Husk',4,'Cinza')

husky.uivar();