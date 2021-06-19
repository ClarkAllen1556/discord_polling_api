import { createItem } from "../services/itemService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

export default async ({ request, response }: Context) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: `${new Date()} >> invalid item data` };
    return;
  }

  const {
    uid,
    item_created,
    author,
    jump_url,
    content,
    embed_url,
    attachment_url,
    channel_id,
  } = await request.body({ type: "json" }).value;

  console.info(
    `>> ${new Date()} >> create item req`,
    uid,
    await request.body({ type: "json" }).value,
  );

  const itemId = await createItem({
    uid,
    item_created,
    author,
    jump_url,
    content,
    embed_url,
    attachment_url,
    channel_id,
  });

  response.body = { msg: `${new Date()} item created`, itemId };
};
