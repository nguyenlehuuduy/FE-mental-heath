"use client";
import { SuggestFollowForCard } from "@/service/followService";
import { Recommend } from "@/util/TextContants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type PropsComponent = {
  suggestFollow: Array<SuggestFollowForCard>;
};
const RecommendFeature = (props: PropsComponent) => {
  const router = useRouter();

  const handleNavigateProfile = (idAccount: string) => {
    router.push(`/profile/${idAccount}`);
  };
  return (
    <div className="w-full bg-white p-3 rounded-md ">
      <div className="w-full">
        <span className="text-[#0F52BA] font-bold">{Recommend}</span>
        <div className="flex flex-col gap-4 pt-4 max-h-[300px] overflow-y-auto">
          {props.suggestFollow &&
            props.suggestFollow.map((item) => (
              <div
                onClick={() => handleNavigateProfile(item.id)}
                key={item.id}
                className="flex cursor-pointer items-center gap-2"
              >
                <Image
                  src={item.avata}
                  width={60}
                  height={60}
                  alt="logo"
                  className="rounded-[50%]"
                />
                <div className="flex flex-col">
                  <p className="font-medium">{item.full_name}</p>
                  <p className="text-sm">{item.nick_name}</p>
                </div>
              </div>
            ))}
        </div>
        <p className="py-5 font-medium text-center cursor-pointer">Xem thêm</p>
      </div>
    </div>
  );
};

export default RecommendFeature;
