import { Router } from "https://deno.land/x/oak/mod.ts"
import getItems from "./controllers/getItems.ts"
// import createItem from "./controllers/createItem"
const router = new Router()
router
    .get("/get/items", getItems)
    // .post("/items", createItem)

export default router