let novoElemento = document.createElement("p");
let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");
let texto = document.createTextNode("A")

novoElemento.appendChild(texto);

elementoPai.insertBefore(novoElemento , elementoAlvo);

