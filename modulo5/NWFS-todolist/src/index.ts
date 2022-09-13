import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { task, user } from "./types";
import { dateFormatMySql } from "./dateFunction";

const app = express();

app.use(express.json());
app.use(cors());
//1
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
//4
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
//9
app.post("/task/responsible", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { task_id, responsible_user_id } = req.body;

    if (!task_id || !responsible_user_id) {
      statusCode = 422;
      throw new Error("Devem ser passadas todos os parâmetros do body.");
    }

    const responsibleExists = await connection.raw(`
    select * from ResponsabelPelaTarefa
    where responsible_user_id = ${responsible_user_id} and task_id = ${task_id}
    `);

    if (responsibleExists[0].length !== 0) {
      statusCode = 409;
      throw new Error("O usuário ja é responsável pela tarefa.");
    }

    await connection.raw(`
    INSERT INTO ResponsabelPelaTarefa(task_id, responsible_user_id)
    VALUES (${task_id}, ${responsible_user_id})
    `);

    res.status(201).send({
      message: `Tarefa atribuida ao usuario com id ${responsible_user_id}`,
    });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//2
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
//6
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
//14
app.get("/task/delayed", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const delayedTasks = await connection.raw(`
      SELECT Tarefas.id as taskId, title, description, DATE_FORMAT(limitDate,'%d/%m/%Y') as limitDate, 
      creatorUserId, u.nickname as creatorUserNickname FROM Tarefas
      JOIN Usuarios as u ON Tarefas.creatorUserId = u.id
       WHERE limitDate < NOW()
      `);

    res.status(200).send(delayedTasks[0]);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//5
app.get("/task/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = Number(req.params.id);

    const taskExists = await connection.raw(`
    SELECT * FROM Tarefas 
    WHERE id = ${id}
    `);

    if (taskExists[0].length === 0) {
      statusCode = 404;
      throw new Error("Tarefa nao encontrada.");
    }

    const task = await connection.raw(`
    SELECT t.id as taskId, t.title, t.description, DATE_FORMAT(t.limitDate,'%d/%m/%Y') as limitDate, 
    t.status, t.creatorUserId, u.nickname as creatorUserNickname FROM Tarefas as t
    JOIN Usuarios as u ON t.creatorUserId = u.id
    WHERE t.id = ${id}
   `);

    res.status(200).send(task[0]);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//11
app.get("/tasks/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.params.id;

    if (!id) {
      statusCode = 422;
      throw new Error("Falta passar o id da tarefa.");
    }
    const taskExists = await connection.raw(`
    SELECT * FROM Tarefas 
    WHERE id = ${id}
    `);

    if (taskExists[0].length === 0) {
      statusCode = 404;
      throw new Error("Tarefa nao encontrada.");
    }

    const task = await connection.raw(`
    SELECT t.id as taskId, t.title, t.description, DATE_FORMAT(t.limitDate,'%d/%m/%Y') as limitDate, t.creatorUserId, u.nickname as creatorUserNickname FROM Tarefas as t
     JOIN Usuarios as u ON t.creatorUserId = u.id
     WHERE t.id = ${id}
    `);

    const responsible = await connection.raw(`
    SELECT Usuarios.id, Usuarios.nickname FROM ResponsabelPelaTarefa
    JOIN Usuarios ON ResponsabelPelaTarefa.responsible_user_id = Usuarios.id
    JOIN Tarefas ON ResponsabelPelaTarefa.task_id = Tarefas.id
    WHERE Tarefas.id = ${id}
    `);

    res.status(200).send({ ...task[0], responsibleUsers: responsible[0] });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//10
app.get("/task/:id/responsible", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = Number(req.params.id);

    if (!id) {
      statusCode = 422;
      throw new Error("Deve ser passado o id da tarefa.");
    }

    const taskExists = await connection.raw(`
    SELECT * FROM Tarefas
    WHERE id = ${id}
    `);

    if (taskExists[0].length === 0) {
      statusCode = 409;
      throw new Error("Tarefa nao existe.");
    }

    const responsible = await connection.raw(`
    SELECT Usuarios.id, Usuarios.nickname FROM ResponsabelPelaTarefa
    JOIN Usuarios ON ResponsabelPelaTarefa.responsible_user_id = Usuarios.id
    JOIN Tarefas ON ResponsabelPelaTarefa.task_id = Tarefas.id
    WHERE task_id = ${id}
    `);

    res.status(200).send({ users: responsible[0] });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//8
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
//7
app.get("/task", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.query.creatorUserId;

    if (!id) {
      statusCode = 422;
      throw new Error("Deve ser informado o creatorUserId.");
    }

    const getTasks = await connection.raw(`
    SELECT t.id as taskId, title, description, DATE_FORMAT(limitDate,'%d/%m/%Y') as limitDate, creatorUserId, status, u.nickname as creatorUserNickname FROM Tarefas as t
    JOIN Usuarios as u ON  t.creatorUserId = u.id
    WHERE creatorUserId = ${id}
    `);

    res.status(200).send({ tasks: getTasks[0] });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//13
app.get("/tasks", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const status = req.query.status;

    if (!status) {
      statusCode = 422;
      throw new Error("Deve ser informado o status.");
    }

    const tasks = await connection.raw(`
     SELECT Tarefas.id as taskId, title, description, DATE_FORMAT(limitDate,'%d/%m/%Y') as limitDate, 
     creatorUserId, u.nickname as creatorUserNickname FROM Tarefas
     JOIN Usuarios as u ON Tarefas.creatorUserId = u.id
     WHERE status = "${status}"
    `);

    res.status(200).send({ tasks: tasks[0] });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//3
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
//12
app.put("/task/status/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.params.id;
    const status = req.body.status as string;

    if (!id || !status) {
      statusCode = 422;
      throw new Error("Os parâmetros id e status sao obrigatórios.");
    }

    const taskExists = await connection.raw(`
    SELECT * FROM Tarefas
    WHERE id = ${id}
     `);

    if (taskExists[0].length === 0) {
      statusCode = 409;
      throw new Error("Tarefas nao encontrada.");
    }

    await connection("Tarefas")
      .update({ status: `${status}` })
      .where({ id: `${id}` });

    res.status(202).send({ message: "Status da tarefa atualizado." });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});
//15
app.delete(
  "/task/:taskId/responsible/:responsibleUserId",
  async (req: Request, res: Response) => {
    let statusCode = 400;
    try {
      const taskId = Number(req.params.taskId);
      const responsibleId = Number(req.params.responsibleUserId);

      if (!taskId || !responsibleId) {
        statusCode = 422;
        throw new Error("Devem ser passados todos os parametros.");
      }

      /* const exists = await connection.raw(`
    SELECT Tarefas.id, Usuarios.id FROM ResponsabelPelaTarefa
    JOIN Usuarios ON ResponsabelPelaTarefa.task_id = Usuarios.id
    JOIN Tarefas ON ResponsabelPelaTarefa.responsible_user_id = Tarefas.id
     `);

     if(exists[0].length === 0){
      statusCode = 409
      throw new Error("O usuário ou tarefa nao existe. ");
     } */

      await connection.raw(`
     DELETE FROM  ResponsabelPelaTarefa
     WHERE task_id = ${taskId} AND responsible_user_id = ${responsibleId}
     `);

      res
        .status(202)
        .send({ message: "O usuário ja nao é mais responsável pela tarefa." });
    } catch (error: any) {
      res.status(statusCode).send(error.message);
    }
  }
);

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
