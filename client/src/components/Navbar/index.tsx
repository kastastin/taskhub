import Link from "next/link";
import { Search, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 shadow-md dark:bg-black">
      {/* Searchbar */}
      <div className="flex items-center gap-8">
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
        <Link href="/settings" className="size-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <Settings className="size-6 cursor-pointer dark:text-white" />
        </Link>

        {/* Vertical devider line */}
        <div className="ml-2 mr-5 hidden min-h-6 w-0.5 bg-gray-200 md:inline-block" />
      </div>
    </header>
  );
};

export default Navbar;
