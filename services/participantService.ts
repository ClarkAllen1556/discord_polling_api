import Participate from "../repository/participantRepo.ts";
import client from "../db/database.ts";

export const getParticipants = async () => {
  client.link([Participate]);

  const participants = await Participate.all();
  return participants;
};

export const createParticipant = async (
  participantData: {
    uid?: string;
    name?: string;
  },
) => {
  client.link([Participate]);

  const newParticipant = {
    uid: String(participantData.uid),
    name: String(participantData.name),
  };

  return await Participate.create([newParticipant]);
};
