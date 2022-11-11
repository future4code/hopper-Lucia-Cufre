import connection from "./connection"



async function criarTabelaTarefas() {
    try {
        await connection.raw(`
        CREATE TABLE Tarefas (
            id BIGINT PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        description TEXT NOT NULL, 
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limitDate DATE NOT NULL,
        creatorUserId BIGINT NOT NULL,
        FOREIGN KEY (creatorUserId) REFERENCES Usuarios(id)
    );
          
        `)
        
        console.log("Tabela Tarefas criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Tarefas.")
        console.log(error.sqlMessage)
    }
}

criarTabelaTarefas()
