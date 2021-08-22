let variavel1
console.log(variavel1)

variavel1 = null
console.log(variavel1)

console.log(null == undefined)
console.log(null === undefined)

const nome = null
console.log(nome)

console.log("----------------------------------------------------------------------------------------------")

console.log(typeof Object)

console.log(typeof new Object)

const Cliente = function(){}

console.log(typeof Cliente)

console.log(typeof new Cliente)

class Produto{}

console.log(typeof Produto)
console.log(typeof new Produto)

const vetor = []
console.log(typeof vetor)

console.log("----------------------------------------------------------------------------------------------")

function imprimeSoma(a, b){
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimeSoma(2)
imprimeSoma(2, 3, 4, 5, 6, 7)

function soma(a = 0, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

console.log("----------------------------------------------------------------------------------------------")

const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 3))

const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2("3")
imprimir2("teste...")

console.log("----------------------------------------------------------------------------------------------")

const saudacao = "Opa"
console.log(saudacao)

function exec(){
    const saudacao = 'Falaaa'
    return saudacao
}
console.log(exec())

const cliente = {
    nome: 'Leonardo',
    idade: 45,
    peso: 67,
    endereço: {
        logradouro: 'Rua Primeiro de Outubro',
        numero: 1234
    }
}
console.log(cliente)

console.log("----------------------------------------------------------------------------------------------")

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}
console.log(typeof obj)

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')
console.log(typeof obj2)
console.log(typeof obj3)
console.log(obj2.nome, obj3.nome)
obj2.exec()