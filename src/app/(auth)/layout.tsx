import type { Metadata } from "next";
import { FooterLanding, HeaderLanding } from "../../../components";

export const metadata: Metadata = {
  title: "metal-heath",
  description: "dự án phát triển cộng đồng",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-white w-full h-screen ">
      <div className="px-4 bg-[#D7EFFF]">
        <HeaderLanding/>
        </div>
        {children}
        <div className="bg-[#D7EFFF] px-5">
        <FooterLanding />
      </div>
      </body>
    </html>
  );
}
