import Home from "@/pages/Home";
import Problems from "@/pages/Problems";
import { useUser } from "@clerk/react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

const App = () => {
  const { isSignedIn } = useUser();

  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Home,
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
