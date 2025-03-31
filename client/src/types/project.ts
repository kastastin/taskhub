export type ProjectType = {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
};

export enum ProjectTabs {
  Board = "Board",
  List = "List",
  Timeline = "Timeline",
  Table = "Table",
}
