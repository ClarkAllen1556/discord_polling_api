import PollItem from '../repository/itemRepo.ts'
import client from "../db/database.ts"

export const getItems = async () => {
    client.link([PollItem])

    const items = await PollItem.all()
    return items
}