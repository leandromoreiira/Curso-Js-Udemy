let elemento = document.querySelector('#titulo-principal');

console.log("Largura = " + elemento.offsetWidth);//considera as bordas
console.log(elemento.offsetHeight);

console.log("Largura = " + elemento.clientWidth);//não considera as bordas
console.log(elemento.clientHeight);
