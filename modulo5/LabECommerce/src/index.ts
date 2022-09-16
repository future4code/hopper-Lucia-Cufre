import app from "./app"
import { createProduct } from "./endpoints/createProduct"
import { createUser } from "./endpoints/createUser"
import { finalPurchases } from "./endpoints/finalPurchases"
import { getProducts } from "./endpoints/getProducts"
import { getUsers } from "./endpoints/getUsers"


app.post("/users", createUser)
app.get("/users", getUsers)

app.post("/products", createProduct)
app.get("/products", getProducts)

app.post("/purchases", finalPurchases)