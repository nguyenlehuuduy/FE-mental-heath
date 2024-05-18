"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import ModalPost from "../ModalPost";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import AvatarAccount from "../Avata";

const PostFeature = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full p-4 rounded-sm bg-white">
      <div
        className="flex gap-2 items-start justify-between cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-[40px] h-[40px]">
          <AvatarAccount filePath={user?.avata} name={user?.full_name ?? "D"} />
        </div>

        <div className="flex flex-col justify-between w-[90%]">
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
