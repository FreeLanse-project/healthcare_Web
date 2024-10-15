import HeaderText from "../../component/headerText";

function Header() {
  return (
    <header>
      <div className=" flex justify-between items-center px-[6%] py-[2%] bg-primary">
        <a href="home">
          <img src="src\assets\logoImage.png" alt="" className="w-32" />
        </a>
        <div className="flex space-x-8">
          <HeaderText text="Home" />
          <HeaderText text="Contact" />
        </div>
      </div>
    </header>
  );
}

export default Header;
