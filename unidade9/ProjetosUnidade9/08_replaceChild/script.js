let novoElemento = document.createElement("p");
let texto = document.createTextNode("A")

novoElemento.appendChild(texto);

let heading = document.querySelector('#titulo-principal')
let paiheading = heading.parentNode;
paiheading.replaceChild(novoElemento,heading)