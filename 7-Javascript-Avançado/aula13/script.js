


/*


FETCH (BUSCAR)

*/

function transformarEmJson(response) {
    return response.json()
}


function exibirNaTela(dados) {
    console.log('exibir na tela', dados)
}


function exibirErro() {
    console.log('Ops, deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(transformarEmJson)    
    .then(exibirNaTela)
        .catch(exibirErro)
}


