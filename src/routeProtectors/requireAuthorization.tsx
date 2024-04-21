import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../stores/hooks";

interface prop {
  allowed_user: string;
}
export default function RequireAuthorization({ allowed_user }: prop) {
  const { usertype } = useAppSelector((state) => state.userProfile.value);

  return (
    <>
      {usertype === allowed_user ? <Outlet /> : <Navigate to="/unauthorised" />}
    </>
  );
}
