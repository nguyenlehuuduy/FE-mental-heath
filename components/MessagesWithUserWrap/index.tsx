"use client";

import { formatDate } from "@/lib/utils";
import { Button, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CallVideoIcon, InfoIcon, PhoneIcon } from "../../icons";
import {
  MessageForCard,
  MessageForResponse,
  RoomMessageInfForCard,
} from "@/service/messageService";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import AvatarAccount from "../Avata";
import { sendMessageForUser } from "./action";
import io, { Socket } from "socket.io-client";
import { EVENTS } from "@/lib/constants";

interface Account {
  avata: string | null;
  full_name: string;
  id: string;
  nick_name: string | null;
}

type PropsComponent = {
  listMessage: Array<MessageForCard>;
  infRoom: RoomMessageInfForCard;
  sessionKey?: string;
};

const MessagesWithUserWrap = ({
  listMessage,
  infRoom,
  sessionKey,
}: PropsComponent) => {
  const socket = io("http://localhost:8005", {
    transports: ["websocket"],
    auth: {
      token: sessionKey ?? "",
    },
  });
  const [mySocket, setMySocket] = useState<Socket>(socket);
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [listMessages, setListMessages] =
    useState<MessageForCard[]>(listMessage);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }
    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
      socket.emit(EVENTS.CLIENT.JOIN_ROOM, infRoom.id);
      setMySocket(socket);
      console.log("connect: ", isConnected, "transport", transport);
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  useEffect(() => {
    mySocket.on(EVENTS.CLIENT.SEND_ROOM_MESSAGE, (data: MessageForResponse) => {
      setListMessages((prev) => [
        ...prev,
        {
          content_text: data.contentText,
          created_at: data.created_at,
          id: data.id,
          owner: {
            avata: data.owner.avata,
            email: data.owner.email,
            full_name: data.owner.fullName,
            id: data.owner.id,
          },
          owner_id: data.ownerId,
          room_id: data.roomId,
          updated_at: data.updated_at,
        },
      ]);
    });
  }, []);

  const handleSendMessage = async () => {
    const res = await sendMessageForUser(message, infRoom.id);
    const data: MessageForResponse = {
      contentText: res?.contentText ?? "",
      created_at: new Date(),
      id: res?.id ?? "",
      owner: {
        avata: profile?.email ?? "",
        email: profile?.email ?? "",
        fullName: profile?.full_name ?? "",
        id: profile?.id ?? "",
      },
      ownerId: profile?.id ?? "",
      roomId: infRoom.id,
      updated_at: new Date(),
    };
    mySocket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, data);
    setMessage("");
  };
  let infoFriend: Account | undefined;
  const profile = useSelector((state: RootState) => state.auth.user);
  const pageRef = useRef<HTMLDivElement>(null);
  function scrollToBottom() {
    if (pageRef) {
      pageRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "end",
      });
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  infoFriend = infRoom.account_in_room.find(
    (account) => account.id !== profile?.id,
  );

  useEffect(() => {
    scrollToBottom();
  }, [listMessages]);
  return (
    <div className="max-w-[820px] w-full flex flex-col rounded-md h-[calc(100vh-70px)]">
      <div className="flex flex-row justify-between gap-5 max-h-[76px] h-full px-5 py-2 bg-white border-l border-b border-r">
        <div className="flex justify-center gap-4">
          <AvatarAccount
            name={infoFriend?.full_name!}
            filePath={infoFriend?.avata!}
            height={50}
            width={50}
          />
          <div className="flex flex-col justify-center">
            <p className="font-medium">{infoFriend?.full_name ?? ""}</p>
            <p className="font-normal text-[13px] text-[#666666]">
              Đang hoạt động
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <div className="p-2  rounded-full border flex justify-center items-center">
            <PhoneIcon width={20} height={20} />
          </div>
          <div className="p-2 rounded-full border flex justify-center items-center">
            <CallVideoIcon width={20} height={20} />
          </div>
          <div className="p-2 rounded-full border flex justify-center items-center">
            <InfoIcon width={20} height={20} />
          </div>
        </div>
      </div>

      {/* List message */}
      <div className="w-full h-1/2 flex-1 flex-col overflow-auto p-5 ">
        {listMessages.map((item, index) => (
          <div
            ref={pageRef}
            key={item.id || index}
            className={`flex  w-full flex-row ${item.owner_id === profile?.id && "justify-end"} items-start gap-3 pb-4`}
          >
            {item.owner_id !== profile?.id && (
              <div className="relative h-[40px] w-[40px] rounded-full">
                <AvatarAccount
                  name={infoFriend?.full_name!}
                  filePath={infoFriend?.avata!}
                  height={40}
                  width={40}
                />
              </div>
            )}
            <div className="flex flex-col max-w-[380px] h-auto gap-2">
              <div className="flex flex-col justify-center max-w-[380px] bg-sky-500 rounded-md p-2">
                <p className="text-base text-white font-normal">
                  {item.content_text}
                </p>
              </div>
              <div
                className={`px-2 flex  ${item.owner_id === profile?.id && "justify-end"}`}
              >
                <p className="text-xs font-normal text-[#666666]">
                  {formatDate(String(item.created_at), "HH:mm:ss")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-3 flex items-center gap-2">
        <Input
          autoFocus
          size="large"
          placeholder="Nhập tin nhắn ..."
          name="contentText"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyDown={handleKeyPress}
        />
        <Button size="large" htmlType="button" onClick={handleSendMessage}>
          Gửi
        </Button>
      </div>
    </div>
  );
};

export default MessagesWithUserWrap;
