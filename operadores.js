const a = 7
let b = 3

b += a
console.log(b)

b -= 4
console.log(b)

b *= 2
console.log(b)

b /= 2
console.log(b)

b %= 2
console.log(b)

console.log("----------------------------------------------------------------------------------------------")

const pessoa = {
    nome2: "Maria",
    idade: 8,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome2, idade} = pessoa
console.log(nome2, idade)

const { nome2: n, idade: i } = pessoa
console.log(n, i)

const {endereco: {logradouro: endereco, numero}} = pessoa
console.log(n, i, endereco, numero)

console.log("----------------------------------------------------------------------------------------------")

const [z] = [10]
console.log(z)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [j, k, l, m] = [3, 5, 1, 15]
console.log(j, k, l ,m)

console.log("----------------------------------------------------------------------------------------------")

const [o, p, q ,r] = [3, 5, 1, 15]
console.log(o, p, q, r)

const soma = o + p + q + r
const subtracao = r - p
const multiplicacao = o * p
const divisao = r / o
const modulo = o % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)

console.log("----------------------------------------------------------------------------------------------")

console.log('1.', '1' == 1)
console.log('2.', '3' != 3)
console.log('3.', '1' === 1)
console.log('4.', '3' !== 3)
console.log('5.', 3 < 2)
console.log('6.', 3 > 2)
console.log('7.', 3 <= 2)
console.log('8.', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('9.', d1 === d2)
console.log('10.', d1 == d2)

console.log('11.', d1.getTime() === d2.getTime())

console.log('12.', undefined == null)
console.log('13.', undefined === null)

console.log("----------------------------------------------------------------------------------------------")

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho2 && trabalho1
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

console.log("----------------------------------------------------------------------------------------------")

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))