import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import _404 from "./controllers/404.ts";
import errorHandler from "./controllers/err.ts";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${8000}...`);

await app.listen("localhost:8000")