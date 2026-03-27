import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Children Routes */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomeLayout;
