import { createParticipant } from "../services/participantService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

export default async ({ request, response }: Context) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: `${new Date()} >> invalid item data` };
    return;
  }

  const {
    uid,
    name,
  } = await request.body({ type: "json" }).value;

  console.info(
    `>> ${new Date()} >> create item req`,
    uid,
  );

  const participantId = await createParticipant({
    uid,
    name,
  });

  response.body = { msg: `${new Date()} participant created`, participantId };
};
