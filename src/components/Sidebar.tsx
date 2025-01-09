"use client";

import { useState } from "react";
import { Nunito_Sans } from "next/font/google"; // Import the font from next/font/google
import { cn } from "@/lib/utils";
import Image from "next/image";
import dashboard from "../icons/dashboard.png";
import menu1 from "../icons/menu1.png";
import menu2 from "../icons/menu2.png";
import menu3 from "../icons/menu3.png";
import adminPanel from "../icons/adminPanel.png";
import femaleAvatar from "../icons/supportfront.png";
import { MessageCircle } from "lucide-react";
import logo from "../icons/logo/logo.png";
import Link from "next/link"; // Import Link for dynamic routing

// Load Nunito Sans font
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans", // CSS variable for the font
  weight: ["400", "600", "700"], // Include desired font weights
});

// Sidebar menu items with links (dynamic routing)
const menuItems = [
  {
    icon: dashboard,
    label: "Dashboard",
    link: "/dashboard/[date]",
    date: "01-01-2025",
  },
  {
    icon: menu1,
    label: "Menu 1",
    link: "/dashboard/[date]",
    date: "02-01-2025",
  },
  {
    icon: menu2,
    label: "Menu 2",
    link: "/dashboard/[date]",
    date: "03-01-2025",
  },
  {
    icon: menu3,
    label: "Menu 3",
    link: "/dashboard/[date]",
    date: "04-01-2025",
  },
  {
    icon: adminPanel,
    label: "Admin Panel",
    link: "/dashboard/[date]",
    date: "05-01-2025",
  },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div
      className={`w-64 lg:w-72 min-h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0 z-10 ${nunitoSans.variable}`} // Apply font variable here
      style={{
        backgroundImage: "url('/images/background.jpg')", // Correct path if in 'public/images'
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6">
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={60}
            className="lg:w-56 cursor-pointer"
          />
        </Link>
      </div>

      <nav className="flex-1 pt-8 px-4 relative">
        <div
          className="absolute top-9 right-0 h-10 w-1 bg-[#00AEEF]"
          style={{ transform: "translateX(100%)" }} // Moves the line to the right edge
        />
        {menuItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.link.replace("[date]", item.date)} // Dynamic link based on the date
            className={cn(
              "flex items-center space-x-3 px-4 py-3 mb-1 text-gray-600 hover:bg-gray-50 hover:rounded-full font-sans",
              activeItem === item.label && "bg-blue-50 text-[#00AEEF]", // Apply active styles
              index === 0 && "pr-6" // Padding to make space for the line
            )}
            onClick={() => setActiveItem(item.label)} // Set active item on click
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={20}
              height={20}
              className="h-5 w-5 lg:h-6 lg:w-6" // Adjust size for larger screens
            />
            <span className="text-sm lg:text-base">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Support Section */}
      <div className="p-4 mt-auto">
        <div className="bg-blue-50 p-4 rounded-lg relative">
          <Image
            src={femaleAvatar}
            alt="Female Avatar"
            width={158} // Adjust size as needed
            height={128}
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 border-white"
          />
          <div className="flex items-center gap-2 mb-4 pt-24">
            <button className="flex items-center w-full lg:w-44 bg-[#00AEEF] text-white py-2 rounded-xl justify-center">
              <MessageCircle className="text-white h-5 w-5 mr-2" />
              <span>Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
