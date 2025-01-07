"use client";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import profile from "../icons/user/profile.png";
import notification from "../icons/user/notification.png";
import firm from "../icons/user/firm.png";
import settings from "../icons/user/settings.png";
import help from "../icons/user/help.png";
import about from "../icons/user/about.png";
import logout from "../icons/user/logout.png";
import notificationIcon from "../icons/user/notification.png";
import profileIcon from "../icons/profile.png";

export const Header = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 sticky top-0 z-10">
      {/* Centered Text - Responsive adjustments */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#00AEEF] py-3 px-8 md:px-12 lg:px-16 rounded-b-2xl mt-[-40px] min-w-[200px] md:min-w-[300px] lg:min-w-[400px]">
        <span className="text-white pl-10 text-lg md:text-xl font-semibold whitespace-nowrap">
          Springfield media
        </span>
      </div>

      {/* Search and Profile - Responsive spacing */}
      <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
        {/* Search Icon */}
        <div className="relative">
          <Search className="h-5 w-5" />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <div className="cursor-pointer" onClick={toggleNotificationDropdown}>
            <Image
              src={notification}
              alt="Notifications"
              className="h-5 w-5"
              width={20}
              height={20}
            />
          </div>

          {/* Notification Dropdown - Responsive width */}
          {isNotificationDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 md:w-72 bg-white border border-gray-200 rounded-xl shadow-lg">
              <ul className="py-2">
                {/* First notification */}
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={notificationIcon}
                    alt="Notification"
                    className="h-4 w-4 flex-shrink-0"
                    width={16}
                    height={16}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="block truncate">You created a new Firm</span>
                    <span className="text-gray-400 text-xs block">Just now</span>
                  </div>
                </li>

                {/* Second notification */}
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={profile}
                    alt="User"
                    className="h-4 w-4 flex-shrink-0"
                    width={16}
                    height={16}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="block truncate">New user registered.</span>
                    <span className="text-gray-400 text-xs block">59 minutes ago</span>
                  </div>
                </li>

                {/* Other notifications */}
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={notificationIcon}
                    alt="Notification"
                    className="h-4 w-4 flex-shrink-0"
                    width={16}
                    height={16}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="block truncate">Your subscription is renewed.</span>
                    <span className="text-gray-400 text-xs block">12 hours ago</span>
                  </div>
                </li>
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={notificationIcon}
                    alt="Notification"
                    className="h-4 w-4 flex-shrink-0"
                    width={16}
                    height={16}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="block truncate">New Update has received.</span>
                    <span className="text-gray-400 text-xs block">3 days ago</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Section - Responsive adjustments */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 bg-white px-3 md:px-4 py-2 rounded-full border border-white cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            <Image
              src={profileIcon}
              alt="Profile"
              className="h-8 w-8 rounded-full"
              width={32}
              height={32}
            />
            <span className="text-sm font-bold text-black font-[Nunito Sans] hidden md:block">
              Evan Yates
            </span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          {/* Profile Dropdown Menu - Responsive width */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white border border-gray-200 rounded-xl shadow-lg">
              <ul className="py-1">
                {/* Menu items */}
                {[
                  { icon: profile, text: "Profile" },
                  { icon: notification, text: "Notifications" },
                  { icon: firm, text: "Change Firm" },
                  { icon: settings, text: "Settings" },
                  { icon: help, text: "Help/Support" },
                  { icon: about, text: "About (Version Info)" },
                  { icon: logout, text: "Logout" },
                ].map((item, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                    <div className="bg-[var(--Primary-Purple,#E5ECF6)] p-1 rounded-full flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.text}
                        className="h-4 w-4"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="truncate">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;