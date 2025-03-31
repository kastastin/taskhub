"use client";

import Image from "next/image";
import { X, LockIcon, FolderGit } from "lucide-react";
import { useEffect, useState } from "react";

import { setIsSidebarOpen } from "@/state";
import { useGetProjectsQuery } from "@/state/api";
import { useAppDispatch, useAppSelector } from "@/app/redux";

import { sidebarLinks, priorities } from "@/constants";

import Dropdown from "@/components/Dropdown";
import SidebarLink from "@/components/SidebarLink";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);

  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);

  const { data: fetchedProjects } = useGetProjectsQuery();
  const projectDropdownItems = fetchedProjects?.map(({ id, name }) => ({
    id,
    icon: FolderGit,
    label: name,
    href: `/projects/${id}`,
  }));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSidebarOpen) {
        dispatch(setIsSidebarOpen(false));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarOpen, dispatch]);

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
            <button onClick={() => dispatch(setIsSidebarOpen(!isSidebarOpen))}>
              <X className="size-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>

        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/kstn_team_logo.svg" alt="Team logo" width={40} height={40} priority />

          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">KSTN Team</h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-0.5 size-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="z-10 w-full">
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.id} icon={link.icon} label={link.label} href={link.href} />
          ))}
        </nav>

        <Dropdown
          label="projects"
          listItems={projectDropdownItems}
          isOpen={isProjectDropdownOpen}
          setIsOpen={setIsProjectDropdownOpen}
        />

        <Dropdown
          label="priority"
          listItems={priorities}
          isOpen={isPriorityDropdownOpen}
          setIsOpen={setIsPriorityDropdownOpen}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
