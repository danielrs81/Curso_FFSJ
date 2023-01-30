/*
string
number
boolean
array
object
undefined
null
*/



// String
let nome = 'Daniel'
console.log(nome)

// Concatenação
let sobrenome = 'Rodrigues'
//console.log(nome + ' ' + sobrenome)

console.log(`${nome} ${sobrenome}`)

// Number
let idade = 41
console.log(idade)
console.log(idade + 10)

//Boolean (True ou False)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)


//Array
let habilidades = ['PHP', 'Javascript', 'HTML']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[1])

//object
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['c++', 'JCSS', 'HTML5']
}

console.log(pessoa)
console.log(pessoa.nome)

console.log(pessoa.habilidades[0])

//Undefined

let endereco
console.log(endereco)


// Null
let cidade = null
console.log(cidade)
