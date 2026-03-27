import Home from "@/pages/Home";
import Problems from "@/pages/Problems";
import { useUser } from "@clerk/react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";
import AppLayout from "./layout/AppLayout";
import HomeLayout from "./layout/HomeLayout";
import Dashboard from "./pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Home />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "app",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "problems",
        element: (
          <ProtectedRoute>
            <Problems />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  const { isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <>
      <Toaster toastOptions={{ duration: 2000 }} />
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
