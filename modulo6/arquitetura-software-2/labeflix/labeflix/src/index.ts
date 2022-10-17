import { movieRouter } from './routes/movieRouter';
import {app} from "./app"
import {userRouter} from "./routes/userRouter"

app.use("/user", userRouter)
app.use("/movie", movieRouter)

