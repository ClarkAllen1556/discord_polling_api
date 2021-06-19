import { Router } from "https://deno.land/x/oak/mod.ts";
import getItems from "./controllers/getItems.ts";
import getParticipants from "./controllers/getParticipants.ts";

import createItem from "./controllers/createItem.ts";
import createParticipant from "./controllers/createParticipant.ts";

const router = new Router();
router
  .get("/get/items", getItems)
  .get("/get/participants", getParticipants)
  .post("/create/item", createItem)
  .post("/create/participant", createParticipant);

export default router;
