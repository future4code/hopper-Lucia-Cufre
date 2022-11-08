import { postRouter } from "./routes/postRouter";
import { app } from "./app";
import { userRouter } from "./routes/userRouter";
import { friendRouter } from "./routes/friendRouter";

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/friends", friendRouter)
