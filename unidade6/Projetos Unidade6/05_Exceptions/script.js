function saudacao(nome)
{
    if(typeof nome != 'string')
    {
        throw new Error ("O Parâmetro nome precisa ser uma string")
    }else{
        console.log(`Olá ${nome}.`)
    }
}

saudacao("leo");
saudacao(3);
console.log("teste");