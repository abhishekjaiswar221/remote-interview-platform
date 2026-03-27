import { useUser } from "@clerk/react";
import { Navigate } from "react-router";
import Loader from "../loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <Loader />;

  if (!isSignedIn) return <Navigate to={"/"} replace />;

  return children;
};

export default ProtectedRoute;
