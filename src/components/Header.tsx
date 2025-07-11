interface HeaderProps {
  scenarioName: string;
}

const Header = ({ scenarioName }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header-title">{scenarioName}</h1>
    </header>
  );
};

export default Header;