nome = prompt('Digite o seu nome:')
idade = prompt('Digite sua idade')


if (idade >= 18 && nome === 'Tomas' || nome === 'tomas') {
    document.write(`Olá ${nome}, com ${idade} anos você é MAIOR de idade! Você é personagem do filme Matriz!`)
} else if (idade < 18 && nome === 'Tomas' || nome === 'tomas') {
    document.write(`Olá ${nome}, com ${idade} anos você é MENOR de idade! Você é personagem do filme Matriz!`)
} else if (idade >= 18) {
    document.write(`Olá ${nome}, com ${idade} anos você é MAIOR de idade!`)
} else if (idade < 18) {
    document.write(`Olá ${nome}, com ${idade} anos você é MENOR de idade!`)
}