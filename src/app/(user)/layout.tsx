import type { Metadata } from "next";
import {
  ChatRoomArea,
  RecommendFeature,
  Header,
  MenuList,
  NavFeature,
  HotArea,
} from "../../../components";
import { getListTabMenu } from "@/service/tabMenuService";
import { getListHotFeature } from "@/service/featureService";
import { getListHotContent } from "@/service/hotContentService";
import { getAllRoomMessageAccount } from "@/service/roomMessageService";
import { getAllSuggestFollowAccount } from "@/service/followService";

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
  const listHotFeatureContent = await getListHotFeature();
  const listHotContent = await getListHotContent();
  const listRoomChat = await getAllRoomMessageAccount();
  const suggestFollow = await getAllSuggestFollowAccount();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-[#F5F6F8] max-h-screen overflow-hidden">
        <Header />
        <div className="max-w-[1440px] overflow-hidden mx-auto flex justify-evenly mt-1">
          <div className="flex flex-col w-[20%] gap-3 bg-white rounded-md overflow-y-auto h-[calc(100vh-60px)]">
            <MenuList listMenuTab={listMenuTab!} />
            <ChatRoomArea listRoomChat={listRoomChat!.slice(0, 5)} />
          </div>
          <div className="max-h-screen overflow-y-scroll w-[55%]">
            {children}
          </div>
          <div className="w-[20%] flex gap-1">
            <div className="w-full flex flex-col gap-1 overflow-y-auto  h-[calc(100vh-60px)]">
              <NavFeature listHotFeatureContent={listHotFeatureContent!} />
              <RecommendFeature suggestFollow={suggestFollow!.slice(0, 5)} />
              <HotArea listHotContent={listHotContent!} />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
