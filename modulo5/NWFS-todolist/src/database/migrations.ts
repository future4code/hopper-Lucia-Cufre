import connection from "./connection"

const criarTabelaUsuarios = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Usuarios (
            id BIGINT PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            nickname VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
            );
        `)

        console.log("Tabela Usuarios criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Usuarios.")
        console.log(error.sqlMessage)
    }
}

async function criarTabelaTarefas() {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS  Tarefas (
            taskId BIGINT PRIMARY KEY,
            title VARCHAR(255) UNIQUE NOT NULL,
            description VARCHAR(255) NOT NULL, 
            limitDate DATE NOT NULL,
            creatorUserId BIGINT UNIQUE NOT NULL,
            creatorUserNickname VARCHAR(255) NOT NULL
        )
          
        `)
        
        console.log("Tabela Tarefas criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Tarefas.")
        console.log(error.sqlMessage)
    }
}

criarTabelaUsuarios()
criarTabelaTarefas()
