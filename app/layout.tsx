import type { Metadata } from "next";
import { Ruda } from "next/font/google";
import "./globals.css";

const ruda = Ruda({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Union Bricks Company",
  description: "A Portfolio of Union Bricks Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ruda.className}>{children}</body>
    </html>
  );
}
