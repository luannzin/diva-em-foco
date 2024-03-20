import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full h-full flex flex-col items-center`}
      >
        <div className="max-w-[1200px] w-full flex flex-col gap-4 px-8">
          <header className="py-8">
            <strong className="text-xl">Blog</strong>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
