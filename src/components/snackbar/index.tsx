import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../stores/hooks";
import { closeSnackBar } from "../../stores/appFunctionality/snackbar";

const SnackBar = ({
  show,
  message,
  isError,
}: {
  show: boolean;
  message: string;
  isError?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (show) {
      setSeconds(6);
    }
  }, [show]);

  //set countdown timer to reduce counting seconds for snackbar autoclose
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });

  //listen till seconds reads less than 1 to auto close snackbar
  useEffect(() => {
    if (seconds < 1) {
      dispatch(closeSnackBar());
    }
  }, [seconds]);

  //handle manual close
  const close = useCallback(() => {
    dispatch(closeSnackBar());
    setSeconds(0);
  }, []);

  return (
    <>
      {show && (
        <div className=" fixed bottom-8 right-0 flex justify-center items-center w-full">
          <div
            className={`flex items-stretch z-[100] shadow-lg text-white ${
              isError ? " bg-red-500 " : "bg-primary_green-500"
            }`}
          >
            <div className=" flex items-center mx-4 py-2">
              <p className=" font-semibold">{message}</p>
            </div>
            <div
              onClick={() => close()}
              className=" text-red-500 bg-white hover:rotate-180 transition-all flex items-center justify-center p-2 hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SnackBar;
