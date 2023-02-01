function clicar() {
    let nome = prompt('Digite o seu nome:')
    let idade = prompt('Digite sua idade')


    let idadeMinima = 18

    if (nome === '') {
        window.alert('Preencha os campos corretamente')
        
    } else if (idade === '') {
        window.alert('Preencha os campos corretamente')
    }
    

    if (idade >= idadeMinima && nome === 'Tomas' || nome === 'tomas') {
        document.querySelector('#linha1').innerHTML = `Olá ${nome}, com ${idade} anos você é MAIOR de idade!`
        document.querySelector('#linha2').innerHTML = 'Você é personagem do filme Matriz!'

    } else if (idade < idadeMinima && nome === 'Tomas' || nome === 'tomas') {
        document.querySelector('#linha1').innerHTML = `Olá ${nome}, com ${idade} anos você é MENOR de idade!`
        document.querySelector('#linha2').innerHTML = 'Você é personagem do filme Matriz!'

    } else if (idade >= 18) {
        document.querySelector('#linha1').innerHTML = `Olá ${nome}, com ${idade} anos você é MAIOR de idade!`

    } else if (idade < 18) {
        document.querySelector('#linha1').innerHTML = `Olá ${nome}, com ${idade} anos você é MENOR de idade!`
    }

}










