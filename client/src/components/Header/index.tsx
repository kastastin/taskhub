type Props = {
  title: string | undefined;
  isSmallText?: boolean;
  buttonComponent?: React.ReactNode;
};

const Header = ({ title, buttonComponent, isSmallText = false }: Props) => {
  return (
    <header className="mb-5 flex w-full items-center justify-between">
      <h1 className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}>{title}</h1>
      {buttonComponent}
    </header>
  );
};

export default Header;
