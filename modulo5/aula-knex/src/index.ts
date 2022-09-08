import { func } from "./types";
import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/funcionarios", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const search = req.body.name;

    if (search) {
      const func = await connection.raw(`
             SELECT * FROM Funcionarios 
             WHERE name LIKE '%${search}%'
             `);
      res.status(200).send(func[0]);
    } else {
      const func = await connection("Funcionarios").select();
      res.status(200).send(func);
    }
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.post("/funcionarios", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { name, email } = req.body;

    if ((!name && typeof name) || !email) {
      statusCode = 422;
      throw new Error("Devem ser passadas as informações name e email.");
    }

    if (typeof name !== "string" || typeof email !== "string") {
      statusCode = 400;
      throw new Error("O parametro name e email devem ser string.");
    }

    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

    if (regExp.test(email) !== true) {
      statusCode = 422;
      throw new Error("Deve ser passado um email valido.");
    }

    if (name.length < 4) {
      statusCode = 422;
      throw new Error("O nome deve ter no minimo 4 digitos.");
    }

    const emailExist = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE email = "${email}";
     `);

    if (emailExist[0].length !== 0) {
      statusCode = 409;
      throw new Error("Email ja cadastrado");
    }

    const novoFunc: func = {
      id: Date.now(),
      name,
      email,
    };

    await connection("Funcionarios").insert(novoFunc);

    res.status(202).send(novoFunc);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.put("/funcionario/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.params.id;
    const email = req.body.email;

    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

    if (!email || regExp.test(email) !== true) {
      statusCode = 422;
      throw new Error("Deve ser passado um email valido.");
    }

    const usuarioExiste = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE id = ${id};
     `);

    if (usuarioExiste[0].length === 0) {
      statusCode = 404;
      throw new Error("Usuario nao encontrado.");
    }

    const emailExist = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE email = "${email}";
     `);

    if (emailExist[0].length !== 0) {
      statusCode = 409;
      throw new Error("Email ja cadastrado");
    }

    await connection("Funcionarios").update({ email: email }).where({ id });

    res.status(202).send({ message: "Email alterado com sucesso." });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.delete("/funcionario/:id", async (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = req.params.id;

    const usuarioExiste = await connection("Funcionarios")
      .select()
      .where({ id });

    if (usuarioExiste.length === 0) {
      statusCode = 404;
      throw new Error("Usuario nao encontrado");
    }

    await connection("Funcionarios").delete().where({ id });

    res.status(202).send({ message: "Usuario deletado." });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
