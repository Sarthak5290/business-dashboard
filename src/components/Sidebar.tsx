"use client";

import { cn } from "@/lib/utils";
import Image from "next/image"; // Import Image component from next/image
import dashboard from "../icons/dashboard.png";
import menu1 from "../icons/menu1.png";
import menu2 from "../icons/menu2.png";
import menu3 from "../icons/menu3.png";
import adminPanel from "../icons/adminPanel.png";
import femaleAvatar from "../icons/supportfront.png"; // The female PNG
import { MessageCircle } from "lucide-react"; // Import the support icon

const menuItems = [
  { icon: dashboard, label: "Dashboard", active: true },
  { icon: menu1, label: "Menu 1" },
  { icon: menu2, label: "Menu 2" },
  { icon: menu3, label: "Menu 3" },
  { icon: adminPanel, label: "Admin Panel" },
];

export const Sidebar = () => {
  return (
    <div
      className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0 z-10"
      style={{
        backgroundImage: "url('/path/to/your/background-image.jpg')", // Add the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6">
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={100} // Set the width for optimization
          height={50} // Set the height for optimization
        />
      </div>
      <nav className="flex-1 pt-8 px-4 relative">
        {/* Blue vertical line positioned in front of Dashboard, extending across the full height */}
        <div
          className="absolute top-9 right-0 h-10 w-1 bg-[#00AEEF]" // Full height of sidebar
          style={{ transform: "translateX(100%)" }} // Moves the line to the right edge of the sidebar
        />

        {menuItems.map((item, index) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 text-gray-600 hover:bg-gray-50 font-sans",
              item.active && "bg-blue-50 text-[#00AEEF]",
              index === 0 && "pr-6" // Padding to make space for the line
            )}
          >
            {typeof item.icon === "string" ? (
              <Image
                src={item.icon}
                alt={item.label}
                width={20} // Set a fixed width for the icon
                height={20} // Set a fixed height for the icon
              />
            ) : (
              <Image
                src={item.icon.src} // Accessing the icon source directly
                alt={item.label}
                width={20} // Set a fixed width for the icon
                height={20} // Set a fixed height for the icon
              />
            )}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Support Section */}
      <div className="p-4">
        <div className="bg-blue-50 p-4 rounded-lg relative ">
          {/* Female Avatar positioned above the button */}
          <Image
            src={femaleAvatar}
            alt="Female Avatar"
            width={128} // Set the width for the avatar
            height={128} // Set the height for the avatar
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 border-white"
          />
          <div className="flex items-center gap-2 mb-4 pt-24">
            {/* Message Circle inside the button */}
            <button className="flex items-center w-48 bg-[#00AEEF] text-white py-2 rounded-lg justify-center">
              <MessageCircle className="text-white h-5 w-5 mr-2" />
              <span>Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
