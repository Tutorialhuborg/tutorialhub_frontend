import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../stores/hooks";

export default function RedirectHome() {
  const { status, usertype } = useAppSelector(
    (state) => state.userProfile.value
  );

  return (
    <>
      {status ? <Navigate to={`/${usertype}/dashboard`} replace /> : <Outlet />}
    </>
  );
}
