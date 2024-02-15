function multiplicartresnumero(x,y,z)
{
    return x*y*z;
}
console.log(multiplicartresnumero(2,3,4))
const mult = multiplicartresnumero(5,4,8);
console.log("O Valor de mult é " + mult)


function podedirigir(idade,cnh)
{
    if(idade >=18 && cnh == true)
    {
        console.log("Pode dirigir")
    }else
    {
        console.log("Não pode dirigir")
    }
}

console.log( podedirigir (19 , true));
console.log(podedirigir (25 , true));
console.log(podedirigir (44 , 0));
console.log(podedirigir (19 , 1));
console.log(podedirigir (17 , true));

