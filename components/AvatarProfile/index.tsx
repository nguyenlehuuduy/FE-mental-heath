"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "antd";
import ModalPost from "../ModalPost";
import VideoProfile from "../VideoProfile";
const AvatarProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = {
    name: "Nguyễn Lê Hữu Duy",
    bio: "Bạn nghĩ gì về chữa lành? Với tôi chữa lành chính là làm điều tôi cảm thấy là chính mình nhất",
    favorite: "Trò chuyện",
  };
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoIconClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-md flex flex-row py-5 px-5">
        <div className="w-1/4 flex justify-center items-center ">
          <div className="relative">
            <Image
              src={"/avatar.svg"}
              width={200}
              height={200}
              alt="avatar"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-3/4 flex flex-col px-5 pt-10 justify-center">
          <h2 className="text-2xl font-bold">{userData.name}</h2>
          <p className="text-gray-500 py-2">{userData.bio}</p>
          <div className="flex flex-row justify-start">
            <p className="text-gray-500 py-2 pr-5">{userData.favorite}</p>
            <p className="text-gray-500 py-2 px-5">{userData.favorite}</p>
            <p className="text-gray-500 py-2 px-5">{userData.favorite}</p>
            <p className="text-gray-500 py-2 px-5">{userData.favorite}</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md justify-center items-center py-5">
        <div className="flex justify-between">
          <div className="flex items-center "
            onClick={() => setIsOpen(true)}>
            <Image
              src={"/post_icon.svg"}
              width={25}
              height={25}
              objectFit="cover"
              alt="post icon"
              className="rounded"
            />
            <p className="px-4"> Bài viết </p>
            
          </div>
          <ModalPost isOpen={isOpen} closeModal={() => setIsOpen(false)} />
          <div className="flex items-center" onClick={handleVideoIconClick}>
            <Image
              src={"/video_icon.svg"}
              width={25}
              height={25}
              objectFit="cover"
              alt="video icon"
              className="rounded"
            />
            <p className="px-4"> Video</p>
            {showVideo && <VideoProfile/>}
          </div>
          <div className="flex items-center">
            <Image
              src={"/picture_icon.svg"}
              width={25}
              height={25}
              objectFit="cover"
              alt="post icon"
              className="rounded"
            />
            <p className="px-4"> Hình ảnh</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-5 pt-5 mx-auto">
          <Button
            htmlType="submit"
            className="bg-[#ffffff] text-black text-sm  md:w-[150px] h-[40px]  md:h-[40px] mr-2"
          >
            Tin nhắn
          </Button>
          <Button
            htmlType="submit"
            className="bg-[#ffffff] text-black text-sm h-[40px] md:h-[40px] md:w-[150px] ml-2"
          >
            Chỉnh sửa cá nhân
          </Button>
        </div>
        <div className="flex items-center justify-between px-5">
          <div className="flex flex-col shadow-xl  mr-2 p-4 rounded-lg">
            <p className="md:text-lg text-[#0A68EB] font-bold">351</p>
            <p>Nguoi theo doi</p>
            <div className="flex flex-row pt-1">
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col shadow-xl  p-4 rounded-lg ">
            <p className="md:text-lg text-[#0A68EB] font-bold">351</p>
            <p>Nguoi theo doi</p>
            <div className="flex flex-row pt-1">
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
                style={{ marginRight: "5px" }}
              />
              <Image
                src={"/avatar.svg"}
                width={20}
                height={20}
                alt="avatar"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarProfile;
