import type { Metadata } from "next";
import { ChatRoomArea, Header, MenuList } from "../../../components";
import { getListTabMenu } from "@/service/tabMenuService";
import { getAllRoomMessageAccount } from "@/service/roomMessageService";
import { getLoginAccount } from "@/service/accountService";

export const metadata: Metadata = {
  title: "metal-heath",
  description: "dự án phát triển cộng đồng",
};

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listMenuTab = await getListTabMenu();
  const listRoomChat = await getAllRoomMessageAccount();
  const profile = await getLoginAccount();
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-[#F5F6F8] max-h-screen overflow-hidden">
        <Header profile={profile!} />
        <div className="max-w-[1440px] overflow-hidden mx-auto px-4 flex justify-between mt-1 gap-2">
          <div className="flex flex-col w-[22%] gap-3 bg-white rounded-md overflow-y-auto h-[calc(100vh-60px)]">
            <MenuList listMenuTab={listMenuTab ?? []} />
            <ChatRoomArea listRoomChat={listRoomChat?.slice(0, 5) ?? []} />
          </div>
          <div className="max-h-screen overflow-y-scroll w-[78%]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
