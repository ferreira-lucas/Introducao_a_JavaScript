let qualquer = 'legal'

console.log(qualquer)

console.log(typeof qualquer)

qualquer = 2020
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

qualquer = true
console.log(qualquer)
console.log(typeof qualquer)

qualquer = []
console.log(qualquer)
console.log(typeof qualquer)

qualquer = {}
console.log(qualquer)
console.log(typeof qualquer)

qualquer = function(){}
console.log(qualquer)
console.log(typeof qualquer)

console.log("----------------------------------------------------------------------------------------------")

const peso1 = 1.0
const peso2 = 2.0

const peso3 = Number('1.2');
console.log(peso1, peso2, peso3)

console.log(Number.isInteger(peso1), Number.isInteger(peso2), Number.isInteger(peso3))

const avaliacao1 = 9.871
console.log(`avaliação = ${avaliacao1}`)
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)

console.log(media)
console.log(`media = ${media}`)

console.log(`media = ${media.toFixed(2)}`)
console.log('media = ' + media.toFixed(2))

console.log(media.toString())
console.log(media.toString(2))

console.log(typeof media)
console.log(typeof Number)

console.log("----------------------------------------------------------------------------------------------")

console.log(7 / 0)
console.log("10" / 2)
console.log("10,2" / 2)
console.log("10.2" / 2)
console.log(0.1 + 0.7)

console.log(10.345.toString())
console.log(10.345.toFixed(2))

console.log('3' + 2)

console.log("----------------------------------------------------------------------------------------------")

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(Math.PI)
console.log(area.toFixed(2))

console.log(typeof (Math))

console.log("----------------------------------------------------------------------------------------------")

let nome = "Leonardo Amaral"
console.log(nome)
nome = 'Leonardo A. Amaral'
console.log(nome)
nome = `Dr. ${nome.substring(0, nome.indexOf(" ")) + " Albernaz Amaral"}`
console.log(nome)

console.log("----------------------------------------------------------------------------------------------")

const escola = "ProgWeb_2021/2"

console.log(escola.length)
console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('W'))
console.log(escola.substring(1))
console.log(escola.substring(3))
console.log(escola.substring(0, 2))
console.log("escola " + escola)
console.log("escola ".concat(escola + "!"))
console.log("escola ".concat(escola.concat("!")))
console.log(escola.replace(2021, 'XXXX'))
console.log(escola)

console.log('Leonardo,Albernaz,Amaral'.split(','))

const vetor = 'Leonardo,Albernaz,Amaral'.split(',')
for(i in vetor){
    console.log(`elemento[${i}]: ${vetor[i]}`)
}

console.log('3' + 2)

console.log('3' - 2)

console.log("----------------------------------------------------------------------------------------------")

const nome2 = "Leonardo"
const nomeFormatado = "Olá Sr." + nome2 + " A. Amaral"
console.log(nomeFormatado)

const sobrenome = "Albernaz Amaral"
const template1 = `Olá Sr. ${nome2} ${sobrenome}`
console.log(template1)

const template2 = `
    Olá
    Sr. ${nome2} ${sobrenome}`
console.log(template2)

console.log(`1 + 1 = ${1 + 1}`)

const converteMaiusculo = texto => texto.toUpperCase()

console.log(`Ei... ${converteMaiusculo("cuidado")}!`)

console.log("----------------------------------------------------------------------------------------------")

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)

console.log(!isAtivo)

console.log(!!isAtivo)

console.log("----------------------------------------------------------------------------------------------")

console.log(!!3)
console.log(!!-1)
console.log(!!10)
console.log(!!0)
console.log(!0)

console.log("")
if(10 % 2){
    console.log("Ímpar...")
}else{
    console.log("Par...")
}

if(!(10 % 2)){
    console.log("Par...")
}else{
    console.log("Ímpar...")
}

if(!!(10 % 2) == true){
    console.log("Ímpar...")
}else{
    console.log("Par...")
}

console.log("----------------------------------------------------------------------------------------------")

const vetor2 = [1, 2, 3 , 4]
if(vetor2[6] == undefined){
    console.log("erro...")
}

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0])

console.log(valores)
valores[4] = 2
console.log(valores)

valores[10] = 22.5
console.log(valores)

valores.push("Leonardo", false)
console.log(valores)
console.log(valores.length)

valores.pop()
console.log(valores)
console.log(valores.length)

delete valores[0]
console.log(valores)
console.log(valores.length)

console.log(typeof (valores))

console.log("----------------------------------------------------------------------------------------------")

const prod1 = {}

prod1.nome = "Celular"
prod1.preco = 4998.90

console.log(prod1)

const prod2 = {
    nome: "Carro",
    preco: 100000.00
}

console.log(prod2)

console.log(prod1 == prod2)