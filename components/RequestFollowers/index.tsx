"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { useRouter } from "next/navigation";

type RequestFollowers = {
  id: string;
  sender: {
    id: string;
    fullName: string;
    phone: string;
    aboutMe: string;
    nickName: string;
    birth: string;
    address: string;
    avatar: string;
  };
  createdAt: Date;
};

const RequestFollowers = ({
  listRequestFollowers,
  handleAcceptRequestFollow,
  handleRefuseRequestFollow,
}: {
  listRequestFollowers: RequestFollowers[] | undefined;
  handleAcceptRequestFollow: (
    idRequest: string,
    idSender: string,
    idReceiver: string,
  ) => Promise<void>;
  handleRefuseRequestFollow: (idRequest: string) => Promise<void>;
}) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const router = useRouter();

  const handleNavigateProfile = (idAccount: string) => {
    router.push(`/profile/${idAccount}`);
  };
  return (
    <>
      {!!listRequestFollowers?.length && (
        <div className="w-full bg-white p-3 rounded-md">
          <div className="w-full">
            <span className="text-[#0F52BA] font-bold">Yêu cầu theo dõi</span>
            <div className="flex flex-col gap-4 pt-4 max-h-[200px] overflow-y-auto">
              {listRequestFollowers &&
                listRequestFollowers.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleNavigateProfile(item.sender.id)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="relative w-[60px] h-[60px]">
                      <Image
                        src={item.sender.avatar}
                        fill
                        objectFit="cover"
                        alt="logo"
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{item.sender.fullName}</p>
                      <div className="flex flex-row gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAcceptRequestFollow(
                              item.id,
                              item.sender.id,
                              user?.id ?? "",
                            );
                          }}
                          className="px-3 py-1 bg-[#316cc5] rounded-lg text-white text-base font-semibold"
                        >
                          Chấp nhận
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRefuseRequestFollow(item.id);
                          }}
                          className="px-3 py-1 bg-[#c53831] rounded-lg text-white text-base font-semibold"
                        >
                          Từ chối
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestFollowers;
