"use server";

import { sendMessage } from "@/service/messageService";

export const sendMessageForUser = async (
  contentMessage: string,
  roomId: string,
) => {
  const res = await sendMessage({ contentMessage, roomId });
  return res;
};
