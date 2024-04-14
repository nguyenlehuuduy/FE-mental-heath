import React from "react";
import Image from "next/image";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";

const PostFeature = () => {
  return (
    <div className="w-full p-4 rounded-sm mt-2 bg-white">
      <div className="flex gap-2 items-start">
        <Image
          src={"/nav_feature.png"}
          width={40}
          height={40}
          alt="logo"
          className="rounded-full"
        />
        <div className="flex flex-col justify-between w-full">
          <TextArea rows={2} size="large" placeholder="Bạn đang nghĩ gì vậy?" />

          <div className="flex flex-row flex-grow items-center justify-between py-2 space-x-3">
            <div className="flex gap-6">
              <Image
                src="/gallery_icon.svg"
                width={24}
                height={24}
                alt="icon image gallery"
                className="rounded-none"
              />
              <Image
                src="/video_icon.svg"
                width={24}
                height={24}
                alt="icon video"
                className="rounded-none"
              />
              <Image
                src="/attachment_icon.svg"
                width={24}
                height={24}
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
              className="text-black cursor-pointer font-medium"
            >
              Đăng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeature;
