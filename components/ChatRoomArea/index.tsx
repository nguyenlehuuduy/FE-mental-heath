"use client";

import { RoomMessageForCard } from "@/service/roomMessageService";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PropsComponent = {
  listRoomChat: Array<RoomMessageForCard>;
};

export default function ChatRoomArea(props: PropsComponent) {
  const router = useRouter();
  return (
    <div className="p-3 w-[50%]">
      <div className="font-bold">Trò chuyện</div>

      <div className="flex flex-col gap-4 mt-5">
        {props.listRoomChat.map((item, index) => (
          <div
            onClick={() => {
              router.push(`/message/${item.id}`);
            }}
            key={index}
            className="relative flex items-center justify-start gap-2 cursor-pointer"
          >
            <div className="relative flex w-[50px] h-[50px]">
              <Image
                src={item.image_room}
                fill
                alt="image user"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
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
