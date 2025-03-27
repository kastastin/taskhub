import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import Link from "next/link";

type SidebarLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  isOpen: boolean;
};

const SidebarLink = ({ href, icon: Icon, label, isOpen }: SidebarLinkProps) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);

  const screenWidth = window.innerWidth;
  const isPathActive = pathname === href || (pathname === "/" && href === "/dashboard");

  return <Link href={href} className="w-full">
    <div></div>
  </Link>;
};

export default SidebarLink;
