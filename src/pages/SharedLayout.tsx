import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
       <Outlet />
    </div>
  );
};

export default SharedLayout;
