import { statement, users } from "./data";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { name, CPF, birthDate } = req.body;

    if (!name || !CPF || !birthDate) {
      statusCode = 422;
      throw new Error("Parâmetros obrigatórios faltando");
    }

    const birthYear = birthDate.substr(6, 4);
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - Number(birthYear);

    if (age < 18) {
      statusCode = 403;
      throw new Error(
        "Para criar uma conta bancaria deve ter 18 anos ou mais."
      );
    }

    users.forEach((u) => {
      if (CPF === u.CPF) {
        statusCode = 409;
        throw new Error("Já existe um usuário cadastrado com esse CPF.");
      }
    });

    const newUser = {
      name,
      CPF,
      birthDate,
      balance: 0,
      statement: [],
    };

    users.push(newUser);

    res.status(200).send(users);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.get("/users", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.get("/users/:cpf", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const cpf = Number(req.params.cpf);
    users.forEach((u) => {
      if (cpf === u.CPF) {
        res.status(200).send({ balance: u.balance });
      } else {
        statusCode = 404;
        throw new Error("Usuário nao encontrado");
      }
    });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.put("/users", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { name, CPF, value } = req.body;

    if (!name || !CPF || !value) {
      statusCode = 422;
      throw new Error("Parâmetros obrigatórios faltando");
    }

    users.forEach((u) => {
      if (name === u.name && CPF === u.CPF) {
        (u.name = name), (u.CPF = CPF), (u.balance = u.balance + value);
      } else {
        statusCode = 404;
        throw new Error("Os parâmetros name e/ou cpf estão incorretos");
      }

      res.status(200).send(users)
    });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
