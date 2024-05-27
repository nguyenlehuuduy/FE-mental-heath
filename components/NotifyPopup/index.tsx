"use client";

import { Popconfirm } from "antd";
import Image from "next/image";
import React from "react";
import { HeartIcon } from "../../icons";
import { NotificationForCard } from "@/service/notificationService";

type PropsComponent = {
  children: React.ReactNode;
  listNotifi: Array<NotificationForCard>;
};

export default function NotifyPopup(props: PropsComponent) {
  return (
    <div >
      <Popconfirm
        placement="bottom"
        title={<p className="text-lg font-bold">Thông báo</p>}
        className="w-full"
        showCancel={false}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        icon={<div></div>}
        description={
          <div className="max-h-[500px] max-w-[320px] overflow-y-auto">
            {props.listNotifi.map((item, index) => (
              <div key={index} className="flex flex-row w-full h-full py-3 gap-3 ">
                <div className="relative w-[44px] h-[44px]  rounded-full flex shrink-0 justify-center items-center ">
                  <Image
                    src={item.type_Notification.thumbnail_Noti}
                    fill
                    alt="icon avatar"
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col w-[70%] justify-start text-start gap-1 ">
                  <p className="text-sm font-semibold">{item.type_Notification.type_Name}</p>
                  <p className="text-sm text-[#000000E6] font-normal">
                    {item.message_notifications}
                  </p>
                  <p className="text-sm text-[#000000B3] font-normal">{item.created_at}</p>
                </div>
                <div className="flex flex-col  h-full items-center gap-5 px-2 ">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#0F52BA]"></div>
                  <HeartIcon width={20} height={18} />
                </div>
              </div>
            ))}
          </div>
        }
      >
        {props.children}
      </Popconfirm>
    </div>
  );
}
