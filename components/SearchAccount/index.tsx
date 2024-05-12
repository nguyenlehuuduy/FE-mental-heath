import { SearchAccountType } from "@/service/searchService";
import Image from "next/image";
import React from "react";

const SearchAccount = ({
  listAccounts,
}: {
  listAccounts: SearchAccountType[];
}) => {
  return (
    <div className="w-full flex flex-col ">
      <p className="py-2 border-b text-base font-bold">Tài khoản</p>
      <div className="w-full max-h-[250px] min-h-[60px] overflow-y-auto">
        {listAccounts.length === 0 ? (
          <p className="flex justify-center py-4">
            Không tìm thấy tài khoản nào
          </p>
        ) : (
          listAccounts.map((account, index) => (
            <div
              key={index}
              className="flex flex-row w-full items-center gap-4 py-2 shadow-sm"
            >
              <div className="relative w-[40px] h-[40px] rounded-full">
                <Image
                  src="https://i.pinimg.com/564x/93/ed/71/93ed71f506e89bc5adc32020056afe97.jpg"
                  fill
                  alt={`avatar ${account.fullName}`}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <p className="text-base font-semibold ">{account.fullName}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchAccount;
