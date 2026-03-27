import { useUser } from "@clerk/react";
import { Navigate } from "react-router";

const RootRedirect = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  if (isSignedIn) return <Navigate to={"/app/dashboard"} replace />;

  return children;
};

export default RootRedirect;
