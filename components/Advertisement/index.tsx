import Image from "next/image";
import React from "react";

const Advertisement = () => {
  return (
    <div className="w-full h-[250px] p-4 flex justify-center items-center gap-3 bg-white rounded-md">
      <div className="w-[50%] h-full flex flex-col justify-center items-start">
        <p className="text-[23px] text-right">
          Chào mừng bạn trở lại với{" "}
          <span className="text-[#0f52ba]">GenZ Mental Heath</span>
        </p>
        <span>Câu nói dành cho chúng ta hôm nay là: </span>
        <i className="text-[#0f52ba] font-medium">
          "Đừng bao giờ khinh thường người khác."
        </i>
      </div>
      <div className="relative w-[50%] h-full">
        <Image
          src="/big_logo.png"
          width={500}
          height={500}
          alt="avatar"
          className="rounded-full w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Advertisement;
