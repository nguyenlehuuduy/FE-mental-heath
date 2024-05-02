"use client";
import { Avatar, Divider, List, Popconfirm, Skeleton } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { HeartIcon } from "../../icons";

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

const NotifyPopup = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
    <Popconfirm
      placement="bottom"
      title={<p className="text-lg font-bold">Thông báo</p>}
      style={{
        width: "100%",
        padding: 0,
      }}
      showCancel={false}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      icon={<div></div>}
      description={
        <div
          id="scrollableDiv"
          style={{
            width: 290,
            height: 400,
            overflow: "auto",
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>Không còn thông báo nào</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.email}>
                  <div className="flex flex-row w-full h-full justify-between py-3 gap-3">
                    <div className="relative w-[44px] h-[44px] rounded-full flex justify-center items-center shrink-0">
                      <Image
                        src="/big_logo.png"
                        fill
                        alt="icon avatar"
                        objectFit="contain"
                      />
                    </div>
                    <div className="flex flex-col justify-start gap-1 ">
                      <p className="text-sm font-semibold">
                        {item.name.title + item.name.first + item.name.last}
                      </p>
                      <p className="text-sm text-[#000000E6] font-normal">
                        Thịnh và 10 people khác đã bình luận vào bài viết của
                        bạn
                      </p>
                      <p className="text-sm text-[#000000B3] font-normal">
                        10:20 PM
                      </p>
                    </div>

                    <div className="flex flex-col h-full justify-between items-center gap-5 ">
                      <div className="w-[10px] h-[10px] rounded-full bg-[#0F52BA]"></div>
                      <HeartIcon width={18} height={18} />
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      }
    >
      {children}
    </Popconfirm>
  );
};

export default NotifyPopup;
