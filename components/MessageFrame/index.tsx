"use client";

import Image from "next/image";
import React from "react";
import {
  CallVideoIcon,
  InfoIcon,
  MessageIcon,
  PhoneIcon,
  SearchIcon,
  SendIcon,
} from "../../icons";
import "react-chat-elements/dist/main.css";
import { Input } from "antd";

const MessageData = [
  {
    message: "Em à, hôm nay anh thiếu điều quan trọng nhất - là em.",
    date: "22h32PM",
    image: "big_logo.png",
    isUser: false,
  },
  {
    message:
      " Anh nói như vậy, cứ như anh đang thiếu một phần của bản thân ấy.",
    date: "22h32PM",
    isUser: true,
  },
  {
    message: "Đúng vậy, em là phần không thể thiếu của cuộc sống này.",
    date: "22h32PM",
    isUser: false,
  },
  {
    message:
      " Anh nói như vậy, cứ như anh đang thiếu một phần của bản thân ấy.",
    date: "22h32PM",
    isUser: true,
  },
  {
    message: "Cút",
    date: "22h32PM",
    isUser: true,
  },
  {
    message: "Hehe",
    date: "22h32PM",
    isUser: false,
  },
];

const MessageFrame = ({ handleOpenShare }: { handleOpenShare: () => void }) => {
  return (
    <div className="max-w-[820px] w-full h-screen flex flex-col rounded-md">
      <div className="flex flex-row justify-between gap-5 max-h-[76px] h-full px-5 py-2 bg-white border-l border-b border-r">
        <div className="flex flex-row gap-4">
          <div className="relative w-[60px] h-[60px] justify-center items-center">
            <Image fill src="/big_logo.png" alt="avatar" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold text-xl leading-5">Trần Kim Vũ</p>
            <p className="font-normal text-base text-[#666666]">
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
          <div
            className="p-2 rounded-full border flex justify-center items-center"
            onClick={handleOpenShare}
          >
            <InfoIcon width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex-1 flex-col overflow-auto p-5">
        {MessageData.map((item: any, index) => (
          <div
            key={index}
            className={`flex w-full flex-row ${item.isUser && "justify-end"} items-start gap-3 pb-4`}
          >
            {!item.isUser && (
              <div className="relative h-[40px] w-[40px] rounded-full">
                <Image src="/big_logo.png" fill alt="avatar" />
              </div>
            )}
            <div className="flex flex-col max-w-[380px] h-auto gap-2">
              <div className="flex flex-col max-w-[380px] bg-white rounded-md p-2">
                <p className="text-base font-normal">{item.message}</p>
                {item.image && (
                  <div className="relative max-w-[380px] h-full">
                    <Image
                      src="/big_logo.png"
                      width={400}
                      height={400}
                      style={{
                        maxWidth: 350,
                        height: "auto",
                      }}
                      objectFit="cover"
                      alt="image"
                    />
                  </div>
                )}
              </div>
              <div className={`px-2 flex  ${item.isUser && "justify-end"}`}>
                <p className="text-xs font-normal text-[#666666]">22h35 PM</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-3">
        <Input
          size="large"
          placeholder="Nhập tin nhắn ..."
          style={{
            border: "none",
            paddingLeft: 8,
            paddingRight: 8,
          }}
          suffix={<SendIcon />}
          prefix={
            <Image
              src="/big_logo.png"
              width={400}
              height={400}
              style={{
                maxWidth: 35,
                height: "auto",
              }}
              objectFit="cover"
              alt="image"
            />
          }
        />
      </div>
    </div>
  );
};

export default MessageFrame;
