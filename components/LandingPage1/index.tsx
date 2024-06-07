"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";

const LandingPage1 = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex flex-row items-center justify-between py-10">
        
        <div className=" w-[50%] flex flex-row px-20 justify-center">
          <div className="flex flex-col items-center justify-center w-[634] space-y-4">
            <p className="text-3xl font-semibold">
              Tâm trí khỏe mạnh - cuộc sống hạnh phúc
            </p>
            <p className="text-6xl font-semibold text-[#0F52BA] ">
              GenZ Mental Health{" "}
            </p>
            <p className="text-3xl font-semibold">
              Kết nối - chia sẻ - thấu hiểu
            </p>
            <p className="text-xl font-sans text-center">
              Chào mừng bạn đến với GenZ Mental health, nơi kết nối, sẻ chia,
              thấu hiểu và đồng cảm cùng bạn! Cùng khám phá các tài nguyên, tìm
              sự hỗ trợ và kết nối với một cộng đồng dành riêng cho hạnh phúc.
            </p>
            <div className="">
              <Button
                htmlType="submit"
                className="text-white text-base font-semibold md:w-[200px] md:h-[50px] bg-[#0A68EB]  border border-solid border-[#0A68EB] rounded-full"
              >
                Khám phá ngay nào
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex  w-[50%]">
          <Image
            className="object-contain"
            width={675}
            height={550}
            alt="logo"
            src={"/landing1.svg"}
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage1;
