import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../component/button";
import IntroImage from "../../component/introImg";
import TextComponent from "../../component/textComponent";

function ResetPassword() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/signin");
  };
  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="flex-col  rounded-md md:p-16 w-[90%] md:w-[50%]">
        <TextComponent text="New password" className=" text-2xl font-bold" />

        <form className="">
          <div className="flex-col">
            <TextComponent text="Password" className="pb-3 pt-6" />
            <input
              type="password"
              className=" border border-gray w-full p-2 h-10 rounded-md"
            />
          </div>
          <div className="flex-col">
            <TextComponent text="Confirm Password" className="pb-3 pt-6" />
            <input
              type="password"
              className=" border border-gray w-full p-2 h-10 rounded-md"
            />
          </div>

          <div className="py-6"></div>
          <ButtonComponent text="Change password" onclick={handleOnClick} />
        </form>
      </div>
      <IntroImage />
    </div>
  );
}

export default ResetPassword;
