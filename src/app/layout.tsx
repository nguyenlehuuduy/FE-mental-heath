import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, SideBar } from "../../component";
import ProviderRedux from "../../redux/Provider";

export const metadata: Metadata = {
  title: "metal-heath",
  description: "dự án phát triển cộng đồng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderRedux>
        <body className="relative bg-[#F6F7F9]">
          <Header />
          <SideBar />
          <div className="">
            {children}
            <div id="modal-root" />
          </div>
          <Footer />
        </body>
      </ProviderRedux>
    </html>
  );
}
