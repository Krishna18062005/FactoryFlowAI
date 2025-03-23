"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { User } from "@/app/types";

interface SidebarProps {
  user: User;
}

export default function Sidebar({ user }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Analytics", href: "/analytics", icon: ChartBarIcon },
    { name: "Maintenance", href: "/maintenance", icon: WrenchScrewdriverIcon },
    { name: "Industry Overview", href: "/industry-overview", icon: BriefcaseIcon },
    { name: "Webot Simulation", href: "/webot-simulation", icon: CpuChipIcon },
    { name: "Task Optimization", href: "/task-optimization", icon: AdjustmentsHorizontalIcon },
    // ...(user.role === "admin"
    //   ? [{ name: "Team Management", href: "/team", icon: UserGroupIcon }]
    //   : []),
    { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
  ];

  return (
    <>
      {/* Sidebar Toggle Button - Moves to Right on Small Screens */}
      <button
        className="fixed top-4 right-4 md:left-64 z-50 bg-gray-900 text-white p-2 rounded-full shadow-lg transition-all duration-300 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-64"} md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header (Logo & Title) */}
          <div className="flex items-center p-4 border-b border-gray-800">
            <img src="/vercel.svg" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">FactoryFlowAI</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-800"
                  >
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-gray-800 flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold uppercase">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-400 capitalize">{user.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
