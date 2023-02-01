

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento) {
  evento.preventDefaut()

  console.log('OK')

}