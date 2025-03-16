import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import MobileUserBar from "../components/MobileUserbar";

const SharedLayout = () => {
  const location = useLocation();
  const showDashboard = location.pathname === "/calculator" || location.pathname === "/diary";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileUserBar />
      <div className="flex flex-grow">
        {showDashboard && <Dashboard />} 
        <main className="flex-grow">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
