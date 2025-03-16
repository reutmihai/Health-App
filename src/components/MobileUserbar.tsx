import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logoutUser } from "../auth/authService";

const MobileUserBar = ({ isSearchModalOpen, handleCloseModal }: { isSearchModalOpen?: boolean; handleCloseModal?: () => void }) => {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const shortName = user?.displayName?.slice(0, 3) || "USR";

  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    await logoutUser(navigate); 
  };
  return (
    <div className="flex justify-between items-center pr-3 w-full bg-gray-200 md:hidden">
      <div>
        {/* Back arrow */}
      {isSearchModalOpen && (
        <button onClick={handleCloseModal} className="text-1xl pl-2 font-bold">
          &larr; 
        </button>
      )}
      </div>
      <div className="flex">
        <button onClick={() => setIsOpen(!isOpen)} className=" text-black py-2">
          {shortName}
        </button>

        <div className="border border-l border-gray-300 my-1 mx-1 "></div>

        <button
          onClick={handleLogout}
          className="py-2 text-gray-500  hover:font-bold hover:text-black"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default MobileUserBar;
