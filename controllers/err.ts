import { Context } from 'https://deno.land/x/oak/mod.ts'
import { Middleware } from 'https://deno.land/x/oak/mod.ts'

const errHandler: Middleware = async ({ response }: Context, next) => {
  try {
    await next();
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};

export default errHandler