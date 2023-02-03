/*

LOCAL STORAGE

*/

const tarefas = [
    { tarefa: 'estudar JS'},
    { tarefa: 'estudar Node.Js'},
    { tarefa: 'estudar react.js'},
]

const tarefasJson = JSON.stringify(tarefas)

console.log(tarefasJson)

localStorage.setItem('tarefas', tarefasJson)

const listaTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)

