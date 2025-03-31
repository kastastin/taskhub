import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ProjectType, TaskType } from "@/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Projects", "Tasks"],
  endpoints: (build) => ({
    // <-- Projects -->
    getProjects: build.query<ProjectType[], void>({
      query: () => "projects",
      providesTags: ["Projects"],
    }),

    createProjects: build.mutation<ProjectType, Partial<ProjectType>>({
      query: (project) => ({
        url: "projects",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["Projects"],
    }),

    // <-- Tasks -->
    getTasks: build.query<TaskType[], { projectId: number }>({
      query: ({ projectId }) => `tasks?projectId=${projectId}`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "Tasks" as const, id })) : [{ type: "Tasks" as const }],
    }),

    createTask: build.mutation<TaskType, Partial<TaskType>>({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTaskStatus: build.mutation<TaskType, { taskId: number; status: string }>({
      query: ({ taskId, status }) => ({
        url: `tasks/${taskId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { taskId }) => [{ type: "Tasks", id: taskId }],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectsMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskStatusMutation,
} = api;
