"use client";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  FilterIcon,
  MessageIcon,
  NotifyIcon,
  SearchIcon,
  SettingIcon,
} from "../../icons";
import NotifyPopup from "../NotifyPopup";
import { MyselfForCard } from "@/service/accountService";
import ProfilePopup from "../ProfilePopup";
import ModalSetting from "../ModalSetting";
import React, { useState } from "react";

type PropsComponent = {
  profile: MyselfForCard;
};
export default function Header(props: PropsComponent) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b w-full z-10 bg-white px-4">
      <div className="max-w-[1440px] h-[55px] mx-auto flex justify-evenly items-center py-3">
        <div className="max-w-[300px] w-full flex ">
          <Link
            href="/home"
            className="flex justify-start items-start max-md:w-[108px] max-md:h-[28px] grow"
          >
            <Image
              src="/logo_mental_health.png"
              alt="logo mental health"
              width={110}
              height={20}
              className="object-contain"
            />
          </Link>
        </div>
        <Input
          className="max-w-[500px] h-[40px] text-[#00000066]"
          size="middle"
          placeholder="Khám phá về GenZ Mental Health"
          prefix={<SearchIcon />}
          suffix={<FilterIcon />}
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        />
        <div className="flex flex-row gap-3 max-w-[300px] w-full h-full justify-end items-center">
          <div className="p-2 rounded-full border flex justify-center items-center">
            <MessageIcon width={20} height={20} />
          </div>
          <NotifyPopup>
            <div className="p-2 rounded-full border flex justify-center items-center cursor-pointer">
              <NotifyIcon width={20} height={20} />
            </div>
          </NotifyPopup>
          <div
            className="p-2 rounded-full border flex justify-center items-center"
            onClick={() => setIsOpen(true)}
          >
            <SettingIcon width={20} height={20} />
          </div>
          <ProfilePopup props={props}>
            <div className="relative w-[38px] h-[38px] cursor-pointer">
              {props.profile.avata ? (
                <Image
                  src={props.profile.avata}
                  fill
                  sizes="(max-width: 38px) 100vw"
                  alt="icon avatar"
                  objectFit="cover"
                  className="rounded-full"
                />
              ) : (
                <Image
                  src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
                  fill
                  sizes="(max-width: 38px) 100vw"
                  alt="icon avatar"
                  objectFit="cover"
                  className="rounded-full"
                />
              )}
            </div>
          </ProfilePopup>
        </div>
        <ModalSetting isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
