import { Database, PostgresConnector } from 'https://deno.land/x/denodb/mod.ts';

const connector = new PostgresConnector({
    database: 'KoolBoi',
    host: 'urbanlife.me',
    username: 'aclark',
    password: 'et9264Jo'
});

const client = new Database(connector)

export default client