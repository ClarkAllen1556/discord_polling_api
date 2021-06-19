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
    embed_url?: string;
    attachment_url?: string;
    channel_id?: string;
  },
) => {
  client.link([PollItem]);

  const newItem = {
    uid: String(itemData.uid),
    item_created: itemData.item_created
      ? new Date(String(itemData.item_created))
      : null,
    author: String(itemData.author),
    jump_url: String(itemData.jump_url),
    content: String(itemData.content),
    embed_url: String(itemData.embed_url),
    attachment_url: String(itemData.attachment_url),
    channel_id: String(itemData.channel_id),
  };

  const fill = await PollItem.create([newItem]);
  return fill;
};
