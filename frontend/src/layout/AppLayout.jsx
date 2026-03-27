import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Children Routes */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AppLayout;
