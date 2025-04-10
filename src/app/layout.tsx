import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MyBlog - 设计精美的个人博客",
  description: "一个设计精美、具有高级感的个人博客网站，分享关于设计、开发和创意的见解。",
  authors: [{ name: "博主" }],
  keywords: ["博客", "设计", "前端开发", "创意", "个人网站"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
