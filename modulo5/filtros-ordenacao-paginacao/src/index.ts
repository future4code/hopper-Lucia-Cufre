import { app } from "./app";
import { getAllUsers, getAllUsersbyType } from "./endpoints/getAllUsers";

app.get("/users/:type", getAllUsers)

app.get("/users/:type", getAllUsersbyType)