let num = 1;
let num1 = 5;
let num2 = 4;
let num3 = 2;

function imprimirNumeros(...args)
{
    for(i=0;i<args.length;i++)
    {
        console.log(args[i])
    }
}

imprimirNumeros(num,num1,num2);
console.log('pause');
imprimirNumeros(num2,num3);
console.log('pause');
imprimirNumeros(1,3,4,5,6,7,8,9,0,10);

