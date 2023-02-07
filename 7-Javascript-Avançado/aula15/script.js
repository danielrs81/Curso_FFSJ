


/*


DESTRUCTURING ASSIGNMENT (desestruturação de atribuição)

*/

/* 

EXEMPLO:

const obj = {
    nome: 'fulano',
    idade: 35,
}

// para chamar o objeto:

const { 
    nome: nomeDoUsuario, //posso ter outro nome de variavel 
    idade 

} = obj

console.log(nome)
// console.log(nomeDoUsuario)

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

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(transformarEmJson)    
        .catch(exibirErro)

    const {name, email, phone } = dados
    console.log(name, email, phone)
}


