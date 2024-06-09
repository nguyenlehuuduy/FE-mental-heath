"use server";

import { callGetRequest } from "./apiService";

interface RoomMessageForResponse {
  id: string;
  created_at: string;
  updated_at: string;
  accountInRoom: Array<string>;
  nameRoom: string;
  avatar: string;
}

export type RoomMessageForCard = {
  id: string;
  created_at: string;
  updated_at: string;
  account_in_room: Array<string>;
  name_room: string;
  //TODO_115430: UPDATE IMAGE OF ROOM
  image_room: string;
};

export async function getAllRoomMessageAccount(): Promise<
  Array<RoomMessageForCard> | undefined
> {
  const res = await callGetRequest(`/room-message`);
  if (res.status === 200) {
    const data: Array<RoomMessageForResponse> = res.response;
    const listRoomMessage: Array<RoomMessageForCard> = [];
    for (const item of data) {
      listRoomMessage.push({
        id: item.id,
        account_in_room: item.accountInRoom,
        created_at: item.created_at,
        image_room: item.avatar && process.env.API_BASE_URL + item.avatar,
        name_room: item.nameRoom,
        updated_at: item.updated_at,
      });
    }
    return listRoomMessage;
  }
}
