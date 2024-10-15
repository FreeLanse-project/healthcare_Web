import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className=" flex max-md:flex-col max-md:pb-4 gap-4 justify-between items-center px-[6%] py-[1%] bg-primary">
        <a href="home">
          <img src="src\assets\logoImage.png" alt="" className="w-36" />
        </a>
        <div className="flex ">
          <span className="text-secondary">
            &copy; 2024. All Right Reserved.
          </span>
        </div>
        <div className="flex items-center px-4 space-x-8">
          <FaFacebookF color="white" />
          <BiLogoInstagramAlt color="white" size={20} />
          <FaXTwitter color="white" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
