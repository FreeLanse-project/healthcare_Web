import OTPInput from "react-otp-input";
import ButtonComponent from "../../component/button";
import IntroImage from "../../component/introImg";
import TextComponent from "../../component/textComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("forgetPassword");
  const navigate = useNavigate();

  const handleResetPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (step === "forgetPassword") {
      setStep("otpVerification");
    }
  };
  const handleOnClick = () => {
    navigate("/reset");
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex-col rounded-md md:p-16 w-[90%] md:w-[50%]">
        <TextComponent
          text={
            step === "forgetPassword" ? "Forget Password" : "OTP Verification"
          }
          className="text-2xl font-bold"
        />

        <div className="flex space-x-2 py-4">
          <TextComponent
            text="Remember your password?"
            className="text-text_gray"
          />
          <a href="signin" className="text-text_blue font-bold">
            Sign in
          </a>
        </div>

        <form className="pt-6" onSubmit={handleResetPassword}>
          {step === "forgetPassword" ? (
            <div className="flex-col">
              <TextComponent text="Email address" className="py-3" />
              <input
                type="email"
                className="border border-gray p-2 w-full h-10 rounded-md transition-all"
              />
            </div>
          ) : (
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              placeholder="-"
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                border: "1px solid black",
                width: "50px",
                height: "50px",
                margin: "5px",
                fontSize: "20px",
                textAlign: "center",
                borderRadius: "6px",
              }}
              containerStyle={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            />
          )}

          <div className="py-6"></div>
          {step === "forgetPassword" ? (
            <ButtonComponent text="Reset password" />
          ) : (
            <div className="flex gap-4">
              <ButtonComponent text="Verify" onclick={handleOnClick} />
              <ButtonComponent
                text="Resend Otp"
                className=" bg-white text-primary border-2 border-primary"
              />
            </div>
          )}
        </form>
      </div>
      <IntroImage />
    </div>
  );
}

export default ForgetPassword;
