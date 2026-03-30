import { useUser } from "@clerk/react";
import { Navigate, Outlet } from "react-router";
import Loader from "../loader/Loader";

const PublicRoute = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loader />;

  if (isSignedIn) return <Navigate to={"/app/dashboard"} replace />;

  return <Outlet />;
};

export default PublicRoute;
