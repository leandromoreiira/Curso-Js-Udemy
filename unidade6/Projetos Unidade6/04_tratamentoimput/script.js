function checarNumero (num)
{
    let number = Number(num);

    if(Number.isNaN(number))
    {
        alert("Por favor , passe apenas número para o programa")
    }else{
        return number;
    }
}

checarNumero(5)
checarNumero("ssa");

let number = prompt("Digite um número");

checarNumero(number)
