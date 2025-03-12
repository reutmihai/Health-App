import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, logoutUser } from "../auth/authService";
import { onAuthStateChanged } from "firebase/auth";
import "../index.css";
import logoDesktop from "/logoDesktop.png";
import logoTablet from "/logoTablet.webp";
import logoMobile from "/logoMobile.webp";

const Navbar = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Adăugăm un state pentru loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false); // Setează `false` după verificarea autentificării
    });

    return () => unsubscribe();
  }, []);


  return (
    <nav className="bg-transparent p-4 lg:mt-10 flex justify-between items-center border-b border-gray-300 lg:border-0 lg:justify-start">
      <Link to="/">
        <picture>
          <source srcSet={logoDesktop} media="(min-width: 1024px)" />
          <source srcSet={logoTablet} media="(min-width: 768px) and (max-width: 1023px)" />
          <img src={logoMobile} alt="SlimMom Logo" />
        </picture>
      </Link>

      <div className="hidden lg:block border-l border-gray-300 h-6 mx-3"></div>

      <div className="space-x-4">
        {loading ? ( // Dacă încă se încarcă, afișăm un mesaj de loading
          <p className="text-gray-400">Loading...</p>
        ) : isAuthenticated ? (
          <>
            <NavLink to="/diary" className={({ isActive }) => isActive ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-gray-400 hover:text-gray-700"}>Diary</NavLink>
            <NavLink to="/calculator" className={({ isActive }) => isActive ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-gray-400 hover:text-gray-700"}>Calculator</NavLink>
            <button onClick={logoutUser} className="px-4 py-2 text-red-500 border border-red-500 rounded-lg transition duration-300 hover:bg-red-500 hover:text-white">Log Out</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-gray-400 hover:text-gray-700"}>Log In</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-gray-400 hover:text-gray-700"}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
