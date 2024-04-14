import type { Metadata } from "next";

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
      <body className="relative bg-white w-full h-screen bg-[url('/waves.png')] bg-cover bg-no-repeat bg-bottom ">
        {children}
      </body>
    </html>
  );
}
