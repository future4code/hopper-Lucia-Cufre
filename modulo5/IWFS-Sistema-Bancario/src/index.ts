import { atualDate } from "./date";
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

app.post("/users/:cpf", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const cpf = Number(req.params.cpf);
    const { expirationDate, accountDescription, value, holderCpf } = req.body;

    if (!expirationDate) {
      expirationDate === atualDate();
    }

    if (!accountDescription || !value || !holderCpf) {
      statusCode = 422;
      throw new Error("Parâmetros obrigatórios faltando");
    }

    if (expirationDate < atualDate()) {
      statusCode = 422;
      throw new Error(
        "Data de vencimento deve ser igual ou maior a data atual."
      );
    }

    const newPayAccount = {
      expirationDate: expirationDate,
      accountDescription: accountDescription,
      value: value,
      holderCpf: holderCpf,
      id: Math.random(),
    };

    users.forEach((u) => {
      if (cpf === u.CPF) {
        u.statement.map((u) => {
          u.payAccount.push(newPayAccount);
        });
      }
    });

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
        const balance = { balance: u.balance };
        res.send(balance);
      } else {
        statusCode = 404;
        throw new Error("Usuário nao encontrado");
      }
    });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.put("/users/addMoney", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { name, CPF, value } = req.body;

    if (!name || !CPF || !value) {
      statusCode = 422;
      throw new Error("Parâmetros obrigatórios faltando");
    }
    const dateNow = Date.now();
    const date = new Date(dateNow);

    users.forEach((u) => {
      if (name === u.name && CPF === u.CPF) {
        (u.name = name), (u.CPF = CPF), (u.balance = u.balance + value);
        const newDeposit = {
          value: value,
          date: date.toLocaleDateString(),
          description: "Depósito de dinheiro",
        };
        u.statement.map((u) => {
          u.deposit.push(newDeposit);
        });
      } else {
        statusCode = 404;
        throw new Error("Os parâmetros name e/ou cpf estão incorretos");
      }
      res.status(200).send(users);
    });
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.put("/users/payAccount", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    users.forEach((u) => {
      u.statement.map((u) => {
        u.payAccount.map((pay) => {
          const data = new Date(pay.expirationDate);
          if (pay.expirationDate < atualDate()) {
            users.map((u) => {
              u.balance = u.balance - pay.value;
              // está diminuindo o total de todos os valores todas as vezes que fizer o put, fiz um id para cada pay mas nao sei como aplicar
              //a ideia de que se for o mesmo id nao diminuir..
            });
          }
        });
      });
    });

    res.status(202).send(users);
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
