import express, { Response, Request } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import { products } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("API funcionando");
});

app.get("/products", (req: Request, res: Response) => {
  try {
    res.status(200).send(products);
  } catch (error: any) {
    res.send(error.message);
  }
});

app.post("/products/create", (req: Request, res: Response) => {
  let statusCode = 400;
  const { name, price } = req.body;
  try {
    if (!name || !price) {
      statusCode = 422;
      throw new Error("É necessário informar nome e preço do produto.");
    }

    if (typeof name !== "string" || typeof price !== "number" || price <= 0) {
      statusCode = 400;
      throw new Error("Error nos parâmetros passados.");
    }

    const produto = products.find(
      (produto) =>
        produto.name.toLocaleLowerCase() === (name as string).toLowerCase()
    );

    if (produto) {
      statusCode = 409;
      throw new Error("Produto já existe");
    }

    const newProduct = {
      id: generateId(),
      name: name,
      price: price,
    };

    products.push(newProduct);

    return res.status(201).send(products);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.put("/products", (req: Request, res: Response) => {
  let statusCode = 400;
  const id = req.query.id;
  const { price } = req.body;
  try {
    const produto = products.find((prod) => prod.id === id);

    if (typeof price !== "number" || price <= 0) {
      statusCode = 400;
      throw new Error("O type do price deve ser number e maior que 0.");
    }

    if (!id || !price) {
      statusCode = 422;
      throw new Error("É necessário informar id e preço do produto");
    }
    if (!produto) {
      statusCode = 404;
      throw new Error("produto não existe");
    } else {
      produto.price = price;
    }

    return res.status(200).send(products);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.delete("/products", (req: Request, res: Response) => {
  const prodId = req.query.id;
  let statusCode = 400;

  try {
    if (!prodId) {
      statusCode = 422;
      throw new Error("Id obrigatorio");
    }
    const produto = products.find((prod) => prod.id === prodId);
    if (!produto) {
      statusCode = 404;
      throw new Error("produto não existe");
    }
    const filterProducts = products.filter((p) => {
      if (p.id !== prodId) {
        return true;
      }
    });

    return res.status(200).send(filterProducts);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
