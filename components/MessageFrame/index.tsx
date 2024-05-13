"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CallVideoIcon, InfoIcon, PhoneIcon } from "../../icons";
import { Button, Input, Spin } from "antd";
import {
  MessageForCard,
  RoomMessageInfForCard,
} from "@/service/messageService";
import { MyselfForCard } from "@/service/accountService";
import { formatDate } from "@/lib/utils";
import { ActionMessageForSendBotState, sendMessageToBot } from "./action";
import { useFormState } from "react-dom";
type PropsComponent = {
  listMessage: Array<MessageForCard>;
  profile: MyselfForCard;
  idBotRoom: string;
  infRoom: RoomMessageInfForCard;
};
const defaultData = {
  contentText: "",
};
const initialState: ActionMessageForSendBotState = {
  validate: defaultData,
  success: false,
  response: undefined,
};
function scrollLastElement() {
  const element = document.getElementById("last-element");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
  }
}
export default function MessageFrame(props: PropsComponent) {
  const [{ success, response }, formAction] = useFormState(
    sendMessageToBot,
    initialState,
  );
  const [listMessage, setListMessage] = useState<Array<MessageForCard>>(
    props.listMessage,
  );
  const [message, setMessage] = useState<string>("");
  const [disableSend, setDisableSend] = useState<boolean>(false);
  useEffect(() => {
    setListMessage(props.listMessage);
  }, [props]);

  useEffect(() => {
    if (success) {
      setListMessage([
        ...listMessage,
        {
          content_text:
            response?.content_text ?? "Xin lỗi hiện tôi không thể trả lời !",
          created_at: new Date(),
          id: response?.id ?? "",
          owner: {
            avata: "",
            email: "",
            full_name: "",
            id: "",
          },
          owner_id: response?.owner_id ?? "",
          room_id: response?.room_id ?? "",
          updated_at: new Date(),
        },
      ]);
    }
    setDisableSend(false);
    setMessage("");
  }, [success, response]);

  useEffect(() => {
    scrollLastElement();
  }, [listMessage]);

  return (
    <div className="max-w-[820px] w-full flex flex-col rounded-md h-[calc(100vh-70px)]">
      <div className="flex flex-row justify-between gap-5 max-h-[76px] h-full px-5 py-2 bg-white border-l border-b border-r">
        <div className="flex justify-center gap-4">
          <div className="relative w-[50px] h-[50px] justify-center items-center">
            <Image
              fill
              src="/big_logo.png"
              alt="avatar"
              className="absolute w-full aspect-square rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-medium">{props.infRoom.name_room ?? ""}</p>
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
      <div className="w-full h-1/2 flex-1 flex-col overflow-auto p-5 ">
        {listMessage.map((item, index) => (
          <div
            key={index}
            className={`flex w-full flex-row ${item.owner_id === props.profile.id && "justify-end"} items-start gap-3 pb-4`}
            id={
              listMessage.length === index + 1
                ? "last-element"
                : `element${index}`
            }
          >
            {item.owner_id !== props.profile.id && (
              <div className="relative h-[40px] w-[40px] rounded-full">
                {/* TODO:avata update later */}
                <Image src={"/later.png"} fill alt="avatar" />
              </div>
            )}
            <div className="flex flex-col max-w-[380px] h-auto gap-2">
              <div className="flex flex-col max-w-[380px] bg-white rounded-md p-2">
                <p className="text-base font-normal">{item.content_text}</p>
              </div>
              <div
                className={`px-2 flex  ${item.owner_id === props.profile.id && "justify-end"}`}
              >
                <p className="text-xs font-normal text-[#666666]">
                  {formatDate(String(item.created_at), "HH:mm:ss")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form
        className="mx-4 mb-3 flex items-center"
        action={formAction}
        onSubmit={() => {
          setMessage("");
          setDisableSend(true);
        }}
      >
        <Spin size="small" className={`mr-3 ${!disableSend && "hidden"}`} />
        <Input
          size="large"
          placeholder="Nhập tin nhắn ..."
          name="contentText"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          disabled={disableSend}
        />
        <Input className="hidden" name="roomId" value={props.idBotRoom} />
        <Button
          htmlType="submit"
          onClick={() => {
            setListMessage([
              ...listMessage,
              {
                content_text: message,
                created_at: new Date(),
                id: "",
                owner: {
                  avata: props.profile.email,
                  email: props.profile.email,
                  full_name: props.profile.full_name,
                  id: props.profile.id,
                },
                owner_id: props.profile.id,
                room_id: props.idBotRoom,
                updated_at: new Date(),
              },
            ]);
          }}
        >
          Gửi
        </Button>
      </form>
    </div>
  );
}
