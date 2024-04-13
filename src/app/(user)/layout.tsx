import type { Metadata } from "next";
import {
  ChatRoomArea,
  Footer,
  Header,
  MenuList,
  NavFeature,
} from "../../../components";

export const metadata: Metadata = {
  title: "metal-heath",
  description: "dự án phát triển cộng đồng",
};

export default function UserLayout({
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
        <div className="max-w-[1440px] pt-2 overflow-hidden mx-auto flex justify-center">
          <div className="max-w-[330px] bg-white p-5 max-h-screen overflow-y-scroll">
            <MenuList />
            <ChatRoomArea />
          </div>
          <div className="max-w-[650px] mx-4 bg-white p-3 max-h-screen overflow-y-scroll">
            {children}
          </div>
          <div className="max-w-[290px] bg-white max-h-screen overflow-y-scroll">
            <NavFeature />
          </div>
        </div>
      </body>
    </html>
  );
}
