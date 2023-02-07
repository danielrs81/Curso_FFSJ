const media = 7

const alunos = [
    { 
        name: 'Maria', 
        sobrenome: 'Da Silva',
        nota: 10,
    },
    { 
        name: 'Jose', 
        sobrenome: 'Moreira',
        nota: 4,
    },
    { 
        name: 'Paulo', 
        sobrenome: 'Henrique',
        nota: 7,
    },
    { 
        name: 'Pedro', 
        sobrenome: 'Souza',
        nota: 5,
    },
    

]


const alunosLista = alunos.map((aluno) => {
    return aluno.name + ' ' + aluno.sobrenome
})

console.log(alunosLista)


const notasMaiores = alunos.filter(aluno => aluno.nota >= 7)

console.log(notasMaiores)










/*










    
    const alunosFinal = alunos.map((aluno) =>{
        return aluno.name + ' ' + aluno.sobrenome
    
        
    })
    
    console.log(alunosFinal)
    
    

    */