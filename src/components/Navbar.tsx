import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '/logo.webp';
import '../index.css';

const Navbar = () => {
  const [isAuthenticated] = useState(false); 

  return (
    <nav className="bg-white p-4 mt-10 flex flex-start items-center max-w-[350px]">
      {/* LOGO */}
      <Link to="/">
        <img src={logo} alt="SlimMom Logo"  className="w-25 h-10"/>
      </Link>
      <div className="border-l border-gray-300 h-6 mx-3"></div>

      {/* Butoane din Navbar */}
      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/diary" className="text-gray-400 hover:text-gray-700">Diary</Link>
            <Link to="/calculator" className="text-gray-400 hover:text-gray-700">Calculator</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-400 hover:text-gray-700">Log In</Link>
            <Link to="/register" className="text-gray-400 hover:text-gray-700">Registration</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
