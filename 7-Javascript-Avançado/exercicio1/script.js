const alunos = [
    { 
        name: 'Maria', 
        sobrenome: 'Da Silva',
    },
    { 
        name: 'Jose', 
        sobrenome: 'Moreira',
    },
    { 
        name: 'Paulo', 
        sobrenome: 'Henrique',
    },
    { 
        name: 'Pedro', 
        sobrenome: 'Souza',
    },
    

]


const alunosLista = alunos.map((aluno) => {
    return aluno.name + ' ' + aluno.sobrenome
})

console.log(alunosLista)











/*










    
    const alunosFinal = alunos.map((aluno) =>{
        return aluno.name + ' ' + aluno.sobrenome
    
        
    })
    
    console.log(alunosFinal)
    
    

    */