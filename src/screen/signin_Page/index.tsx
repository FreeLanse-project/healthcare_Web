import ButtonComponent from "../../component/button";
import TextComponent from "../../component/textComponent";

function SignInPage() {
  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="flex-col  rounded-md md:p-4 w-[90%] md:w-[50%]">
        <TextComponent
          text="Sign in to your account "
          className=" text-2xl font-bold"
        />
        <div className="flex space-x-2 py-4">
          <TextComponent text={` Not a member?`} className="text-text_gray" />
          <a href="signup" className="text-text_blue font-bold">
            Sign Up
          </a>
        </div>
        <form className=" pt-6">
          <div className="flex-col">
            <TextComponent text="Email address" className="py-3" />
            <input
              type="email"
              className=" border border-gray w-full h-10 rounded-md transition-all"
            />
          </div>
          <div className="flex-col">
            <TextComponent text="Password" className="pb-3 pt-6" />
            <input
              type="password"
              className=" border border-gray w-full h-10 rounded-md"
            />
          </div>

          <div className="flex justify-between py-6">
            <div className="flex space-x-2 items-center">
              <TextComponent text="Remember me?" className="text-gray-600" />
              <input type="checkbox" className="h-4 w-4 accent-primary" />
            </div>
            <a href="forget" className="font-medium text-text_blue">
              Forgot Password?
            </a>
          </div>
          <ButtonComponent text="Sign in" />
        </form>
      </div>
      <div className=" max-md:hidden w-[50%] overflow-hidden">
        <img
          src="src\assets\introImage.jpg"
          alt=""
          className="h-[80vh]  object-fill"
        />
      </div>
    </div>
  );
}

export default SignInPage;
