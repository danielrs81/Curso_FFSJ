
let listaAtores = [
  {
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },

  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódio IV-VI',
  },

  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O início',
  },
]

let htmlListaAtores = ''

for (let ator of listaAtores) {



  htmlListaAtores += `

      <div id="filha">
        <h1 id="h1">${ator.nome}</h1>
        <h2 id="h2">Interpreta o personagem ${ator.personagem} no filme ${ator.filme}</h2>
      </div>


  `

}

document.querySelector('#filha').innerHTML = htmlListaAtores


