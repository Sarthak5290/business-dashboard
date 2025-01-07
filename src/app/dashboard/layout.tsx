import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightning Technologies",
  description:
    "LightningTech is an innovative IT services and consulting company based in Pune, India, specializing in cutting-edge development solutions. We focus on delivering exceptional digital experiences through creativity, technology, and customer-centric solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen overflow-hidden bg-gray-50">
          {/* Sidebar */}
          <div className="hidden md:block sticky top-0 z-10 md:w-64 bg-white">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <Header />
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="container mx-auto">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
