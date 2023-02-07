

const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}



const mediaAluno = aluno.notas.reduce((acc, curr) =>  acc +  curr)

console.log(`A média de Maria foi ${mediaAluno} para o total de bimestres`)