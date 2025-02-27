import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout: React.FC = () => {
  return (
    <>
      <Navbar />
        <Outlet />
    </>
  );
};

export default SharedLayout;
