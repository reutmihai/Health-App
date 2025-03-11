import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="ml-3 sm:mt-30 sm:ml-0 sm:mt-0 xs:flex items-center justify-center sm:h-auto h-screen">
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1] bg-default"></div>
      <div className="flex flex-col items-center w-full px-5 sm:w-[400px] p-6 ">
        <h1 className="text-orange-400 font-bold text-xl sm:text-3xl mb-10">REGISTER</h1>
        <form className="flex flex-col text-sm sm:text-md font-semibold gap-5 w-full">
        <input
            placeholder="Name *"
            type="text"
            id="email"
            className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
            required
          />
          <input
            placeholder="Email *"
            type="text"
            id="email"
            className="border-b-[0.5px] border-gray-300 p-2 w-full outline-none focus:border-black"
            required
          />
          <input
            placeholder="Password *"
            type="password"
            id="password"
            className="border-b-[0.5px] border-gray-300 p-2 outline-none focus:border-black"
            required
          />
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
            <button
              type="submit"
              className="flex justify-center text-sm sm:text-md bg-orange-400 text-white font-semibold px-15 py-2 rounded-lg shadow-md max-w-[100px]"
            >
              Register
            </button>
            <button
              type="button"
              className="flex justify-center text-sm sm:text-md text-orange-400 border-2 border-orange-400 font-semibold px-15 py-2 rounded-lg shadow-md max-w-[100px] sm:w-auto"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
