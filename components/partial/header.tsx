import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  FilterIcon,
  MessageIcon,
  NotifyIcon,
  SearchIcon,
  SettingIcon,
} from "../../icons";

export default function Header() {
  return (
    <header className="border-b w-full z-10 bg-white px-4">
      <div className="max-w-[1440px] h-[60px] mx-auto flex justify-between items-center py-3">
        <div className="max-w-[330px] w-full flex ">
          <Link
            href="/home"
            className="flex justify-start items-start max-md:w-[108px] max-md:h-[28px] grow"
          >
            <Image
              src="/logo_mental_health.png"
              alt="logo mental health"
              width={130}
              height={20}
              className="object-contain"
            />
          </Link>
        </div>
        <Input
          className="max-w-[700px] h-[45px] text-[#00000066]"
          size="large"
          placeholder="Khám phá về GenZ Mental Health"
          prefix={<SearchIcon />}
          suffix={<FilterIcon />}
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        />
        <div className="flex flex-row gap-5 max-w-[300px] w-full h-full justify-end items-center border-l">
          <div className="p-2 rounded-full border flex justify-center items-center">
            <MessageIcon width={25} height={25} />
          </div>
          <div className="p-2 rounded-full border flex justify-center items-center">
            <NotifyIcon width={25} height={25} />
          </div>
          <div className="p-2 rounded-full border flex justify-center items-center">
            <SettingIcon width={25} height={25} />
          </div>
          <div className="relative w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <Image src="/big_logo.png" fill alt="icon avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}
