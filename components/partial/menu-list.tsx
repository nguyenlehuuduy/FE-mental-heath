"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const MockDataMenuList = [
  { title: "Trang chủ", icon: "/home_icon.svg", url: "home" },
  { title: "Chuyên gia", icon: "/professional_icon.svg", url: "professional" },
  { title: "Bạn bè", icon: "/friend_icon.svg", url: "friend" },
  { title: "Chatbot", icon: "/chatbot_icon.svg", url: "chatbot" },
  { title: "Blog", icon: "/blog.svg", url: "blog" },
  {
    title: "Không gian ảo",
    icon: "/virtual_space_icon.svg",
    url: "virtual-space",
  },
];

export default function MenuList() {
  const pathName = usePathname().split("/");
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1 ">
      {MockDataMenuList.map((item, index) => (
        <div
          key={index}
          className={`flex gap-6 p-3 items-center cursor-pointer ${pathName.includes(item.url) && "bg-slate-50 rounded-sm border-[1px] border-opacity-85"}`}
          onClick={() => {
            router.push(item.url);
          }}
        >
          <Image src={item.icon} width={24} height={24} alt="icon message" />
          <span
            className={`${!pathName.includes(item.url) && "opacity-70"} font-medium`}
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
