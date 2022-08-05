const tarefas = ["Passear cachorro"]

const add = tarefas.push(process.argv[2])

console.log( `Tarefa adicionada com sucesso!` )
console.log(tarefas)