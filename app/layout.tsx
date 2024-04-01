import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)",
  description: "Diva em Foco - Dicas sobre Cabelos, Skincare e Mais :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
      </head>
      <body
        className={`${inter.className} w-full h-full flex flex-col items-center`}
      >
        <div className="max-w-[1200px] w-full flex flex-col gap-4 px-8">
          <header className="py-8">
            <Link href={"/"} className="text-xl text-black">
              <strong>Blog</strong>
            </Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
