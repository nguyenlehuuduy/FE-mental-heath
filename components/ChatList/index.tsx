"use client";

import { Divider, Input, List, Skeleton } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { HeartIcon, SearchIcon } from "../../icons";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import { RoomMessageForCard } from "@/service/roomMessageService";
import AvatarAccount from "../Avata";
import { useRouter } from "next/navigation";
import { getTimeAgo } from "@/lib/utils";

type PropsComponents = {
  listRoomChat: RoomMessageForCard[];
};

const ChatList = ({ listRoomChat }: PropsComponents) => {
  const [data, setData] = useState<RoomMessageForCard[]>(listRoomChat);

  const router = useRouter();
  return (
    <div className="flex flex-col  w-full h-screen">
      <div className="flex flex-col gap-3">
        <p className="font-medium text-[#666666]">Tin nhắn</p>
        <Input
          placeholder="Tìm kiếm"
          allowClear
          style={{
            background: "#FAFBFD",
            color: "#666666",
            fontWeight: 500,
          }}
          suffix={<SearchIcon width={14} height={14} />}
          variant="borderless"
        />
      </div>
      <div className="overflow-auto h-screen">
        <InfiniteScroll
          dataLength={data.length}
          next={() => {}}
          hasMore={data.length < 1}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>Hết tin nhắn</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push(`/message/${item.id}`);
                }}
              >
                <div className="flex flex-row w-full h-full justify-between py-3 gap-2">
                  <div className="relative w-[44px] h-[44px] rounded-full flex justify-center items-center">
                    <AvatarAccount
                      name={item.name_room}
                      filePath={item.image_room}
                      height={44}
                      width={44}
                    />
                  </div>
                  <div className="flex flex-row items-start  w-full justify-between">
                    <div className="flex flex-col justify-start gap-1 max-w-[170px]">
                      <p className="text-base font-bold text-[#000000CC] truncate">
                        {item.name_room}
                      </p>
                      <p className="text-base font-normal text-[#666666] truncate">
                        {item.lastMessage}
                      </p>
                    </div>

                    <p className="text-xs text-[#666666] font-semibold">
                      {getTimeAgo(item.lastMessageTime)}
                    </p>
                  </div>
                </div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ChatList;
