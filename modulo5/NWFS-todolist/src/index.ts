import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { STATUS, task, user } from "./types";
import { dateFormatMySql, dateFormatUser } from "./dateFunction";
import { stringify } from "uuid";

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

app.post("/task", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { title, description, limitDate, creatorUserId } = req.body;

    if (!title || !description || !limitDate || !creatorUserId) {
      statusCode = 422;
      throw new Error("Todos os campos de body devem ser passados.");
    }

    const userExists = await connection.raw(`
    SELECT * FROM Usuarios
    WHERE id = ${creatorUserId};
     `);

    if (userExists[0].length === 0) {
      statusCode = 404;
      throw new Error("Nao existe usuario com o id informado.");
    }

    const titleExist = await connection.raw(`
    SELECT * FROM Tarefas
    WHERE title = "${title}";
     `);

    if (titleExist[0].length !== 0) {
      statusCode = 409;
      throw new Error("Ja existe uma tarefa com esse titulo.");
    }

    const newTask: task = {
      id: Date.now(),
      title,
      description,
      limitDate,
      creatorUserId,
    };

    await connection.raw(`
  INSERT INTO Tarefas (id, title, description, limitDate, creatorUserId)
  VALUES(${newTask.id}, "${newTask.title}", "${
      newTask.description
    }", "${dateFormatMySql(newTask.limitDate)}",${newTask.creatorUserId})
  `);

    res.status(200).send({ message: "Tarefa criada." });
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

app.get("/users/all", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const users = await connection.raw(`
        SELECT id, nickname FROM Usuarios
   `);

    if (users[0].length === 0) {
      return { users: [] };
    }

    res.status(200).send({ users: users[0] });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = Number(req.params.id);

    const taskExists = await connection.raw(`
    SELECT * FROM Tarefas 
    WHERE id = ${id}
    `);

    const userNickname = await connection.raw(`
    SELECT nickname FROM Usuarios 
    `);

    if (taskExists[0].length === 0) {
      statusCode = 404;
      throw new Error("Tarefa nao encontrada.");
    }
    /* 
    const date = await connection.raw(`
    SELECT limitDate FROM Tarefas 
    WHERE taskId = ${id}
    `);

    const data = dateFormatUser(date[0]) */

    await connection.raw(`
    UPDATE Tarefas
    SET creatorUserNickname = "${userNickname}"
    WHERE id = ${id};
    `);

    const task = await connection.raw(`
    SELECT * FROM Tarefas 
    WHERE id = ${id}
   `);

    res.status(200).send(task[0]);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.get("/user", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const name = req.query.name;

    if (!name) {
      statusCode = 422;
      throw new Error("Deve ser passada a informação solicitada.");
    }

    const users = await connection.raw(`
    SELECT id, nickname
    FROM Usuarios
    WHERE nickname LIKE "%${name}%" OR email LIKE "%${name}%";
    `);

    res.status(200).send({ users: users[0] });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.params.id;
    const { name, email, nickname } = req.body;

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
      (email && emailExist[0].length !== 0) ||
      (name && nameExist[0].length !== 0) ||
      (nickname && nicknameExist[0].length !== 0)
    ) {
      statusCode = 409;
      throw new Error(
        "Nao pode existir dois usuários com as mesmas informações, name, email e nickname devem ser únicos para cada usuário."
      );
    }

    if (name && typeof name !== "string") {
      statusCode = 400;
      throw new Error("Os parâmetros devem ser em tipo string.");
    }

    if (name) {
      await connection("Usuarios").update({ name: name }).where({ id });
    }
    if (name === "") {
      statusCode = 422;
      throw new Error("O parametro name foi enviado vazio.");
    }

    if (email && typeof email !== "string") {
      statusCode = 400;
      throw new Error("Os parâmetros devem ser em tipo string.");
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

    if (nickname && typeof nickname !== "string") {
      statusCode = 400;
      throw new Error("Os parâmetros devem ser em tipo string.");
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
