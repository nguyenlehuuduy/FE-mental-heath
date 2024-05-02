"use client";

import { RoomMessageForCard } from "@/service/roomMessageService";
import Image from "next/image";
import Link from "next/link";

type PropsComponent = {
  listRoomChat: Array<RoomMessageForCard>;
};

export default function ChatRoomArea(props: PropsComponent) {
  return (
    <div className="p-3 w-[50%]">
      <div className="font-bold">Trò chuyện</div>

      <div className="flex flex-col gap-4 mt-5">
        {props.listRoomChat.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-2 cursor-pointer"
          >
            <Image
              src={item.image_room}
              width={50}
              height={50}
              alt="image user"
              className="rounded-[50%]"
            />
            <p className="font-medium">{item.name_room}</p>
          </div>
        ))}
        <Link href={"/message"} className="font-bold underline text-[#3B82F6]">
          Xem tất cả
        </Link>
      </div>
    </div>
  );
}
