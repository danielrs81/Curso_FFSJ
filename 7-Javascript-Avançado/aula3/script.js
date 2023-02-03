/*


ARROW FUNCTIONS


ES6


As funções de seta nos permitem escrever uma sintaxe de função mais curta.

*/


const teste =(param1, param2) => {
    console.log(param1, param2)
}

teste(1,2)


const soma = (param1, param2) => {
    return param1 + param2
}

const resultado = soma(1,2)
console.log(resultado)

/*  OU*/
// RETORNO IMPLICITO (sem a palavra return e sem as chaves)

const soma1 = (param1, param2) => param1 + param2

const resultado2 = soma1(1,20)
console.log(resultado2)


//quanto tem 1 parametro pode remover o parenteses

const teste2 = param3 => param3

console.log('ok')


const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
}
