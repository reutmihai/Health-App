import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth, logoutUser } from "../auth/authService";

const MobileUserBar = () => {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const shortName = user?.displayName?.slice(0, 3) || "USR";

  const isInModal = true;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center pr-3 w-full bg-gray-200 md:hidden">
      <div>
        {true && (
          <button
            onClick={() => navigate(-1)}
            className="text-1xl pl-2 font-bold"
          >
            &larr; {/* Back arrow */}
          </button>
        )}
      </div>
      <div className="flex">
        <button onClick={() => setIsOpen(!isOpen)} className=" text-black py-2">
          {shortName}
        </button>

        <div className="border border-l border-gray-300 my-1 mx-1 "></div>

        <button
          onClick={logoutUser}
          className="py-2 text-gray-500  hover:font-bold hover:text-black"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default MobileUserBar;
