import connection from "./connection"

async function criarTabela() {
    try {
        await connection.raw(`
        CREATE TABLE labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) UNIQUE NOT NULL,
            product_id VARCHAR(255) UNIQUE NOT NULL,
            quantity INT NOT NULL,
            total_price DECIMAL(8, 2) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
    );`)

        console.log("Tabela criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar tabela.")
        console.log(error.sqlMessage)
    }
}

criarTabela()