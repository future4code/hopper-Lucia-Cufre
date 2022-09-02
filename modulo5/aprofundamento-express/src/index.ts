import { taskList } from "./data";
import express, { Response, Request } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

/* 
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
}) */

app.get("/todos", (req: Request, res: Response) => {
  const newArray = taskList
    .map((task) => {
      if (task.completed === false) {
        return task;
      }
    })
    .filter(Boolean);

  res.send(newArray);
});

app.get("/todos/:userId", (req: Request, res: Response) => {
  const id = req.params.id;

  const filterTasks = taskList.filter((u) => {
    if (u.userId === id) {
      return true;
    }
  });
  
  res.send(filterTasks);
});

app.post("/todos", (req: Request, res: Response) => {
  const { title, completed } = req.body;

  taskList.push({
    userId: Date.now().toString(),
    id: Date.now().toString(),
    title: title,
    completed: completed,
  });

  res.send(taskList);
});

app.put("/todos/:taskId", (req: Request, res: Response) => {
  const taskId = req.params.id;
  const { title, completed } = req.body;

  const findTask = taskList.findIndex((task) => task.id === taskId);

  if (findTask === -1) {
    res.status(400);
  } else {
    const newTask = {
      userId: Date.now().toString(),
      id: taskId,
      title: title,
      completed: completed,
    };
    /* taskList.splice(findTask, 1, newTask); */
    res.send(newTask);
  }
});

app.delete("/todos", (req: Request, res: Response) => {
  const id = req.query.id;

  const newList = taskList.filter((t) => {
    if (t.id !== id) {
      return true;
    }
  });

  res.send(newList);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
