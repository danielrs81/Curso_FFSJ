let botaoTeste = document.querySelector('#botaoTeste')

//addEventListener
botaoTeste.addEventListener('click',function(){
  console.log('Mensagem 1')
})

botaoTeste.addEventListener('click',function(){
  console.log('Mensagem 2')
})



/*
let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

function cliqueBotao(){
  contador++

  console.log('mensagem 1')

  if (contador >= 5) {
    botaoTeste.removeEventListener('click', cliqueBotao)
  }
}


// addEventListener
botaoTeste.addEventListener('click', cliqueBotao)



// onclick
// botaoTeste.onclick = cliqueBotao

/*