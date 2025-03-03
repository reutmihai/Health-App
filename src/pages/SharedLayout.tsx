// import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeUser from "../components/HomeUser";
import HomeGuest from "../components/HomeGuest";

const SharedLayout: React.FC = () => {
  const isAuthenticated = false;
  return (
    <>
      <Navbar />
       {isAuthenticated ? <HomeUser /> : <HomeGuest />}
    </>
  );
};

export default SharedLayout;
