"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import ModalPost from "../ModalPost";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";

const PostFeature = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full p-4 rounded-sm bg-white">
      <div
        className="flex gap-2 items-start cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-[40px] h-[40px]">
          {user?.avata ? (
            <Image
              src={user?.avata}
              fill
              sizes="(max-width: 40px)"
              objectFit="cover"
              alt="logo"
              className="rounded-full"
            />
          ) : (
            <Image
              src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
              fill
              sizes="(max-width: 40px)"
              objectFit="cover"
              alt="logo"
              className="rounded-full"
            />
          )}
        </div>

        <div className="flex flex-col justify-between w-full">
          <TextArea rows={2} size="large" value={"Bạn đang nghĩ gì vậy?"} />

          <div className="flex flex-row flex-grow items-center justify-between py-2 space-x-3">
            <div className="flex gap-6">
              <Image
                src="/gallery_icon.svg"
                width={24}
                height={24}
                alt="icon image gallery"
                className="rounded-none"
              />
              <Image
                src="/video_icon.svg"
                width={24}
                height={24}
                alt="icon video"
                className="rounded-none"
              />
              <Image
                src="/attachment_icon.svg"
                width={24}
                height={24}
                alt="icon attach"
                className="rounded-none"
              />
            </div>
            <Button
              size="middle"
              htmlType="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-black cursor-pointer font-medium"
            >
              Đăng
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <ModalPost isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default PostFeature;
