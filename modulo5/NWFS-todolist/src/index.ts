import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { user } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
      statusCode = 422;
      throw new Error("É necessário passar todas as informações do body.");
    }

    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

    if (regExp.test(email) !== true) {
      statusCode = 422;
      throw new Error("Deve ser passado um email valido.");
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof nickname !== "string"
    ) {
      statusCode = 400;
      throw new Error("Os parâmetros devem ser em tipo string.");
    }

    const emailExist = await connection.raw(`
    SELECT * FROM Usuarios
    WHERE email = "${email}";
     `);

    const nameExist = await connection.raw(`
    SELECT * FROM Usuarios
    WHERE name = "${name}";
     `);

    const nicknameExist = await connection.raw(`
    SELECT * FROM Usuarios
    WHERE nickname = "${nickname}";
     `);

    if (
      emailExist[0].length !== 0 ||
      nameExist[0].length !== 0 ||
      nicknameExist[0].length !== 0
    ) {
      statusCode = 409;
      throw new Error(
        "Nao pode existir dois usuários com as mesmas informações, name, email e nickname devem ser únicos para cada usuário."
      );
    }

    const newUSer: user = {
      id: Date.now(),
      name,
      email,
      nickname,
    };

    await connection.raw(`
    INSERT INTO Usuarios (id, name, email, nickname)
    VALUES(${newUSer.id}, "${newUSer.name}", "${newUSer.email}", "${newUSer.nickname}")
    `);

    res.status(202).send({ message: "Usuário criado." });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.params.id;

    const user = await connection.raw(`
        SELECT * FROM Usuarios
        WHERE id = ${id};
         `);

    if (user[0].length === 0) {
      statusCode = 404;
      throw new Error("Usuário nao encontrado");
    }

    res.status(200).send(user[0]);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.params.id;
    const { name, email, nickname } = req.body;
// quis colocar as outras validacoes que tem no post no put porem quando colocava as informacoes de forma correta ficava travando nos erros. e nao rodava o restante
    if (name) {
       await connection("Usuarios").update({ name: name }).where({ id });
    }
    if (name === "") {
        statusCode = 422;
        throw new Error("O parametro name foi enviado vazio.");
      }

    if (email) {
       await connection("Usuarios").update({ email: email }).where({ id });
    }
 
    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

    if (email && regExp.test(email) !== true) {
      statusCode = 422;
      throw new Error("Deve ser passado um email valido.");
    } 

    if (email === "") {
        statusCode = 422;
        throw new Error("O parametro email foi enviado vazio.");
      }

    if (nickname) {
      await connection("Usuarios").update({ nickname: nickname }).where({ id });
    }
    if (nickname === "") {
      statusCode = 422;
      throw new Error("O parametro nickname foi enviado vazio.");
    }
    res.status(202).send({ message: "Usuario alterado." });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});



app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
