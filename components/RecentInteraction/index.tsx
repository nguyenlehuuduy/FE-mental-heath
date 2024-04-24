import Image from "next/image";
import React from "react";
const userData = {
  name: "Nguyễn Lê Hữu Duy",
  time: "24/04/2024",
  favorite: "Trò chuyện",
};
const RecentInteractions = () => {
  return (
    <div className="w-full px-5 ml-5 border-l-2 border-gray-500 pr-4">
      <div className="flex flex-col gap-3 ">
        <p className="font-medium ">Tuong tác gần đây</p>
        <div className="w-full py-2">
          <p className="text-gray-500 ">
            Add images and video to your design files to incor porate photography...
          </p>
          <div className="flex flex-row items-center">
            <div className="relative py-1 ">
              <Image
                src={"/avatar.svg"}
                width={30}
                height={30}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div className="flex items-center justify-between px-2 w-full">
              <p className="text-sm font-normal items-center ">
                {userData.name}
              </p>
              <p className="text-sm text-gray-500 ">{userData.time}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <div className="w-4/5 items-center">
            <p className="">Chào các bạn nhé! Mình là Hữu Duy đây. Đây chỉnh là profile của mình các bạn đi tham quan nhà của mình nhé!!!!</p>
            </div>
            <div className="w-1/5 items-center px-7">
            <p className="text-sm text-[#C9993C]" >Ẩn</p>
            </div>
          </div> 
          <p className="text-sm text-[#0A68EB] pt-2"> Xem bài viết</p>
        </div>
        <div className="w-full py-1">
          <p className="text-gray-500 ">
            Add images and video to your design files to incor porate photography...
          </p>
          <div className="flex flex-row items-center">
            <div className="relative py-2 ">
              <Image
                src={"/avatar.svg"}
                width={30}
                height={30}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div className="flex items-center justify-between px-2 w-full">
              <p className="text-sm font-normal items-center ">
                {userData.name}
              </p>
              <p className="text-sm text-gray-500 ">{userData.time}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <div className="w-4/5 items-center">
            <p className="">Chào các bạn nhé! Mình là Hữu Duy đây. Đây chỉnh là profile của mình các bạn đi tham quan nhà của mình nhé!!!!</p>
            </div>
            <div className="w-1/5 items-center px-7">
            <p className="text-sm text-[#C9993C]" >Ẩn</p>
            </div>
          </div> 
          <p className="text-sm text-[#0A68EB] pt-2"> Xem bài viết</p>
        </div>
        <div className="w-full">
          <p className="text-gray-500 ">
            Add images and video to your design files to incor porate photography...
          </p>
          <div className="flex flex-row items-center">
            <div className="relative py-2 ">
              <Image
                src={"/avatar.svg"}
                width={30}
                height={30}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div className="flex items-center justify-between px-2 w-full">
              <p className="text-sm font-normal items-center ">
                {userData.name}
              </p>
              <p className="text-sm text-gray-500 ">{userData.time}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <div className="w-4/5 items-center">
            <p className="">Chào các bạn nhé! Mình là Hữu Duy đây. Đây chỉnh là profile của mình các bạn đi tham quan nhà của mình nhé!!!!</p>
            </div>
            <div className="w-1/5 items-center px-7">
            <p className="text-sm text-[#C9993C]" >Ẩn</p>
            </div>
          </div> 
          <p className="text-sm text-[#0A68EB] pt-2"> Xem bài viết</p>
        </div>
      </div>
    </div>
  );
};

export default RecentInteractions;
