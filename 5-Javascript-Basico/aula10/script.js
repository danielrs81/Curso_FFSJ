let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let media = (nota1 + nota2) / 2

let mediaMinima = 7

if (media >= mediaMinima) {
    document.write(`Você foi Aprovado com a média '${media}', parabens!`)
} else if (media < mediaMinima) {
    document.write(`Você foi REPROVADO com a média '${media}'`)
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write(`Nossa você foi muito bem', continue assim!`)
} else if (media >= mediaMinima && media === 9) {
    document.write(`Você mandou bem, vamos tentar chegar no 10!`)
} else if (media <= 5) {
    document.write(`Você precisa estudar muita para melhorar a média!`)
}