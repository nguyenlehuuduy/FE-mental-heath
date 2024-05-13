"use client";

import { formatDate } from "@/lib/utils";
import { RoomBotMessageForCard } from "@/service/messageService";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import ModalCreateRoomChatBot from "../ModalCreateRoomChatBot";

type PropsComponent = {
  listBotRoomChat: Array<RoomBotMessageForCard>;
  currentRoom?: string;
};

export default function ListRoomMessageChat(props: PropsComponent) {
  const routes = useRouter();
  const [isShowModalCreate, setIsShowModalCreate] = useState<boolean>(false);
  return (
    <Fragment>
      {isShowModalCreate && (
        <ModalCreateRoomChatBot
          handleCancel={() => setIsShowModalCreate(false)}
          handleOk={() => {}}
          isModalOpen={isShowModalCreate}
        />
      )}
      <div
        className="p-3 bg-blue-600 text-white text-sm rounded-md border cursor-pointer text-center"
        onClick={() => setIsShowModalCreate(true)}
      >
        + Tạo thêm cuộc trò chuyện
      </div>
      {props.listBotRoomChat.map((item, index) => (
        <div
          className={`flex flex-col p-3 ${props.currentRoom === item.id ? "bg-blue-50" : "bg-white"} rounded-md border cursor-pointer relative`}
          key={index}
          onClick={() => {
            routes.push(`/chat-bot?idBotRoom=${item.id}`);
          }}
        >
          <p className="text-sm">
            {formatDate(String(item.created_at), "DD/MM/YYYY")}
          </p>
          <span className="font-medium">{item.name_room}</span>
          {/* //TODO:LASTEST MESSAGE TO DO */}
          <label className="text-[14px]">Bạn: tin nhắn cuối cùng</label>
          <p className="absolute bottom-2 right-2 text-[14px]">Xóa</p>
        </div>
      ))}
    </Fragment>
  );
}
