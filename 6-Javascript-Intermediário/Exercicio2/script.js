/* let data = 0
document.querySelector('#contador').innerHTML = data

function incremento() {
    
    setInterval(function(){
    data++
    document.getElementById('contador').innerHTML = data
  }, 900)

}

function decremento() {
    let intervalo = setInterval(function(){
        data--
        contador.innerText = data
      }, 900)
}

function reset() {
    data = 0
    document.querySelector('#contador').innerHTML = data
}


let botaoPausar = document.querySelector('#pausar')

botaoPausar.onclick = function() {
  clearInterval(intervalo)
}


document.getElementById('rel').innerHTML = x;

*/


let contador = document.querySelector('#contador')

let count = 0

let intervalo = setInterval(function(){
  count++
  contador.innerText = count
},900)


// let botaoPausar = document.querySelector('#botaoPausar')


botaoPausar.onclick = function() {
  clearInterval(intervalo)
}
