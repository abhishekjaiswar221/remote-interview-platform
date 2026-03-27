import Footer from "@/components/navigation/Footer";
import NavigationBar from "@/components/navigation/NavigationBar";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      {/* NavigationBar */}
      <NavigationBar />
      {/* Children Routes */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AppLayout;
