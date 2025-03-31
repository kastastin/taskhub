import { ChevronUp, ChevronDown, Briefcase } from "lucide-react";

import SidebarLink from "@/components/SidebarLink";

import type { SidebarLinkType } from "@/types";

type Props = {
  label: string;
  listItems: SidebarLinkType[] | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dropdown = ({ label, listItems, isOpen, setIsOpen }: Props) => {
  return (
    <>
      {/* Label */}
      <button
        className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        onClick={() => setIsOpen((state) => !state)}
      >
        <span className="capitalize">{label}</span>
        {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
      </button>

      {/* List */}
      {isOpen &&
        listItems?.map((item) => (
          <SidebarLink key={item.id} icon={item.icon} label={item.label} href={item.href} />
        ))}
    </>
  );
};

export default Dropdown;
