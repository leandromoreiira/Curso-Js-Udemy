function recursao(n)
{
    if ( n -1 <2)
    {
    console.log("Recursão parou",n)
}else if (n% 2 != 0)
{
    console.log("numero impar",n)
    recursao(n-1)
}else
{
    console.log("numero par",n)
    recursao(n-2)
}

}

recursao(39)
recursao(59)
recursao(79)
