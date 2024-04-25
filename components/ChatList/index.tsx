"use client";

import { Divider, Input, List, Skeleton } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { HeartIcon, SearchIcon } from "../../icons";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const ChatList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo",
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div className="flex flex-col max-w-[320px] w-full h-screen bg-white rounded-md gap-5">
      <div className="flex flex-col pt-[30px] px-5 gap-7">
        <p className="text-2xl font-bold text-[#666666]">Tin nhắn</p>
        <Input
          placeholder="Tìm kiếm"
          allowClear
          style={{
            border: "none",
            background: "#FAFBFD",
            borderRadius: 6,
            paddingBottom: 8,
            paddingTop: 8,
            paddingRight: 24,
            paddingLeft: 24,
            fontSize: 18,
            color: "#666666",
            fontWeight: 500,
          }}
          suffix={<SearchIcon />}
          variant="borderless"
        />
      </div>
      <div className="overflow-auto h-screen">
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>Hết tin nhắn</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item.email}
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  cursor: "pointer",
                }}
              >
                <div className="flex flex-row w-full h-full justify-between py-3 gap-2">
                  <div className="relative w-[44px] h-[44px] rounded-full flex justify-center items-center shrink-0">
                    <Image
                      src="/big_logo.png"
                      fill
                      alt="icon avatar"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1 max-w-[170px]">
                    <p className="text-base font-bold text-[#000000CC] truncate">
                      {item.name.title + item.name.first + item.name.last}
                    </p>
                    <p className="text-base font-normal text-[#666666] truncate">
                      Thịnh và 10 people khác đã bình luận vào bài viết của bạn
                    </p>
                  </div>

                  <p className="text-xs text-[#666666] font-semibold">
                    22h35 PM
                  </p>
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
