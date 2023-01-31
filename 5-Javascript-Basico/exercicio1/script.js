nome = prompt('Digite o seu nome:')
idade = prompt('Digite sua idade')

if (idade >= 18) {
    document.write(`Olá ${nome}, com ${idade} anos você é MAIOR de idade.`)
} else {
    document.write(`Olá ${nome}, com ${idade} anos você é MENOR de idade.`)
}