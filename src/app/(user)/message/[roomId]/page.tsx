import { ChatList, MessagesWithUserWrap } from "../../../../../components";
import {
  getAllValidMessageInRoom,
  getInfRoomMessage,
} from "@/service/messageService";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { COOKIE_ACCESS_TOKEN_KEY } from "@/lib/constants";

export default async function MessagePage({
  params,
}: {
  params: { roomId: string };
}) {
  async function getAllMessageOfRoom(idRoom: string) {
    try {
      return await getAllValidMessageInRoom(idRoom);
    } catch (error) {
      console.error(error);
    }
  }
  const listMessage = await getAllMessageOfRoom(params.roomId);
  const infRoom = await getInfRoomMessage(params.roomId);
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;
  revalidateTag("get-valid-message-chat");
  return (
    <div className="flex gap-2 w-full">
      <div className={`w-[30%] bg-white rounded-md p-2`}>
        <ChatList />
      </div>
      <div className="w-[70%] bg-white rounded-md p-2">
        <MessagesWithUserWrap
          infRoom={infRoom!}
          listMessage={listMessage!}
          sessionKey={sessionKey}
        />
      </div>
    </div>
  );
}
