import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

class PollItem extends Model {
  static table = "Items";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    uid: DataTypes.TEXT,
    item_created: DataTypes.DATE,
    author: DataTypes.TEXT,
    jump_url: DataTypes.TEXT,
    content: DataTypes.TEXT,
    embed: DataTypes.TEXT,
  };
}

export default PollItem;
