let p = Promise.resolve(new Error("Não deu certo"));

console.log("lalalla")

p.then((value)=> {console.log(value)})
.catch(reason => console.log("Falhou: "+ reason));

