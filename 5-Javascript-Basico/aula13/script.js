let clientes = [
    {
        nome: 'Thiago',
        idade: 35,
        linguagens: ['java', 'php', 'phyton']
    },
    {
        nome: 'Daniel',
        idade: 42,
        linguagens: ['java', 'php', 'c++']
    },
    {
        nome: 'Fulano',
        idade: 32,
        linguagens: ['go', 'c#', 'c']
    }
]

/* for (let contador = 0; contador < clientes.length; contador++) {
    console.log(clientes[contador].nome)
}  */


// FORMA SIMPLIFICADA

let htmlClientes = ''


for (let cliente of clientes) {

    let listaLinguagens = ''

    for (let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }
    

    htmlClientes += `
        <li>
            <b>Nome: </b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens</b> <br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `

}

document.querySelector('#listaClientes').innerHTML = htmlClientes