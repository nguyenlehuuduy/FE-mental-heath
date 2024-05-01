"use client";
import React from "react";
import { Button, Popover } from "antd";
import Image from "next/image";
import { MyselfForCard } from "@/service/accountService";
import { formatDate } from "@/lib/utils";

const ProfileCard = (props: PropsComponent) => {
  return (
    <div className="w-[250px] min-h-[400px]">
      <div className="relative">
        <Image
          src={props.profile.banner}
          width={200}
          height={200}
          alt="image banner account"
          className="w-full object-cover h-[100px] rounded-md"
        />
        <div className="absolute m-auto right-0 left-0 top-[50px] flex flex-col justify-center items-center text-center">
          <Image
            src={props.profile.avata}
            width={100}
            height={100}
            alt="image avata account"
            className="w-[80px] object-cover h-[80px] rounded-full "
          />
          <p className="font-medium text-[15px]">{props.profile.full_name}</p>
          <label>{props.profile.nick_name}</label>
          <div>{props.profile.about_me}</div>
          <div className="flex flex-col justify-start items-start w-full">
            <label className="font-medium my-3">Thông tin</label>
            <p>Email: {props.profile.email}</p>
            <p>Ngày sinh: {formatDate(props.profile.birth, "DD/MM/YYYY")}</p>
            <p>Số điện thoại: {props.profile.phone}</p>
          </div>
          <div className="w-full flex mt-5 justify-between">
            <Button>Xem chi tiết</Button>
            <Button danger>Đăng xuất</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

type PropsComponent = {
  profile: MyselfForCard;
};
const ProfilePopup = ({
  children,
  props,
}: Readonly<{
  children: React.ReactNode;
  props: PropsComponent;
}>) => (
  <Popover content={<ProfileCard profile={props.profile} />} trigger="click">
    {children}
  </Popover>
);

export default ProfilePopup;
