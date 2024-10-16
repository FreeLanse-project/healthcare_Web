import ButtonComponent from "../../component/button";
import IntroImage from "../../component/introImg";
import TextComponent from "../../component/textComponent";

function SignUp() {
  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="flex-col  rounded-md md:p-16 w-[90%] md:w-[50%]">
        <TextComponent text="Sign Up" className=" text-2xl font-bold" />
        <div className="flex space-x-2 py-4">
          <TextComponent
            text={`Already have an account?`}
            className="text-text_gray"
          />
          <a href="signin" className="text-text_blue font-bold">
            Sign in
          </a>
        </div>
        <form className=" pt-6">
          <div className="flex gap-4">
            <div className="flex-col w-[50%]">
              <TextComponent text="First Name" className="py-3" />
              <input
                type="text"
                className=" border border-gray w-full p-2 h-10 rounded-md transition-all"
              />
            </div>
            <div className="flex-col w-[50%]">
              <TextComponent text="Last Name" className="py-3" />
              <input
                type="text"
                className=" border border-gray w-full p-2 h-10 rounded-md transition-all"
              />
            </div>
          </div>
          <div className="Date of birth">
            <TextComponent text="Last Name" className="py-3" />
            <input
              type="date"
              className=" border border-gray w-full p-2 h-10 rounded-md transition-all"
            />
          </div>
          <div className="flex-col">
            <TextComponent text="Email address" className="py-3" />
            <input
              type="email"
              className=" border border-gray w-full p-2 h-10 rounded-md transition-all"
            />
          </div>
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
          <ButtonComponent text="Sign Up" />
        </form>
      </div>
      <IntroImage />
    </div>
  );
}

export default SignUp;
