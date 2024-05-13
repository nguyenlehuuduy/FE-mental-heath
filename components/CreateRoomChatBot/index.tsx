"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import ModalCreateRoomChatBot from "../ModalCreateRoomChatBot";

type PropsComponent = {};

export default function CreateRoomChatBot(props: PropsComponent) {
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
        className="relative w-[70%] h-[400px] overflow-hidden flex items-center justify-center"
        onClick={() => setIsShowModalCreate(!isShowModalCreate)}
      >
        <div className="absolute top-4 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo_mental_health.png"
              alt="logo mental health"
              width={110}
              height={20}
              className="object-contain "
            />
            <span className="font-medium text-[20px] text-[#3D3D3D]">
              trợ lí ảo
            </span>
          </div>
          <span>Người bạn đồng hành của cậu mỗi ngày </span>
        </div>

        <Image
          src={"/banner-create-room-chat.png"}
          alt="banner-create-room-chat"
          width={300}
          height={300}
          className="absolute w-[70%]"
        />
        <div className="absolute bottom-0 bg-blue-600 p-3 rounded-md text-white cursor-pointer">
          + Tạo một cuộc trò chuyện
        </div>
      </div>
    </Fragment>
  );
}
