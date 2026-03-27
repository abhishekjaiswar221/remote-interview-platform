import { useUser } from "@clerk/react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  if (!isSignedIn) return <Navigate to={"/"} replace />;

  return children;
};

export default ProtectedRoute;
