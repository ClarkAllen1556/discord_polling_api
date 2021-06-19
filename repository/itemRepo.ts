import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts'
// import client from '../db/database.ts'

class PollItem extends Model {
    static table = "Items"

    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        uid: DataTypes.TEXT,
        itemCreated: DataTypes.DATE,
        author: DataTypes.TEXT,
        jumpUrl: DataTypes.TEXT,
        content: DataTypes.TEXT,
        embed: DataTypes.TEXT
    }
}

export default PollItem
