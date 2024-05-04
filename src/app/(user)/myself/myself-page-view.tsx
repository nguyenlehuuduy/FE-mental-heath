"use client";

import { MyselfForCard } from "@/service/accountService";
import Image from "next/image";
import { PostContent } from "../../../../components";
import { PostForCard } from "@/service/postService";
import { Pagination } from "../../../../type";
import RecentActionList from "../../../../components/RecentActionList";
import { useState } from "react";
import ListImageAccount from "../../../../components/ListImageAccount";
import ListVideoAccount from "../../../../components/ListVideoAccount";

type PropsComponent = {
  profile: MyselfForCard;
  listValidPostOfAccount: { data: PostForCard[]; pagination: Pagination };
};

export default function MySelfPageView(props: PropsComponent) {
  const [selectOptionNumber, setSelectOptionNumber] = useState<number>(0);
  return (
    <div className="w-full p-2">
      <div className="w-full h-[200px] rounded-md overflow-hidden">
        <Image
          src={props.profile.banner}
          width={300}
          height={300}
          className="w-full h-full object-cover"
          alt="banner account"
        />
      </div>
      <div className="w-full flex mt-2 justify-between">
        <div className="w-[65%] flex flex-col gap-y-1">
          <div className="flex w-full gap-4 bg-white rounded-md py-4 px-1">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
              <Image
                src={props.profile.avata}
                alt="avata user"
                width={500}
                height={500}
                className="aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center w-[70%]">
              <p className="text-[18px] font-medium text-[#505050]">
                {props.profile.full_name +
                  " ( " +
                  props.profile.nick_name +
                  " ) "}
              </p>
              <p className="text-[#666666]">
                {props.profile.about_me}
                {props.profile.about_me}
              </p>
              {/* TODO: favorite subject of account */}
              <div className="flex gap-3 mt-3 text-[#666666]">
                <label>Nhạc cụ</label>
                <label>Đọc sách</label>
                <label>Hút thuốc lào</label>
                <label>Hát hò</label>
                <label>Nhậu nhoẹt</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 pb-20">
            <PostContent
              profile={props.profile!}
              listValidPostOfAccount={props.listValidPostOfAccount}
            />
          </div>
        </div>
        <div className="w-[33%]">
          <div className="w-full flex flex-col gap-1 overflow-y-auto  h-[calc(100vh-60px)] sticky top-0 bg-white p-2 rounded-md">
            <div className="flex w-full items-center gap-2 text-[14px] mb-2 justify-end">
              <div className="rounded-md border border-black px-3 py-1">
                Tin nhắn
              </div>
              <div className="rounded-md border border-black px-3 py-1">
                Chỉnh sửa
              </div>
              <div className="flex items-center justify-center cursor-pointer gap-2 text-white bg-blue-500 h-full px-2 rounded-md">
                <label className="text-[22px] cursor-pointer">+</label>
                <label className="text-sm cursor-pointer">Tạo bài viết</label>
              </div>
            </div>
            <div className="flex justify-between h-[40px] mb-4">
              <div
                className={`flex items-center gap-2 w-[30%] cursor-pointer ${selectOptionNumber === 0 && "border-blue-500 border-b-2"} p-2`}
                onClick={() => setSelectOptionNumber(0)}
              >
                <label className="text-sm  cursor-pointer">Gần đây</label>
              </div>
              <div
                className={`flex items-center gap-2 w-[30%] cursor-pointer ${selectOptionNumber === 2 && "border-blue-500 border-b-2"} `}
                onClick={() => setSelectOptionNumber(2)}
              >
                <Image
                  alt="icon create post"
                  width={24}
                  height={24}
                  src={"/video_icon.svg"}
                />
                <label className="text-sm  cursor-pointer">Video</label>
              </div>
              <div
                className={`flex items-center gap-2 w-[30%] cursor-pointer ${selectOptionNumber === 1 && "border-blue-500 border-b-2"}`}
                onClick={() => setSelectOptionNumber(1)}
              >
                <Image
                  alt="icon create post"
                  width={24}
                  height={24}
                  src={"/picture_icon.svg"}
                />
                <label className="text-sm cursor-pointer">Ảnh</label>
              </div>
            </div>
            {/* TODO_1619542024: DONT HAVE API FOR THIS TASK */}
            {(selectOptionNumber === 0 && <RecentActionList />) ||
              (selectOptionNumber === 1 && <ListImageAccount />) ||
              (selectOptionNumber === 2 && <ListVideoAccount />)}
          </div>
        </div>
      </div>
    </div>
  );
}
