"use client"
import React from "react";
import { Image } from "antd";
const ListPhotoProfile = () => {
  return (
    <div className="w-full px-5 ml-5 border-l-2 border-gray-500 pr-4">
      <div className="flex flex-col gap-3 ">
        <p className="font-medium ">Hình ảnh</p>
        <div className="flex">
          <div className=" grid grid-cols-3 gap-3 relative px-2 items-center">
            <Image
              src={"/nav_feature.png"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/nav_feature.png"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/nav_feature.png"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/nav_feature.png"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/agora.jpg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/big_logo.png"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/genz_mental_health.svg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/genz_mental_health.svg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/genz_mental_health.svg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/genz_mental_health.svg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/genz_mental_health.svg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/genz_mental_health.svg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
            <Image
              src={"/genz_mental_health.svg"}
              width={100}
              height={100}
              alt="avatar"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListPhotoProfile;
