"use client";

import React, { useState } from "react";
import AvatarAccount from "../Avata";
import { SuggestFollowSuggestForResponse } from "@/service/followService";
import { useRouter } from "next/navigation";
import { unfollow } from "../RequestFollowers/action";

type PropsComponent = {
  item: SuggestFollowSuggestForResponse;
  handleUnfollow: (id: string) => void;
};

const FollowingItem = ({ item, handleUnfollow }: PropsComponent) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/profile/${item.id}`)}
      className="flex flex-row p-3 gap-5 bg-[#F5F6F8] rounded-md max-w-[655px] w-full cursor-pointer"
    >
      <div className="w-[70px] h-[70px]">
        <AvatarAccount
          name={item.fullName}
          filePath={item.avata}
          width={70}
          height={70}
        />
      </div>

      <div className="flex flex-col justify-center items-start max-w-[400px] w-full shrink-0">
        <p className="text-base font-bold text-[#000000CC]">{item.fullName}</p>
        <p className="text-sm text-black truncate">{item.aboutMe}</p>
      </div>

      <div className="flex items-center">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            handleUnfollow(item.idFollowShip);
          }}
          className="bg-white px-4 py-2 rounded-md border border-[#0F52BA] text-[#0F52BA] font-bold text-xs hover:border-[#FF000F] hover:text-[#FF000F]"
        >
          {isHovered ? "Hủy theo dõi" : "Đang theo dõi"}
        </button>
      </div>
    </div>
  );
};

export default FollowingItem;
