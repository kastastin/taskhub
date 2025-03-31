import { PlusSquare } from "lucide-react";

import { useGetProjectByIdQuery } from "@/state/api";

import Header from "@/components/Header";
import ProjectTabs from "@/app/projects/ProjectTabs";

type Props = {
  projectId: number;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectHeader = ({ projectId, currentTab, setCurrentTab, isModalOpen, setIsModalOpen }: Props) => {
  const { data: project } = useGetProjectByIdQuery(projectId);

  return (
    <div className="px-4 xl:px-6">
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header
          title={project?.name}
          buttonComponent={
            <button
              className="flex items-center rounded-md bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalOpen(true)}
            >
              <PlusSquare className="mr-2 size-5" />
              <span>New Boards</span>
            </button>
          }
        />
      </div>

      <ProjectTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
};

export default ProjectHeader;
