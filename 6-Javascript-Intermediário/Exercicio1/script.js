



//initialising a variable name data
  
var data = 0;
  
//imprimindo o valor padrão dos dados que é 0 na tag h2
document.querySelector("#contador").innerHTML = data;
  
//criação da função de incremento
function incremento() {
    data++;
    document.querySelector("#contador").innerHTML = data;
}
//criação da função de decremento
function decremento() {
    data--;
    document.querySelector("#contador").innerHTML = data;
}






















/* let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

function cliqueBotao(){
  contador++

  console.log('mensagem 1')

  if (contador >= 5) {
    botaoTeste.removeEventListener('click', cliqueBotao)
  }
}


addEventListener
botaoTeste.addEventListener('click', cliqueBotao)



// onclick
// botaoTeste.onclick = cliqueBotao



*/

