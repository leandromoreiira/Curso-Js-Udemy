class Carrinho
{
    constructor (itens ,qtd, valortotal)
    {
        this.qtd = qtd;
        this.itens = itens;
        this.valortotal = valortotal;

    }

    addItem(item)
    {

        let contador = 0;

        for(let itemCarrinho in this.itens)
        {
            if(this.itens[itemCarrinho].id == item.id)
            {
                this.itens[itemCarrinho].qtd += item.qtd;
            }
        }
        
        if(contador == 0){

            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd
    }

    removeItem(item)
    {
        for(let itemCarrinho in this.itens)
        {
            if(this.itens[itemCarrinho].id == item.id)
            {
               let obj = this.itens[itemCarrinho];
               let index = this.itens.findIndex(function(obj){return obj.id == item.id});

              
               this.qtd -= this.itens[itemCarrinho].qtd;
               this.valorTotal -= item.preco * this.itens[itemCarrinho].preco;
               this.itens.splice(index,1)
            }
        }
    }

}


let carrinho = new Carrinho([{

  id: 01,
  nome: "Camisa",
  qtd: 1,
  preco:20
},
{
 id:02,
 nome:"Calça",
 qtd:2,
 preco:50
}],3,120)

console.log(carrinho)

carrinho.addItem({id:01,nome:"Camisa",qtd:2 , preco:20});

console.log(carrinho)

carrinho.addItem({id:03,nome:"Boné",qtd:1 , preco:15});

carrinho.removeItem({id:01, nome:"Camisa",qtd:2,preco:20})

console.log(carrinho)
