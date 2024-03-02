let p = Promise.resolve(5);

console.log("blá-blá")

console.log(p)

p.then((value)=> {return value + 89})
.then((value) => {console.log(`Value é ${value}`)})
.then((value)=>{console.log(value)})

let d = Promise.resolve(123)

console.log(d)


d.then((value)=> {console.log(value)})


let a = Promise.resolve(9)

a.then((value)=>{console.log(value)})