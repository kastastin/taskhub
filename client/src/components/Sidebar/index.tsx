"use client";

import Image from "next/image";
import { useState } from "react";
import { X, LockIcon } from "lucide-react";

import { setIsSidebarOpen } from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);

  const [isProjectDropdownVisible, setIsProjectDropdownVisible] = useState(true);
  const [isPriorityDropdownVisible, setIsPriorityDropdownVisible] = useState(true);

  const sidebarClassNames = `
    fixed z-50 flex h-full flex-col justify-between
    overflow-y-auto bg-white shadow-md transition-all duration-300 dark:bg-black
    ${isSidebarOpen ? "w-64" : "hidden w-0"}
  `;

  return (
    <aside className={sidebarClassNames}>
      <div className="flex size-full flex-col justify-start">
        {/* Logo */}
        <div className="z-55 flex min-h-[56px] w-64 items-center justify-between px-6 dark:bg-black">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">TaskHub</h1>

          {isSidebarOpen && (
            <button
              onClick={() => {
                dispatch(setIsSidebarOpen(!isSidebarOpen));
              }}
            >
              <X className="size-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>

        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/kstn_team_logo.svg" alt="Team logo" width={40} height={40} />

          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">KSTN Team</h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-0.5 size-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
