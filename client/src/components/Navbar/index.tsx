import Link from "next/link";
import { Menu, Search, Sun, Moon, Settings } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarOpen, setIsDarkModeActive } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);
  const isDarkModeActive = useAppSelector((state) => state.global.isDarkModeActive);

  const iconClassNames = "size-6 cursor-pointer dark:text-white";

  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 shadow-md dark:bg-black">
      {/* Searchbar */}
      <div className="flex items-center gap-8">
        {!isSidebarOpen && (
          <button onClick={() => dispatch(setIsSidebarOpen(!isSidebarOpen))}>
            <Menu className="size-8 dark:text-white" />
          </button>
        )}

        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 size-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            type="search"
            placeholder="Search..."
            className="search-input-cancel-icon w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:placeholder-white"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center">
        {/* Dark Mode Icon */}
        <button
          className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => dispatch(setIsDarkModeActive(!isDarkModeActive))}
        >
          {isDarkModeActive ? <Sun className={iconClassNames} /> : <Moon className={iconClassNames} />}
        </button>

        {/* Settings icon */}
        <Link href="/settings" className="size-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <Settings className={iconClassNames} />
        </Link>

        {/* Vertical devider line */}
        <div className="ml-2 mr-5 hidden min-h-6 w-0.5 bg-gray-200 md:inline-block" />
      </div>
    </header>
  );
};

export default Navbar;
