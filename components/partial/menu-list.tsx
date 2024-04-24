"use client";

import { TabMenuForCard } from "@/service/tabMenuService";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type PropsComponent = {
  listMenuTab: Array<TabMenuForCard>;
};

export default function MenuList(props: PropsComponent) {
  const pathName = usePathname().split("/");
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1 ">
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
            className={`${!pathName.includes(item.url) && "opacity-70"} font-medium`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
