import Home from "@/pages/Home";
import Problems from "@/pages/Problems";
import { useUser } from "@clerk/react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { isSignedIn, isLoaded } = useUser();

  // This will get rid of the flickering effect
  if (!isLoaded) return null;

  const routes = createBrowserRouter([
    {
      path: "/",
      element: !isSignedIn ? <Home /> : <Navigate to={"/dashboard"} />,
    },
    {
      path: "dashboard",
      element: isSignedIn ? <Dashboard /> : <Navigate to={"/"} />,
    },
    {
      path: "problems",
      element: isSignedIn ? <Problems /> : <Navigate to={"/"} />,
    },
  ]);

  return (
    <>
      <Toaster toastOptions={{ duration: 2000 }} />
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
