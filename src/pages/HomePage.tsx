import React, { useState } from 'react'
import HomeGuest from "../components/HomeGuest";
import HomeUser from "../components/HomeUser";
import { auth } from "../firebaseConfig";

export const HomePage: React.FC = () => {
      const [isAuthenticated] = useState(false); 
      

console.log("Firebase initialized:", auth);

  return (
    <>
    {isAuthenticated ? <HomeUser /> : <HomeGuest />}
    </>
  )
}
