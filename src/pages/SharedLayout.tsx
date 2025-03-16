import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import MobileUserBar from "../components/MobileUserbar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth  } from "../auth/authService";

const SharedLayout = () => {
  const location = useLocation();
  const showDashboard = location.pathname === "/calculator" || location.pathname === "/diary";
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setIsAuthenticated(!!user);
      });
  
      return () => unsubscribe();
    }, []);

    console.log(isAuthenticated);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isAuthenticated && <MobileUserBar isSearchModalOpen={false}/>}
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
