import { Database, PostgresConnector } from "https://deno.land/x/denodb/mod.ts";

const { database, host, password, username } = JSON.parse(
  Deno.readTextFileSync("../config.json"),
);

const connector = new PostgresConnector({
  database: database,
  host: host,
  username: username,
  password: password,
});

const client = new Database(connector);

export default client;
