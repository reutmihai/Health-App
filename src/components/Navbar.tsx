import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../auth/authService";
import { onAuthStateChanged } from "firebase/auth";
import "../index.css";
import logoDesktop from "/logoDesktop.png";
import logoTablet from "/logoTablet.webp";
import logoMobile from "/logoMobile.webp";
import Userbar from "./Userbar";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4 lg:mt-10 flex justify-between items-center border-b border-gray-300 lg:border-0 lg:justify-start">
      <Link to={isAuthenticated ? "/calculator" : "/"}>
        <picture>
          <source srcSet={logoDesktop} media="(min-width: 1024px)" />
          <source
            srcSet={logoTablet}
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          <img src={logoMobile} alt="SlimMom Logo" />
        </picture>
      </Link>

      <div className="hidden lg:block border-l border-gray-300 h-6 mx-3"></div>
      <div className="flex flex-row-reverse gap-10">
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isAuthenticated && (
        <div className="hidden sm:block lg:hidden">
          <Userbar />
        </div>
        )}
      </div>

      {/* Desktop MENU */}
      <div className="hidden lg:block space-x-4">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : isAuthenticated ? (
          <div className="flex gap-5 items-center">
            <Userbar />
            <NavLink
              to="/diary"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-gray-700"
              }
            >
              Diary
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-gray-700"
              }
            >
              Calculator
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-gray-700"
              }
            >
              Log In
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-gray-700"
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>

      {/* Mobile/Tablet MENU */}
      <div
        className={`fixed top-18 left-0 w-full h-screen bg-[#1E3A5F] text-white transform transition-transform duration-300 z-100  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* MENU OPTIONS */}
        {isAuthenticated ? (
        <ul className="flex flex-col items-center gap-6 mt-20 text-lg">
           <li>
            <NavLink
              to="/diary"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-300 hover:text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              DIARY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-300 hover:text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              CALCULATOR
            </NavLink>
          </li>
          </ul>
          ) : (
            <ul className="flex flex-col items-center gap-6 mt-20 text-lg">
            <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-300 hover:text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              LOG IN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-300 hover:text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              REGISTER
            </NavLink>
          </li>
        </ul> 
          )}    
      </div>
    </nav>
  );
};

export default Navbar;
