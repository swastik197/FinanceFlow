import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import "./globals.css";
import BottomNavigation from "../components/BottomNavigation";

export const metadata = {
  title: "FinanceFlow - Smart Money Management",
  description: "AI-powered financial management app for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <main className="min-h-screen pb-16">
          {children}
        </main>
        <BottomNavigation />
      </body>
    </html>
  );
}
