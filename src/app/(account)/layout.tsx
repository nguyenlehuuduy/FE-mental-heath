import type { Metadata } from "next";
import { ChatRoomArea, Header, MenuList } from "../../../components";

export const metadata: Metadata = {
  title: "metal-heath",
  description: "dự án phát triển cộng đồng",
};

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-[#F5F6F8] max-h-screen overflow-hidden">
        <Header />
        <div className="max-w-[1440px] pt-1 overflow-hidden mx-auto flex flex-row justify-start">
          <div className="max-w-[330px] bg-white p-5 max-h-screen overflow-y-scroll">
            <MenuList />
            <ChatRoomArea />
          </div>
          <div className="max-w-[1200px] bg-white  max-h-screen overflow-y-scroll">
            {children}
          </div>
    
        </div>
      </body>
    </html>
  );
}
