import type { AttachmentType, CommentType, UserType } from "@/types";

export type TaskType = {
  id: number;
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriotiry;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;

  author?: UserType;
  assignee?: UserType;
  comments?: CommentType[];
  attachments?: AttachmentType[];
};

enum TaskStatus {
  ToDo = "To Do",
  WorkInProgress = "Work In Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}

enum TaskPriotiry {
  Urgent = "Urgent",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  Backlog = "Backlog",
}
