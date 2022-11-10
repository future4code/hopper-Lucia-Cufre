import app from "./app"
import { createProduct } from "./endpoints/createProduct"
import { createUser } from "./endpoints/createUser"
import { postPurchases } from "./endpoints/postPurchases"
import { getProducts } from "./endpoints/getProducts"
import { getUsers } from "./endpoints/getUsers"
import { getUserPurchases } from "./endpoints/getUserPurchases"
import { getPurchases } from "./endpoints/getPurchases"


app.post("/users", createUser)
app.post("/products", createProduct)
app.post("/purchases", postPurchases)
app.get("/users", getUsers)
app.get("/products", getProducts)
app.get("/users/:user_id/purchases", getUserPurchases)
app.get("/purchases", getPurchases)