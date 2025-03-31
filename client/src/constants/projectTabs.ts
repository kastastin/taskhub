import { Grid3x3, List, Clock, Table } from "lucide-react";

import { ProjectTabs as Tabs } from "@/types";

export const projectTabs = [
  { name: Tabs.Board, icon: Grid3x3 },
  { name: Tabs.List, icon: List },
  { name: Tabs.Timeline, icon: Clock },
  { name: Tabs.Table, icon: Table },
];
