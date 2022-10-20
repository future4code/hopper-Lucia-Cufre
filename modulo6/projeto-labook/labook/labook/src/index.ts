import { postRouter } from "./routes/postRouter";
import { app } from "./app";
import { userRouter } from "./routes/userRouter";

app.use("/users", userRouter);
app.use("/posts", postRouter);
