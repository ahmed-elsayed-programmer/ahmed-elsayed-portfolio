import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/themeContext";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedelsayed.vercel.app"),
  title: "Ahmed Elsayed | Full-Stack Engineer",
  description: "Ahmed Elsayed's bilingual Full-Stack Engineer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${notoSansArabic.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
