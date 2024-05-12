import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

export default function LandingPage2() {
  return (
    <div className="flex flex-col py-10">
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-3xl">
          {" "}
          Khám phá <span className="text-[#0F52BA]">
            GenZ Mental Health
          </span>{" "}
          ngay thôi nào ?{" "}
        </p>
      </div>
      <div className="items-center justify-center px-40 py-10 ">
        <Carousel autoplay dots slidesToShow={3}>
          <div className="p-1">
            <div className="w-[350px] h-[500px] bg-[#D7EFFF]  rounded-xl">
            <div className="flex items-center justify-center px-10 py-5">
                <Image
                  className="object-contain"
                  width={200}
                  height={200}
                  alt="logo"
                  src={"/slide1.svg"}
                />
              </div>
              <p className="text-[#1E369E] font-semibold text-center text-xl">Cung cấp hỗ trợ và giúp đỡ</p>
              <p className="text-center text-[#1E369E] py-5 px-2">Chúng tôi sẵn lòng lắng nghe và chia sẻ các phương pháp giải quyết, cung cấp thông tin hữu ích và định hướng cho các bạn trẻ trong quá trình hàn gắn và phục hồi tinh thần.</p>
            </div>
          </div>
          <div className="p-1 center-content">
            <div className="flex flex-col w-[350px] h-[500px] bg-[#0F52BA]  rounded-xl ">
            <div className="flex items-center justify-center px-10 py-5">
                <Image
                  className="object-contain"
                  width={200}
                  height={200}
                  alt="logo"
                  src={"/slide2.svg"}
                />
              </div>
              <p className="text-[#FFFFFF] font-semibold text-center text-xl">Cộng đồng kết nối - sẻ chia</p>
              <p className="text-center text-[#FFFFFF] py-5 px-2">Chúng tôi tin rằng việc chia sẻ và kết nối với nhau là yếu tố quan trọng trong việc xây dựng một cộng đồng mạnh mẽ và hỗ trợ lẫn nhau trong hành trình vượt qua những khó khăn tâm lý.</p>
            </div>
          </div>
          <div className="p-1">
            <div className="w-[350px] h-[500px] bg-[#D7EFFF]  rounded-xl">
            <div className="flex items-center justify-center px-10 py-5 ">
                <Image
                  className="object-contain"
                  width={200}
                  height={200}
                  alt="logo"
                  src={"/slide3.svg"}
                />
              </div>
              <p className="text-[#1E369E] font-semibold text-center text-xl">Ngôi nhà của bạn</p>
              <p className="text-center text-[#1E369E] py-5 px-2">
              Nơi đây không chỉ là một website, mà là một mái nhà chứa đựng tình yêu thương và sự chia sẻ, nơi mà bạn luôn được chào đón và quan trọng nhất là luôn được lắng nghe.
              </p>
            </div>
          </div>
          <div className="p-1">
            <div className="w-[350px] h-[500px] bg-[#0F52BA] rounded-xl">
            <div className="flex items-center justify-center px-10 py-5">
                <Image
                  className="object-contain"
                  width={200}
                  height={200}
                  alt="logo"
                  src={"/slide1.svg"}
                />
              </div>
              <p className="text-[#FFFFFF] font-semibold text-center text-xl">Hehe</p>
              <p className="text-center text-[#FFFFFF] py-5 px-2">Chúng tôi sẵn lòng lắng nghe và chia sẻ các phương pháp giải quyết, cung cấp thông tin hữu ích và định hướng cho các bạn trẻ trong quá trình hàn gắn và phục hồi tinh thần.</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
