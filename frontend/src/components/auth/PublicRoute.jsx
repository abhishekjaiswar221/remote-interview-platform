import { useUser } from "@clerk/react";
import { Navigate } from "react-router";
import Loader from "../loader/Loader";

const RootRedirect = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loader />;

  if (isSignedIn) return <Navigate to={"/app/dashboard"} replace />;

  return children;
};

export default RootRedirect;
