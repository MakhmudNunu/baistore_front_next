import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import '@/shared/styles/globals.scss';
import { Providers } from "./providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

//  className={`${geistSans.variable} ${geistMono.variable}`}

export const metadata: Metadata = {
  title: "Baistore",
  description: "Baistore NEXT for test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
