"use client";
import React from "react";
import { Button, Popover } from "antd";
import Image from "next/image";
import { MyselfForCard } from "@/service/accountService";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { RootState } from "../../redux/configureStore";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className="w-[250px] min-h-[400px]">
      <div className="relative">
        {user?.avata ? (
          <Image
            src={user?.banner}
            width={200}
            height={200}
            alt="image banner account"
            className="w-full object-cover h-[100px] rounded-md"
          />
        ) : (
          <Image
            src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
            width={200}
            height={200}
            alt="image banner account"
            className="w-full object-cover h-[100px] rounded-md"
          />
        )}
        <div className="absolute m-auto right-0 left-0 top-[50px] flex flex-col justify-center items-center text-center">
          {user?.avata ? (
            <Image
              src={user?.avata}
              width={100}
              height={100}
              alt="image avata account"
              className="w-[80px] object-cover h-[80px] rounded-full "
            />
          ) : (
            <Image
              src="https://cdn.dummyjson.com/cache/100x100/bitter-16/cccccc-black/2535838d9d0ccf91d287ae796ce1a914.webp"
              width={100}
              height={100}
              alt="icon avatar"
              className="w-[80px] object-cover h-[80px] rounded-full "
            />
          )}
          <p className="font-medium text-[15px]">{user?.full_name}</p>
          <label>{user?.nick_name}</label>
          <div>{user?.about_me}</div>
          <div className="flex flex-col justify-start items-start w-full">
            <label className="font-medium my-3">Thông tin</label>
            <p>Email: {user?.email}</p>
            <p>Ngày sinh: {formatDate(user?.birth, "DD/MM/YYYY")}</p>
            <p>Số điện thoại: {user?.phone}</p>
          </div>
          <div className="w-full flex mt-5 justify-between">
            <Button>
              <Link href={"/myself"}>Xem chi tiết</Link>
            </Button>
            <Button danger>Đăng xuất</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfilePopup = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <Popover content={<ProfileCard />} trigger="click">
    {children}
  </Popover>
);

export default ProfilePopup;
