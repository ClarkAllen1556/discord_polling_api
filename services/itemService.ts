import PollItem from "../repository/itemRepo.ts";
import client from "../db/database.ts";

export const getItems = async () => {
  client.link([PollItem]);

  const items = await PollItem.all();
  return items;
};

export const createItem = async (
  itemData: {
    uid?: string;
    item_created?: Date;
    author?: string;
    jump_url?: string;
    content?: string;
    embed?: string;
  },
) => {
  client.link([PollItem]);

  const newItem = {
    uid: String(itemData.uid),
    item_created: itemData.item_created
      ? new Date(String(itemData.item_created))
      : new Date(),
    author: String(itemData.author),
    jump_url: String(itemData.jump_url),
    content: String(itemData.content),
    embed: String(itemData.embed),
  };

  const fill = await PollItem.create([newItem]);
  return fill;
};
