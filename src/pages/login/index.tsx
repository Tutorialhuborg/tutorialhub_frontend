import { SyntheticEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/textInput";
import Password from "../../components/password";
import LoadingButton from "../../components/button";
import { useAppDispatch } from "../../stores/hooks";
import { updateUser } from "../../stores/users/profile";
import { openSnackbar } from "../../stores/appFunctionality/snackbar";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const Login = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      const usertype = email.split("@")[0];
      if (
        usertype === "admin" ||
        usertype === "tutor" ||
        usertype === "tutee"
      ) {
        navigate(`/${usertype}/dashboard`);
        dispatch(
          updateUser({
            username: "Anonymous",
            usertype: usertype,
            email: email,
          })
        );
      } else {
        dispatch(
          openSnackbar({
            message: "Email or password is not correct",
            isError: true,
          })
        );
      }
    },
    [email, password]
  );

  return (
    <main className=" w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-5  px-5 md:px-10">
        <img src="/logo512.png" alt="jamb logo" className="w-28 h-auto" />
        <h1 className=" text-3xl text-primary_green-500 text-center">
          Welcome Back
        </h1>
        <form
          onSubmit={Login}
          className="w-full max-w-md flex flex-col gap-5 items-center"
        >
          <TextInput
            value={email}
            setValue={setEmail}
            inputType={"email"}
            label={"email"}
            isRequired={true}
            id={"email"}
            placeholder={"enter your email"}
          />
          <Password
            value={password}
            setValue={setPassword}
            label={"password"}
            isRequired={true}
            id={"password"}
            placeholder={"enter your password"}
          />
          <Link className="w-full text-end" to="reset-password">
            forgot password?
          </Link>
          <LoadingButton label="Login" isLoading={isSubmitting} type="submit" />
        </form>
      </div>
    </main>
  );
}

export default Login;
