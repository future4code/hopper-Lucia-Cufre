import { recipesRouter } from './routes/recipesRouter';
import { userRouter } from './routes/userRouter';
import app from "./app";

app.use("/user", userRouter)
app.use("/recipe", recipesRouter)