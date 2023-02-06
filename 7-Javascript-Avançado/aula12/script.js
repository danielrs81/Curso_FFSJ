


/*


PROMISES  (PROMESSA)

*/
function exibirNaTela(dados) {
    console.log('exibir na tela', dados)
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => {
    return carregarFotos()
        .then(exibirNaTela)
        .catch()
}

function carregarFotos() {
    return new Promise ( (resolve, reject) => {
        const xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status ==200) {
                const response = JSON.parse(this.responseText)

                resolve(response)
            }

            if (this.status === 404) {
                reject()
            }
        }

        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photoss', true)

        xhttp.send()
    })
    
}