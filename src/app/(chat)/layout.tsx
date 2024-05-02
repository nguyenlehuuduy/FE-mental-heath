import type { Metadata } from "next";
import { SidebarChat } from "../../../components";

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
        <div className="max-w-[1440px] overflow-hidden mx-auto flex justify-between h-full">
          <SidebarChat />
          <div className="w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
