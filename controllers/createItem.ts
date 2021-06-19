import { createItem } from "../services/itemService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

export default async ({ request, response }: Context) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: `${new Date()} >> invalid item data` };
    return;
  }

  console.info(`${new Date()} >> create item req`, request.headers);

  const {
    uid,
    item_created,
    author,
    jump_url,
    content,
    embed,
  } = await request.body({ type: "json" }).value;

  const itemId = await createItem({
    uid,
    item_created,
    author,
    jump_url,
    content,
    embed,
  });

  response.body = { msg: `${new Date()} item created`, itemId };
};
