


/*


PROMISES  (PROMESSA)

*/
function exibirNaTela(dados) {
    console.log('exibir na tela', dados)
}

function exibirErro() {
    console.log('Ops, deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => {
    return buscar('https://jsonplaceholder.typicode.com/photos', 'GET')
        .then(exibirNaTela)
        .catch(exibirErro)
}


function buscar(url, method) {
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

        xhttp.open(method,url, true)

        xhttp.send()
    })
    
}