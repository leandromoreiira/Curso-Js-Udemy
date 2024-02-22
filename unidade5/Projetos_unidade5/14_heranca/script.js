class mamifero 
{
    constructor(patas)
    {
        this.patas = patas;
    }
}

let coiote = new mamifero (4);
console.log(coiote.patas)

class cachorro extends mamifero {
    constructor(patas,raca)
    {
        super(patas,patas);
        TouchList.raca = raca
    }

    latir()
    {
        console.log("AU AU ")
    }
}

let pug = new cachorro(4,"pug")

console.log(pug.patas)


pug.latir()