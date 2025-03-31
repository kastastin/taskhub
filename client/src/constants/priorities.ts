import { ChevronsUp, ChevronsDown, AlertTriangle, Layers3, Diff } from "lucide-react";

import type { SidebarLinkType } from "@/types";

export const priorities: SidebarLinkType[] = [
  { id: 1, label: "Urgent", href: "/priority/urgent", icon: AlertTriangle },
  { id: 2, label: "High", href: "/priority/high", icon: ChevronsUp },
  { id: 3, label: "Medium", href: "/priority/medium", icon: Diff },
  { id: 4, label: "Low", href: "/priority/low", icon: ChevronsDown },
  { id: 5, label: "Backlog", href: "/priority/backlog", icon: Layers3 },
];
