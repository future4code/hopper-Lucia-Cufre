import { users, USERTYPE } from "./data";
import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

app.get("/users/type", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const type = req.query.type;

    if (!type) {
      statusCode = 422;
      throw new Error("Falta parâmetro de busca.");
    }

    if (
      type.toLocaleString().toUpperCase() !== USERTYPE.ADMIN &&
      type.toLocaleString().toUpperCase() !== USERTYPE.NORMAL
    ) {
      statusCode = 422;
      throw new Error("Inserir um tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
    }
    const typeOfUser = users
      .map((u) => {
        if (u.type.toUpperCase() === type.toLocaleString().toUpperCase()) {
          return u;
        }
      })
      .filter(Boolean);

    res.status(200).send(typeOfUser);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

//Passei os parametros como query porque se trata de uma busca por palavra chave dentro de um conjunto e nao por precisão de busca
//A forma de garantir que types validos sejam utilizados é fazendo uso dos operadores logicos, comprovando que só esses valores sejam passados. Caso contrario, dá erro.

app.get("/users/name", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const name = req.query.name as string;

    if (!name) {
      statusCode = 422;
      throw new Error("Falta parâmetro query");
    }

    const user = users.find((u) => {
      return u.name.toLowerCase() === name.toLowerCase();
    });

    if (!user) {
      statusCode = 404;
      throw new Error("Usuário nao encontrado");
    }

    res.status(200).send(user);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.post("/users", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const { name, email, type, age } = req.body;

    if (!name || !email || !type || !age) {
      statusCode = 422;
      throw new Error("Está faltando algum parâmetro no body");
    }

    if (
      type.toUpperCase() !== USERTYPE.ADMIN &&
      type.toUpperCase() !== USERTYPE.NORMAL
    ) {
      statusCode = 422;
      throw new Error("Inserir um tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
    }

    const newUser = {
      id: Math.random(),
      name,
      email,
      type,
      age,
    };
    users.push(newUser);
    res.send(users);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

// nao percebi nenhuma mudança passando o post para o put.. porem acho que por boas practicas é recomendabel utilizar o post para "postar" adicionar, criar um elemento.
// e o put para modificar.

app.put("/users/:id", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = Number(req.params.id);
    const newName = req.body.name;

    if (!newName) {
      statusCode = 422;
      throw new Error("Está faltando o parâmetro no body");
    }

    const userExists = users.find((u) => {
      return u.id === id;
    });
    if (!userExists) {
      statusCode = 404;
      throw new Error("Usuario nao encontrado");
    }

    users.forEach((u) => {
      if (id === u.id) {
        u.name = newName + "-ALTERADO";
      }
    });

    res.status(200).send();
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.patch("/users/:id", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = Number(req.params.id);
    const newNameAgain = req.body.name;

    if (!newNameAgain) {
      statusCode = 422;
      throw new Error("Está faltando o parâmetro no body");
    }

    const userExists = users.find((u) => {
      return u.id === id;
    });
    if (!userExists) {
      statusCode = 404;
      throw new Error("Usuario nao encontrado");
    }

    users.forEach((u) => {
      if (id === u.id) {
        u.name = newNameAgain + "-REALTERADO";
      }
    });

    res.status(200).send();
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.delete("/users/:id", (req: Request, res: Response) => {
  let statusCode = 400;
  try {
    const id = Number(req.params.id);

    const userExists = users.find((u) => {
      return u.id === id;
    });
    if (!userExists) {
      statusCode = 404;
      throw new Error("Usuario nao encontrado");
    }

    const newUsers = users.filter((u) => {
      if (u.id !== id) {
        return true;
      }
    });

    res.status(200).send(newUsers);
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
