import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b w-full z-10 bg-white">
      <div className="max-w-[1440px] h-[75px] mx-auto flex justify-between items-center py-3">
        <Link
          href="/home"
          className="flex justify-center items-center max-md:w-[108px] max-md:h-[28px]"
        >
          <Image
            src="/logo_mental_health.png"
            alt="logo mental health"
            width={148}
            height={44}
            className="object-contain"
          />
        </Link>
        <Input
          className="max-w-[720px] h-[50px] text-xl text-[#00000066]"
          size="large"
          placeholder="Khám phá về GenZ Mental Health"
          prefix={
            <Image
              src="/search.png"
              width={24}
              height={24}
              alt="icon search"
              className="mr-6"
            />
          }
          suffix={
            <Image
              src="/filter.png"
              width={24}
              height={24}
              alt="icon filter"
              className="ml-6"
            />
          }
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        />
        <div className="flex flex-row gap-5 max-w-[300px] w-full h-full justify-end items-center border-l">
          <div className="w-[44px] h-[44px] rounded-full border flex justify-center items-center">
            <Image
              src="/message.png"
              width={24}
              height={24}
              alt="icon message"
            />
          </div>
          <div className="w-[44px] h-[44px] rounded-full border flex justify-center items-center">
            <Image
              src="/notification.png"
              width={24}
              height={24}
              alt="icon notification"
            />
          </div>
          <div className="w-[44px] h-[44px] rounded-full border flex justify-center items-center">
            <Image
              src="/setting.png"
              width={24}
              height={24}
              alt="icon setting"
            />
          </div>
          <div className=" relative w-[44px] h-[44px] rounded-full flex justify-center items-center">
            <Image src="/big_logo.png" fill alt="icon avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}
