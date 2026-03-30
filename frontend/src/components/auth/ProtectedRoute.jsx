import { useUser } from "@clerk/react";
import { Navigate, Outlet } from "react-router";
import Loader from "../loader/Loader";

const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loader />;

  if (!isSignedIn) return <Navigate to={"/"} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
