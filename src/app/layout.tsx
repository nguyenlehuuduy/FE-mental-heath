import type { Metadata } from "next";
import "./globals.css";
import ProviderRedux from "../../redux/Provider";
import { Fragment } from "react";

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
    <html lang={"vn"}>
      <body>
        <Fragment>
          <ProviderRedux>{children}</ProviderRedux>
        </Fragment>
      </body>
    </html>
  );
}
