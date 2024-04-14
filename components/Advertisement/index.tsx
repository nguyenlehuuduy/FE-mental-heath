import Image from "next/image";
import React from "react";

const Advertisement = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center gap-3 bg-white rounded-sm">
      <div className="relative max-w-[130px] max-h-[130px]">
        <Image
          src="/big_logo.png"
          width={500}
          height={500}
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <p className="text-base font-bold text-[#505050] text-center">
        Xin chào Hữu Duy,
        <br />
        chúc bạn một ngày tràn đầy năng lượng và hạnh phúc.
      </p>
      <p className="max-w-[540px] text-center text-base font-bold text-white bg-[#0F52BA] rounded-md p-1">
        Hãy luôn giữ tâm hồn lạc quan và tìm thấy niềm vui trong từng khoảnh
        khắc cùng GenZ Mental Health.
      </p>
    </div>
  );
};

export default Advertisement;
