"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import FormLogin from "../FormLogin";
import FormRegister from "../FormRegister";
import { useRouter } from "next/navigation";

export default function HeaderLanding() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const router = useRouter();

  const openLogin = () => {
    setIsOpenLogin(true);
    setIsOpenRegister(false);
  };

  const openRegister = () => {
    setIsOpenRegister(true);
    setIsOpenLogin(false);
  };
  const handleAboutUsClick = () => {
    router.push('/aboutus');
  };
  const handleLandingPageClick = () => {
    router.push('/landingpage');
  };

  return (
    <div className="w-full flex flex-row items-center justify-between">
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
          onClick={handleLandingPageClick}
          className="md:text-lg font-semibold text-center hover:text-blue-500 cursor-pointer"
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
          onClick={handleAboutUsClick}
          className="md:text-lg font-semibold text-center hover:text-blue-500 cursor-pointer"
        >
          Về chúng tôi
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          htmlType="submit"
          className="text-white text-base font-semibold md:w-[150px] md:h-[40px] bg-[#0A68EB] border border-solid border-[#0A68EB] rounded-full"
          onClick={openRegister}
        >
          Đăng ký
        </Button>
        <Button
          htmlType="submit"
          className="text-white text-base font-semibold md:w-[150px] md:h-[40px] bg-[#0A68EB] border border-solid border-[#0A68EB] rounded-full"
          onClick={openLogin}
        >
          Đăng nhập
        </Button>
      </div>
      <FormLogin
        isOpenLogin={isOpenLogin}
        closeModalLogin={() => setIsOpenLogin(false)}
        openRegister={openRegister}
      />
      <FormRegister
        isOpenRegister={isOpenRegister}
        closeModalRegister={() => setIsOpenRegister(false)}
        openLogin={openLogin}
      />
    </div>
  );
}
