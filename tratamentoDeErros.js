const obj = { nome: 'Leonardo' }

function imprimirNomeGritado(obj){
    console.log(obj.nome.toUpperCase())
}
imprimirNomeGritado(obj)

console.log("----------------------------------------------------------------------------------------------")

const obj2 = { nome: 'Leonardo' }

function tratarErroELancar(erro){
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado2(obj2){
    try {
        console.log(obj2.name.toUpperCase())//execução com erro
    } catch (error) {
        tratarErroELancar(error)
    }finally{
        console.log('Programa finalizado')
    }
}

imprimirNomeGritado2(obj2)