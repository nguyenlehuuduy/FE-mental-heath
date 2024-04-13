import Image from "next/image";
import React from "react";

const listFeature = [
  {
    id: 1,
    image: "/nav_feature.png",
    name: "Gửi phiền muộn",
  },
  {
    id: 2,
    image: "/nav_feature.png",
    name: "Sound Chill",
  },
  {
    id: 3,
    image: "/nav_feature.png",
    name: "Thiền",
  },
  {
    id: 4,
    image: "/nav_feature.png",
    name: "2 phút",
  },
];

const NavFeature = () => {
  return (
    <div className="w-full px-7 py-5">
      <div className="flex flex-col gap-6">
        {listFeature.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-row items-center gap-7 cursor-pointer"
          >
            <Image
              src={item.image}
              width={60}
              height={60}
              alt="logo"
              className="rounded-[10px]"
            />
            <p className="text-base font-bold text-[#000000B3]">{item.name}</p>
          </div>
        ))}
        <p className="text-base font-bold text-[#00000099] text-center">
          Xem thêm
        </p>
      </div>
    </div>
  );
};

export default NavFeature;
