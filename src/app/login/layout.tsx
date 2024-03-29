import type { Metadata } from "next";
import ProviderRedux from "../../../redux/Provider";

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
      <body className="relative bg-white w-full h-full mx-auto">
        <div className="w-full h-full bg-[url('/waves.png')] bg-cover">
          {children}
        </div>
      </body>
    </html>
  );
}
