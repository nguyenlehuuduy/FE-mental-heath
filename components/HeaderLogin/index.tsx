"use client"
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { useRouter } from "next/navigation";
const HeaderLogin = () => {
  const routes = useRouter();
  return (
    <div className="w-full flex flex-row items-center justify-between ">
      <div className="flex relative aspect-video">
        <Image
          className="object-contain"
          width={130}
          height={50}
          alt="logo"
          src={"/logo.svg"}
        />
      </div>
      <div className="flex space-x-20">
        <a
          href="#"
          className="md:text-lg font-semibold text-center hover:text-blue-500"
        >
          Trang chủ
        </a>
        <a
          href="#"
          className="md:text-lg font-semibold text-center hover:text-blue-500"
        >
          Dịch vụ
        </a>
        <a
          href="#"
          className="md:text-lg font-semibold text-center hover:text-blue-500"
        >
          Kết nối
        </a>
        <a
          href="#"
          className="md:text-lg font-semibold text-center hover:text-blue-500"
        >
          Về chúng tôi
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          htmlType="submit"
          className="text-white text-base md:w-[150px] md:h-[40px] bg-[#0A68EB]  border border-solid border-[#0A68EB] rounded-full"
          onClick={() => {
            routes.push("/register");
          }}
        >
          Đăng ký
        </Button>

        <Button
          htmlType="submit"
          className="text-white text-base md:w-[150px] md:h-[40px] bg-[#0A68EB]  border border-solid border-[#0A68EB] rounded-full"
          onClick={() => {
            routes.push("/login");
          }}
       >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default HeaderLogin;
