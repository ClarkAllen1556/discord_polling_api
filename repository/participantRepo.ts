import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

class Participant extends Model {
  static table = "Participants";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    uid: DataTypes.TEXT,
    name: DataTypes.TEXT,
  };
}

export default Participant;
