/*

JSON

JAVASCRIPT OBJECT NOTATION

*/

/*  modelo de objeto VVVVV */ 

const objeto = {
    nome: 'fulano',
    idade: 23,
}

// console.log(JSON.stringify(objeto))

const json = JSON.stringify(objeto)

console.log(json)

// converter JSON em objeto usando o JSON.parse

const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)



