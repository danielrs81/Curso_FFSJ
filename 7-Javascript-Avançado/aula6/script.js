const clientes = [
{ name: 'Fulano', score: 34},
{ name: 'Ciclano', score: 38},
{ name: 'Thiago', score: 80},
{ name: 'Jaqueline', score: 50},
{ name: 'Fabiana', score: 98},
]

/*

{
    pass: [],
    fail: [],
}

*/

//parametros:
// acc = accumulator
// curr = current

const clientesFinal = clientes.reduce((acc, curr) => {
    if(curr.score >= 50) {
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: [],
})

console.log(clientesFinal)

const numeros = [1, 2, 3, 4]

//  '2 - 3 - 4 - 5'

const numerosFinal = numeros.reduce((acc, curr) => {
     
    acc += `${curr + 1} - `

    return acc
}, '')

console.log(numerosFinal)