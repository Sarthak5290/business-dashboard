"use client"
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image"; // Importing next/image for optimized images
import profile from "../icons/user/profile.png";
import notification from "../icons/user/notification.png";
import firm from "../icons/user/firm.png";
import settings from "../icons/user/settings.png";
import help from "../icons/user/help.png";
import about from "../icons/user/about.png";
import logout from "../icons/user/logout.png";
import notificationIcon from "../icons/user/notification.png";

export const Header = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 sticky top-0 z-10">
      {/* Centered Text */}
      <div className="ml-96 pl-44 pr-44 flex justify-end bg-[#00AEEF] py-3 px-4 rounded-b-2xl mt-[-40px]">
        <span className="text-white text-xl font-semibold">
          Springfield media
        </span>
      </div>

      {/* Search and Profile */}
      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <div className="relative">
          <Search className="absolute top-1/2 transform -translate-y-1/2 h-5 w-5" />
        </div>

        {/* Notification Icon */}
        <div className="relative pl-3 -mr-5">
          <div className="cursor-pointer" onClick={toggleNotificationDropdown}>
            <Image
              src={notification}
              alt="Notifications"
              className="h-5 w-5"
              width={20}
              height={20}
            />
          </div>

          {/* Notification Dropdown */}
          {isNotificationDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-2">
                {/* First notification */}
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={notificationIcon}
                    alt="Notification"
                    className="h-4 w-4"
                    width={16}
                    height={16}
                  />
                  <span>
                    You created a new Firm{" "}
                    <span className="text-gray-400 text-xs">Just now</span>
                  </span>
                </li>

                {/* Second notification */}
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={profile}
                    alt="User"
                    className="h-4 w-4"
                    width={16}
                    height={16}
                  />
                  <span>
                    New user registered.{" "}
                    <span className="text-gray-400 text-xs">
                      59 minutes ago
                    </span>
                  </span>
                </li>

                {/* Other notifications */}
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={notificationIcon}
                    alt="Notification"
                    className="h-4 w-4"
                    width={16}
                    height={16}
                  />
                  <span>
                    Your subscription is renewed.{" "}
                    <span className="text-gray-400 text-xs">12 hours ago</span>
                  </span>
                </li>
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <Image
                    src={notificationIcon}
                    alt="Notification"
                    className="h-4 w-4"
                    width={16}
                    height={16}
                  />
                  <span>
                    New Update has received.{" "}
                    <span className="text-gray-400 text-xs">3 days ago</span>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-white cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            <Image
              src="/profile.png" // Assuming this image is in the 'public' folder
              alt="Profile"
              className="h-8 w-8 rounded-full"
              width={32}
              height={32}
            />
            <span className="text-sm font-medium text-gray-700">Evan Yates</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          {/* Profile Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-1">
                {/* Menu items */}
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <div className="bg-[var(--Primary-Purple, #E5ECF6)] p-1 rounded-full">
                    <Image
                      src={profile}
                      alt="Profile"
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>Profile</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <div className="bg-[var(--Primary-Purple, #E5ECF6)] p-1 rounded-full">
                    <Image
                      src={notification}
                      alt="Notifications"
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>Notifications</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <div className="bg-[var(--Primary-Purple, #E5ECF6)] p-1 rounded-full">
                    <Image
                      src={firm}
                      alt="Change Firm"
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>Change Firm</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <div className="bg-[var(--Primary-Purple, #E5ECF6)] p-1 rounded-full">
                    <Image
                      src={settings}
                      alt="Settings"
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>Settings</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <div className="bg-[var(--Primary-Purple, #E5ECF6)] p-1 rounded-full">
                    <Image
                      src={help}
                      alt="Help/Support"
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>Help/Support</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <div className="bg-[var(--Primary-Purple, #E5ECF6)] p-1 rounded-full">
                    <Image
                      src={about}
                      alt="About (Version Info)"
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>About (Version Info)</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3">
                  <div className="bg-[var(--Primary-Purple, #E5ECF6)] p-1 rounded-full">
                    <Image
                      src={logout}
                      alt="Logout"
                      className="h-4 w-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
