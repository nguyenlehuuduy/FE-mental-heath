import React from "react";
import Image from "next/image";
import { Input, Button } from "antd";

const PostFeature = () => {
  return (
    <div className="max-w-[720px] w-full mx-auto mt-10 md:mt-0">
      <div className="flex flex-col justify-center mx-auto py-5 px-5">
        <div className="flex flex-row items-start">
          <div className=" md:w-[50px]">
            <Image
              src={"/nav_feature.png"}
              width={50}
              height={50}
              alt="logo"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-[572px] px-2 ">
            <Input
              className="h-[50px] text-lg text-[#00000066] border-none" 
              size="large"
              placeholder="Bạn đang nghĩ gì vậy?"
            />

            <div className="flex flex-row flex-grow items-center justify-between py-2 space-x-3">
              <div className="flex gap-3">
                <Image
                  src="/image-gallery.png"
                  width={28}
                  height={28}
                  alt="icon image gallery"
                  className="rounded-none"
                />
                <Image
                  src="/video.png"
                  width={28}
                  height={28}
                  alt="icon video"
                  className="rounded-none"
                />
                <Image
                  src="/attachment.png"
                  width={28}
                  height={28}
                  alt="icon attach"
                  className="rounded-none"
                />
              </div>
              <Button
                size="middle"
                htmlType="submit"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="bg-[#0A68EB] text-white cursor-pointer font-medium text-base"
              >
                Đăng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeature;
