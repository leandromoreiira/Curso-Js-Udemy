function verificarNumero(num){
return  new Promise((resolve,reject) =>
{
    if(num == 2)
    {
        resolve(console.log(`O numero é igual a ${num}`))
    }else{
        reject(new Error(`O Número não é igual a ${num}`))
    }
})
}
 verificarNumero(2);
 verificarNumero(4);
 verificarNumero(48);


