import { Filter, Share2, Grid3x3 } from "lucide-react";

import { projectTabs } from "@/constants";

import TabButton from "@/components/TabButton";

type Props = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const ProjectTabs = ({ currentTab, setCurrentTab }: Props) => {
  return (
    <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center">
      <div className="flex flex-1 items-center gap-2 md:gap-4">
        {projectTabs.map((tab) => (
          <TabButton
            key={tab.name}
            name={tab.name}
            icon={tab.icon}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
          <Filter className="size-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
          <Share2 className="size-5" />
        </button>

        <div className="relative">
          <input
            type="text"
            placeholder="Search Task"
            className="rounded-md border py-1 pl-10 pr-4 dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
          />
          <Grid3x3 className="absolute left-3 top-2 size-4 text-gray-400 dark:text-neutral-500" />
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
