/* for (let contador = 1; contador <= 50; contador++) {
    document.write(`Hello World ${contador}`)
    document.write('<br>')
}

*/


let opcoes

for (let contador = 1900; contador <= 2023; contador++) {
    opcoes += `<option>${contador}</option>`

}
document.querySelector('#ano').innerHTML = opcoes





let lista = ''

let clientes = ['Daniel', 'Fulano', 'Ciclano', 'Thiago']

for (let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista