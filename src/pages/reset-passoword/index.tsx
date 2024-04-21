import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import TextInput from "../../components/textInput";
import LoadingButton from "../../components/button";
import OTPInput from "../../components/otpInput";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOpt] = useState("");

  //countdown states
  const [seconds, setSeconds] = useState(0);
  const [isCountdownDone, setIsCountdownDone] = useState(true);

  //set countdown timer
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setIsCountdownDone(true);
    }
  });

  const sendOtp = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      setIsCodeSent(true);
      setIsCountdownDone(false);
      setSeconds(60);
    },
    [email]
  );

  const verifyOtp = useCallback(
    (e: SyntheticEvent) => {
      try {
        setIsVerifyingCode(true);
        navigate(`/change-password/${email}/${otp}`);
      } catch (error) {
      } finally {
        setIsVerifyingCode(false);
      }
    },
    [otp, email]
  );

  return (
    <main className=" w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md flex flex-col items-center gap-5  px-5 md:px-10">
        <Link to="/">
          <img src="/logo512.png" alt="jamb logo" className="w-28 h-auto" />
        </Link>
        <h1 className=" text-2xl text-primary_green-500 text-center">
          Reset Password
        </h1>
        <form onSubmit={sendOtp} className="flex flex-col items-center gap-5  ">
          <TextInput
            value={email}
            setValue={setEmail}
            inputType={"email"}
            label={"Enter email:"}
            isRequired={true}
            id={"email"}
            placeholder={"Enter your registered email"}
          />
          <LoadingButton
            label={
              !isCodeSent
                ? "Reset"
                : isCountdownDone
                ? "Resend code"
                : `${seconds}`
            }
            isLoading={isSendingCode}
            type="submit"
            disabled={!isCountdownDone}
          />
        </form>
      </div>
      {isCodeSent && (
        <div className="w-full max-w-md flex flex-col gap-5  px-5 md:px-10 mt-10">
          <h4 className="">Enter OTP code:</h4>
          <form
            onSubmit={verifyOtp}
            className="w-full flex flex-col items-center gap-5"
          >
            <OTPInput setOtpCode={setOpt} />
            <LoadingButton
              label={"Verify code"}
              isLoading={isVerifyingCode}
              type="submit"
              disabled={false}
            />
          </form>
        </div>
      )}
    </main>
  );
}
