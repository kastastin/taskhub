"use client";

import { useState } from "react";

import ProjectHeader from "@/app/projects/ProjectHeader";

type Props = {
  params: { id: string };
};

const ProjectPage = ({ params }: Props) => {
  const { id } = params;

  const [currentTab, setCurrentTab] = useState("Board");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProjectHeader
        projectId={Number(id)}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default ProjectPage;
