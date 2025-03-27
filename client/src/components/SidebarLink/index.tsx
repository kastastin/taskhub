import Link from "next/link";
import { usePathname } from "next/navigation";

import type { LucideIcon } from "lucide-react";

type SidebarLinkProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const SidebarLink = ({ icon: Icon, label, href }: SidebarLinkProps) => {
  const pathname = usePathname();

  const isPathActive = pathname === href || (pathname === "/" && href === "/dashboard");

  const linkClassNames = `
    relative w-full flex cursor-pointer items-center justify-start gap-3 px-8 py-3 transition-colors
    hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700
    ${isPathActive && "bg-gray-100 text-white dark:bg-gray-600"}
  `;

  return (
    <Link href={href} className={linkClassNames}>
      {isPathActive && <div className="absolute left-0 top-0 h-full w-1 bg-blue-200" />}
      <Icon className="size-6 text-gray-800 dark:text-gray-100" />
      <span className="font-medium text-gray-800 dark:text-gray-100">{label}</span>
    </Link>
  );
};

export default SidebarLink;
