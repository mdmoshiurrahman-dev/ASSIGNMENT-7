import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দর — নিত্যপ্রয়োজনীয় পণ্যের দাম জানুন, সচেতন কেনাকাটা করুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="container mx-auto">
          <Navbar />
        </nav>
        <main className="grow bg-[#F0F5F0] pb-5">{children}
        </main>
        <footer className="container mx-auto">
          <Footer />
        </footer>
          <ToastProvider/>
      </body>
    </html>
  );
}
