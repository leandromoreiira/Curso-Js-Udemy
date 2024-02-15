function lembrarsoma(x)
{
    return function(y)
    {
        return x + y;
    }
}

let soma1 = lembrarsoma(2)

console.log(soma1(5))

let soma2 = lembrarsoma(5)

console.log(soma2(7))


function contador(i)
{
    let cont = i;
    let somarcontador = function()
    {
        console.log(cont)
        cont++
    }
    return somarcontador
}

let meucontador = contador(5)

meucontador()
meucontador()

let meucontador2 = contador(1)
meucontador()
meucontador()


