var a = 3
let b = 4

var a = 30
//let b = 40 - variáveis tipo let não podem ser redeclaradas

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 50 - constantes não podem alterar o valor

console.log(c)

console.log("----------------------------------------------------------------------------------------------")

{
    {
        var sera = "Será???"
        console.log(sera)
    }
}
console.log(sera) //variavel é acessível fora de um bloco de código

function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local) //variável definida dentro de uma função não é acessível globalmente - gera erro

console.log("----------------------------------------------------------------------------------------------")

var numero = 1
{
    var numero = 2
    console.log('dentro = ${numero}')//'' não possibilita a chamada de variáveis
    console.log(`dentro= ${numero}`)//`` possibilita a chamada de variáveis
}
console.log('fora = ${numero}')//'' não possibilita a chamada de variáveis
console.log(`fora = ${numero}`)//`` possibilita a chamada de variáveis

console.log("----------------------------------------------------------------------------------------------")

const funcs = []

for(var i=0; i<10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//var não tem conciência de bloco

console.log("----------------------------------------------------------------------------------------------")

const funcs2 = []

for(let i=0; i<10; i++){
    funcs2.push(function (){
        console.log(i)
    })
}

funcs2[2]()
funcs2[8]()
funcs2[0]()
//let tem conciência de bloco

console.log("----------------------------------------------------------------------------------------------")

for(let i = 0; i < 3; i++){
    console.log(i)
}
//console.log('i =', i) let não é acessível fora do escopo declarado - gera erro

console.log("")

let j
for (j = 0; j < 3; j++) {
    console.log(j)
}
console.log('j =', j)