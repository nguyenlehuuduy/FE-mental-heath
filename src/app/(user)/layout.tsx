import type { Metadata } from "next";
import { Footer, Header, NavFeature, SideBar } from "../../../components";

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
      <body className="relative bg-[#F5F6F8]">
        <Header />
        <div className="max-w-[1440px] pt-[75px] overflow-hidden mx-auto flex">
          <div className="max-w-[300px] bg-blue-50">
            <SideBar />
          </div>
          <div className="max-w-[720px] px-[300px] mx-auto">{children}</div>
          <div className="max-w-[300px] bg-white">
            <NavFeature />
          </div>
        </div>
      </body>
    </html>
  );
}
