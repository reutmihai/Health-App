import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, checkAuthStatus } from "../auth/authService"; 

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password); 
      navigate("/calculator"); 
    } catch (err: any) {
      setError(err.message); 
    } 
  };

  useEffect(() => {
    checkAuthStatus((user) => {
      if (user) {
        navigate("/calculator");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center sm:block h-screen px-3 sm:px-0 sm:mt-15">
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1] bg-default"></div>
      <div className="flex flex-col items-center w-full max-w-[400px] p-6">
        <h1 className="text-orange-400 font-bold text-3xl mb-10">LOG IN</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <input
            placeholder="Email *"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="border-b border-gray-300 p-2 w-full outline-none focus:border-black"
            required
          />
          <input
            placeholder="Password *"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="border-b border-gray-300 p-2 w-full outline-none focus:border-black"
            required
          />
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
            <button
              type="submit"
              className="bg-orange-400 text-white font-semibold px-5 py-2 rounded-lg shadow-md w-full sm:w-auto"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-orange-400 border-2 border-orange-400 font-semibold px-5 py-2 rounded-lg shadow-md w-full sm:w-auto"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
