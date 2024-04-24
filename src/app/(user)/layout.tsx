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
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-[#F5F6F8] max-h-screen overflow-hidden">
        <Header />
        <div className="max-w-[1440px] pt-2 overflow-hidden mx-auto flex justify-between">
          <div className="max-w-[330px] w-full bg-white p-5 max-h-screen overflow-y-scroll">
            <MenuList listMenuTab={listMenuTab!} />
            <ChatRoomArea />
          </div>
          <div className="max-w-[720px] max-h-screen overflow-y-scroll">
            {children}
          </div>
          <div className="max-w-[300px] w-full bg-white max-h-screen overflow-y-scroll">
            <NavFeature listHotFeatureContent={listHotFeatureContent!} />
            <RecommendFeature />
            <HotArea listHotContent={listHotContent!} />
          </div>
        </div>
      </body>
    </html>
  );
}
