const clientes = [
{ name: 'Fulano', lastname: 'Da Silva'},
{ name: 'Ciclano', lastname: 'Santos'},
{ name: 'Daniel', lastname: 'Rodrigues'},
]

// ['Fulano Da Silva', 'Ciclano Santos']


let clientesFinal = []

clientes.forEach(function(cliente) {
    clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)


// Método MAP - programação funcional - ainda não tem no curso

/*
((exemplo) =>{    *** Arrow Functions ***
    
}) 

// nova variavel = variavel do array.map(() =>{
    return 
})

-- o map depende que retorne, o MAP vai percorrer o array e vai retornar um array na variavel indicada --
*/

const clientesFinalMap = clientes.map((cliente) =>{
    return cliente.name + ' ' + cliente.lastname
})

console.log(clientesFinalMap)


