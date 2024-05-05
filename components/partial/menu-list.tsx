"use client";

import { TabMenuForCard } from "@/service/tabMenuService";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type PropsComponent = {
  listMenuTab: Array<TabMenuForCard>;
};

export default function MenuList(props: PropsComponent) {
  const pathName = usePathname().split("/");
  const router = useRouter();
  return (
    <div className="flex flex-col w-full justify-between">
      <div className="flex flex-col gap-1 p-2 w-full">
        {props.listMenuTab.map((item, index) => (
          <div
            key={index}
            className={`flex gap-6 p-3 items-center cursor-pointer ${pathName.includes(item.url) && "bg-slate-50 rounded-sm border-[1px] border-opacity-85"}`}
            onClick={() => {
              router.push(item.url);
            }}
          >
            <Image
              src={item.icon_url}
              width={24}
              height={24}
              alt="icon tab menu"
            />
            <span
              className={`${!pathName.includes(item.url) && "opacity-70 font-medium"}`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* <div className="text-[12px] flex flex-wrap gap-1 underline justify-items-start h-[70px]">
        <Link href={""}>Điều khoản</Link>
        <Link href={""}>Chính sách</Link>
        <Link href={""}>Bảo mật</Link>
        <Link href={""}>Chúng tôi</Link>
        <Link href={""}>Liên lạc</Link>
        <Link href={""}>Phản hồi</Link>
        <p>GenZ mental heath</p>
        <p>@Copyright2024</p>
      </div> */}
    </div>
  );
}
