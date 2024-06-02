"use client";

import { Popconfirm, notification } from "antd";
import Image from "next/image";
import React, { memo, useEffect, useMemo, useState } from "react";
import { HeartIcon } from "../../icons";
import { NotificationForCard, NotificationForResponse } from "@/service/notificationService";
import useSocket from "../../hook/socket";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { EVENTS } from "@/lib/constants";
import { NotificationPlacement } from "antd/es/notification/interface";

type PropsComponent = {
  children: React.ReactNode;
  listNotifi: Array<NotificationForCard>;
  sessionKey: string;
};

export default memo(function NotifyPopup(props: PropsComponent) {
  const user = useSelector((state: RootState) => state.auth.user);
  const { mySocket } = useSocket({
    idUser: user?.id ?? "",
    sessionKey: props.sessionKey ?? "",
  });

  useEffect(() => {
    mySocket.on(EVENTS.CLIENT.JOIN_NOTIFICATION_IDENTIFY, (data: NotificationForResponse) => {
      const notifi: NotificationForCard = {
        id: data.id,
        comment_id: data.commentId,
        created_at: data.created_at,
        follower_id: data.created_at,
        message_notifications: data.messageNotifications,
        post_id: data.postId,
        post_share_id: data.postShareId,
        type_Notification: {
          description: data?.typeNotification.description ?? "",
          id: data?.typeNotification.id ?? "",
          thumbnail_Noti: data?.typeNotification.thumbnailNoti ?? "",
          type_Name: data?.typeNotification.typeName ?? ""
        },
        type_notification_id: data?.typeNotificationId,
        updated_at: data.updated_at
      }
      openNotification("topLeft", notifi)
    })
  }, [])

  const Context = React.createContext({ name: 'Thông báo' });
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement, data: NotificationForCard) => {
    api.info({
      message: `Thông báo ${data.type_Notification.description
        }`,
      description: <Context.Consumer>{() => `Xin chào, ${data.message_notifications}!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
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
    </Context.Provider>

  );
}, (prevProps, nextProps) => prevProps === nextProps) 