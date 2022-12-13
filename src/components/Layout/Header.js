// import AddIcon from "../assets/add.png";
// import Logo from "logo.svg";

const Header = (props) => {
  //   const navigate = useNavigate();
  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="flex flex-col sm:flex-row sm:items-center pr-4 justify-between max-w-[1440px] m-auto">
        <a to={"/"} className="flex px-8 py-3 items-center gap-3">
          <img src="logo.svg" className="w-10 h-10" />
          <span className="text-[#5f6368] text-xl">Phonebook</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
