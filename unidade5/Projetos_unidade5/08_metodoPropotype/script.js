function cachorro(raca,patas,cor)
{
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

cachorro.prototype.uivar = function()
{
    console.log("Auu")
}

cachorro.prototype.latir = function()
{
    console.log("AU-AU")
}

let husky = new cachorro('Husk',4,'Cinza')

husky.uivar();
husky.latir();