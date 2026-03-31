import Home from "@/pages/Home";
import Problems from "@/pages/Problems";
import { useUser } from "@clerk/react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";
import Loader from "./components/loader/Loader";
import ErrorPage from "./components/ui/ErrorPage";
import PageNotFound from "./components/ui/PageNotFound";
import AppLayout from "./layout/AppLayout";
import HomeLayout from "./layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import Problem from "./pages/Problem";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: PublicRoute,
    errorElement: ErrorPage,
    children: [
      {
        Component: HomeLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
        ],
      },
    ],
  },
  {
    path: "app",
    Component: ProtectedRoute,
    errorElement: ErrorPage,
    children: [
      {
        Component: AppLayout,
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
          },
          {
            path: "problems",
            Component: Problems,
          },
          {
            path: "problem/:id",
            Component: Problem,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
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
