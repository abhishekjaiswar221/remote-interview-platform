import Home from "@/pages/Home";
import Problems from "@/pages/Problems";
import { useUser } from "@clerk/react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";
import Loader from "./components/loader/Loader";
import PageNotFound from "./components/ui/PageNotFound";
import AppLayout from "./layout/AppLayout";
import HomeLayout from "./layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./components/ui/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
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
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  const { isLoaded } = useUser();

  if (!isLoaded) return <Loader />;

  return (
    <>
      <Toaster toastOptions={{ duration: 2000 }} />
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
