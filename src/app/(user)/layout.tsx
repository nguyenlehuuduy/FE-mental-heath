import type { Metadata } from "next";
import { ChatRoomArea, Header, MenuList } from "../../../components";
import { getListTabMenu } from "@/service/tabMenuService";
import { getAllRoomMessageAccount } from "@/service/roomMessageService";
import { getLoginAccount } from "@/service/accountService";
import ProviderRedux from "../../../redux/Provider";
import { getListNotification } from "@/service/notificationService";
import { cookies } from "next/headers";
import { COOKIE_ACCESS_TOKEN_KEY } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export const metadata: Metadata = {
  title: "metal-heath",
  description: "dự án phát triển cộng đồng",
};

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  revalidateTag("get-valid-notification-cache");
  const listMenuTab = await getListTabMenu();
  const listRoomChat = await getAllRoomMessageAccount();
  const profile = await getLoginAccount();
  const listNotification = await getListNotification();
  const cookieStore = cookies();
  const sessionKey = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <ProviderRedux>
        <body className="relative bg-[#F5F6F8] max-h-screen overflow-hidden">
          <Header
            sessionKey={sessionKey ?? ""}
            profile={profile!}
            listNotification={listNotification ?? []}
          />
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
      </ProviderRedux>
    </html>
  );
}
