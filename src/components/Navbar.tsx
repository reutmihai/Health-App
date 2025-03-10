import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import logoDesktop from "/logoDesktop.png";
import logoTablet from "/logoTablet.webp";
import logoMobile from "/logoMobile.webp";

const Navbar = () => {
  const [isAuthenticated] = useState(false);

  return (
    <nav className="bg-transparent p-4 lg:mt-10 flex justify-between items-center border-b border-gray-300 lg:border-0 lg:justify-start">
      {/* LOGO */}
      <picture>
        {/* LOGO pentru Desktop */}
        <source srcSet={logoDesktop} media="(min-width: 1024px)" />
        {/* LOGO pentru Tabletă */}
        <source
          srcSet={logoTablet}
          media="(min-width: 768px) and (max-width: 1023px)"
        />
        {/* LOGO pentru Mobile (fallback) */}
        <img src={logoMobile} alt="SlimMom Logo" />
      </picture>

      <div className="hidden lg:block border-l border-gray-300 h-6 mx-3"></div>

      {/* Butoane din Navbar */}
      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/diary" className="text-gray-400 hover:text-gray-700">
              Diary
            </Link>
            <Link
              to="/calculator"
              className="text-gray-400 hover:text-gray-700"
            >
              Calculator
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-400 hover:text-gray-700">
              Log In
            </Link>
            <Link to="/register" className="text-gray-400 hover:text-gray-700">
              Registration
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
