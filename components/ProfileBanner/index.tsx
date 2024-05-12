"use client";

import { Button } from "antd";
import Image from "next/image";
import { IconAddFriend, MessageBlueIcon } from "../../icons";
import { InfoAccountResponse } from "@/service/accountService";
import { MouseEventHandler, useState } from "react";
import { follow, unfollow } from "../RequestFollowers/action";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { revalidateTag } from "next/cache";

const ProfileBanner = ({
  infoAccount,
  handleUnfollow,
}: {
  infoAccount: InfoAccountResponse;
  handleUnfollow: (idFollow: string) => Promise<void>;
}) => {
  const [sendFollow, setSendFollow] = useState<boolean>(false);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  let buttonText = "";
  let handleClick: MouseEventHandler<HTMLElement> | undefined = undefined;

  const handleFollow = async (receiverId: string) => {
    const userId = currentUser?.id ?? "";
    if (userId) {
      const result = await follow(userId, receiverId);
      console.log("result", result);

      if (result) {
        setSendFollow(true);
      }
    } else {
      console.error("Current user ID is undefined");
    }
  };

  if (sendFollow) {
    buttonText = "Đã gửi follow";
  } else {
    switch (infoAccount.is_follow.status) {
      case 0:
        buttonText = "Theo dõi";
        handleClick = () =>
          handleFollow(infoAccount.profileOtherAccount.user.id);
        break;
      case 1:
        buttonText = "Theo dõi lại";
        handleClick = () =>
          handleFollow(infoAccount.profileOtherAccount.user.id);
        break;
      case 2:
        buttonText = "Đã theo dõi";
        handleClick = () =>
          handleUnfollow(infoAccount.is_follow.followShipIdOfFollowing);
        break;
      case 3:
        buttonText = "Bạn bè";
        handleClick = () =>
          handleUnfollow(infoAccount.is_follow.followShipIdOfFollowing);
        break;
      default:
        buttonText = "Theo dõi";
        handleClick = () =>
          handleFollow(infoAccount.profileOtherAccount.user.id);
    }
  }

  const icon =
    infoAccount.is_follow.status !== 3 ? (
      <IconAddFriend width={18} height={18} />
    ) : null;
  return (
    <div className="w-full bg-white rounded-md">
      <div className="relative w-full h-[200px] rounded-md overflow-hidden">
        <Image
          src="https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg"
          fill
          objectFit="cover"
          quality={100}
          alt="banner account"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row py-2 px-4 gap-4">
          <div className="relative w-[180px] h-[180px] rounded-full">
            <Image
              src="https://i.pinimg.com/564x/93/ed/71/93ed71f506e89bc5adc32020056afe97.jpg"
              fill
              objectFit="cover"
              quality={100}
              alt="avatar account"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 max-w-[500px] w-full">
            <p className="font-bold text-2xl">
              {infoAccount.profileOtherAccount.user.fullName}
            </p>
            <p className="text-sm text-[#393A3C]">
              {infoAccount.profileOtherAccount.user.aboutMe}
            </p>
            <div className="flex flex-row gap-4">
              <Button
                className={`${infoAccount.is_follow.status === 3 ? "bg-[#0F52BA] text-white border-white" : "bg-white text-[#0F52BA] border-[#0F52BA]"} flex justify-center items-center text-base font-bold  py-2 `}
                icon={icon}
                onClick={handleClick}
              >
                {buttonText}
              </Button>
              <Button
                className="flex justify-center items-center text-base font-bold bg-white text-[#0F52BA] py-2 border-[#0F52BA]"
                icon={<MessageBlueIcon width={18} height={18} />}
              >
                Trò chuyện
              </Button>
            </div>
          </div>
          <div className="flex flex-row max-w-[356px] w-full gap-4  items-center justify-center">
            <div className="flex flex-col border bg-white p-2 min-w-[140px] h-fit rounded-lg shadow-lg">
              <span className="font-bold text-[#0F52BA]">
                {infoAccount.profileOtherAccount.followerCount}
              </span>
              <p className="text-xs">Người theo dõi</p>
            </div>
            <div className="flex flex-col border bg-white p-2 min-w-[140px] h-fit rounded-lg shadow-lg">
              <span className="font-bold text-[#0F52BA]">
                {infoAccount.profileOtherAccount.followingsCount}
              </span>
              <p className="text-xs">Đang theo dõi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
