import express, { Response, Request } from "express";
import cors from "cors";
import { users } from "./usuarios";
import { posts } from "./posts";
const app = express();

app.use(express.json());
app.use(cors());

//ex1
/* app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello from Express");
}); */

app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

/* app.get("/posts", (req: Request, res: Response) => {
    res.send(posts)
}) */

app.get("/posts", (req: Request, res: Response) => {
  const id = req.query.id;

  if (!id) {
    res.status(400).send("Id obrigatório");
  }
  const filterPost = posts.filter((p) => {
    if (p.userId === id) {
      return true;
    }
  });

  res.send(filterPost);
});

app.delete("/posts", (req: Request, res: Response) => {
  const id = req.query.id;

  if (!id) {
    res.status(400).send("Id obrigatório");
  }
  const filterPost = posts.filter((p) => {
    if (p.id !== id) {
      return true;
    }
  });

  res.send(filterPost);

})

app.delete("/user", (req: Request, res: Response) => {
  const id = req.query.id;

  if (!id) {
    res.status(400).send("Id obrigatório");
  }

  const filterUser = users.filter((u) => {
   if(u.id !== id){
    return true
   }
  })

  res.send(filterUser)

})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});


//ex6. Você acha melhor criá-los dentro ou fora do array de usuários? 
//Por uma questão de organização eu escolhi cira-los fora do array de usuários, considerando que os mesmos tem o userId.