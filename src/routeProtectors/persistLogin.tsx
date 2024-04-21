import { useAppSelector } from "../stores/hooks";
import { Navigate, Outlet } from "react-router-dom";

export default function PersistLogin() {
  const { status } = useAppSelector((state) => state.userProfile.value);

  return <>{status ? <Outlet /> : <Navigate to="/" />}</>;
}
