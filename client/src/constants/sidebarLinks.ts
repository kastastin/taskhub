import { Home, ChartBar, Search, Settings, User, Users } from "lucide-react";

import type { SidebarLinkType } from "@/types";

export const sidebarLinks: SidebarLinkType[] = [
  { id: 1, label: "Home", href: "/", icon: Home },
  { id: 2, label: "Search", href: "/search", icon: Search },
  { id: 3, label: "Users", href: "/users", icon: User },
  { id: 4, label: "Teams", href: "/teams", icon: Users },
  { id: 5, label: "Timeline", href: "/timeline", icon: ChartBar },
  { id: 6, label: "Settings", href: "/settings", icon: Settings },
];
