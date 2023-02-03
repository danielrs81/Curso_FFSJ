const clientes = [
{ name: 'Fulano', lastname: 'Da Silva', age: 14},
{ name: 'Ciclano', lastname: 'Santos', age: 18},
{ name: 'Daniel', lastname: 'Rodrigues', age: 20},
]


const clientesFinal = clientes.map((cliente) => {
    return cliente.name + ' ' + cliente.lastname + ' tem ' + cliente.age + ' anos'
})

console.log(clientesFinal)


const clintesMaiores = clientes.filter(cliente => {
    let retorno = false

    if (cliente.age >= 18) {
        retorno = true
    }
    
    return retorno
})

console.log(clintesMaiores)


//  if ternário - IF de uma linha


const clintesMaiores2 = clientes.filter(cliente => {
    return cliente.age >= 18 ? true : false
})

console.log(clintesMaiores2)


// Outro exemplo:

const clintesMaiores3 = clientes.filter(cliente => cliente.age >= 18)

console.log(clintesMaiores3)