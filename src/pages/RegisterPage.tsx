import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen px-3 sm:px-0">
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1] bg-default"></div>
      <div className="flex flex-col items-center w-full max-w-[400px] p-6">
        <h1 className="text-orange-400 font-bold text-3xl mb-10">REGISTER</h1>
        <form className="flex flex-col gap-5 w-full">
          <input
            placeholder="Name *"
            type="text"
            id="name"
            className="border-b border-gray-300 p-2 w-full outline-none focus:border-black"
            required
          />
          <input
            placeholder="Email *"
            type="email"
            id="email"
            className="border-b border-gray-300 p-2 w-full outline-none focus:border-black"
            required
          />
          <input
            placeholder="Password *"
            type="password"
            id="password"
            className="border-b border-gray-300 p-2 w-full outline-none focus:border-black"
            required
          />
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
            <button
              type="submit"
              className="bg-orange-400 text-white font-semibold px-5 py-2 rounded-lg shadow-md w-full sm:w-auto"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-orange-400 border-2 border-orange-400 font-semibold px-5 py-2 rounded-lg shadow-md w-full sm:w-auto"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
