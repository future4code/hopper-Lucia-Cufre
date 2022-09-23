import connection from "../database/connection";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import transporter from "../services/mailTransporter";

export async function createUser(req: Request, res: Response): Promise<void> {
  let statusCode = 400;
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      statusCode = 422;
      throw new Error("Todos os parametros devem ser passados.");
    }

    const regExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    if (regExp.test(email) !== true) {
      statusCode = 422;
      throw new Error("Deve ser passado um email valido.");
    }

    await connection("labecommerce_users").insert({
      id: uuidv4(),
      name,
      email,
      password
    });

     await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "Criação da conta!",
      text: "Parabéns, conta criada com sucesso",
      html: `<p>Parabéns ${name}, sua conta foi criada com sucesso ❤️</p>`
   })

    res.status(201).end();
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
