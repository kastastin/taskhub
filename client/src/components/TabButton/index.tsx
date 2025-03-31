type Props = {
  name: string;
  icon: React.ElementType;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabButton = ({ name, icon: Icon, currentTab, setCurrentTab }: Props) => {
  const isTabActive = currentTab === name;

  const tabClassNames = `
    relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute
    after:-bottom-[9px] after:left-0 after:h-px after:w-full hover:text-blue-600
    dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4
    ${isTabActive && "text-blue-600 after:bg-blue-600 dark:text-white"}
  `;

  return (
    <button className={tabClassNames} onClick={() => setCurrentTab(name)}>
      <Icon className="size-5" />
      <span>{name}</span>
    </button>
  );
};

export default TabButton;
