import type { Metadata } from "next";
import { Footer, Header, SideBar } from "../../../components";

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
      <body className="relative bg-white w-full h-full mx-auto bg-[url('/waves.png')] bg-cover">
        <Header />
        {children}
        <Footer />
        <SideBar />
      </body>
    </html>
  );
}
